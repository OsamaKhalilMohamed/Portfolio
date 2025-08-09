---
title: "React Flow In Production"
date: "2025-03-20"
description: "A behind-the-scenes look at how we built Konan AI’s workflow editor using React Flow, Dagre.js, and Zustand — from designing intuitive node-based UIs to managing data flow and integrating with the backend."
duration: "8 mins read"
---


![Workflow](https://cdn.prod.website-files.com/67ac814b1bd2403fd14444a2/67cd749be725080850561375_HQ-p-2000.png)


# Couple of years ago, I worked on a core feature for **Konan AI** by Synapse Analytics — a platform designed to help risk officers and financial institutions create and manage workflow policies more easily.  
We called this feature **Workflows**. The idea was to let users design complex risk assessment processes visually, in a way that feels simple and intuitive. For the UI, I relied on [`react-flow`](https://reactflow.dev/), a powerful React package for building node-based editors.  
In this post, I’ll walk you through exactly how we built it — from the setup, to handling data flow between nodes and edges, and integrating everything with the backend.

---

## Content

1. React Flow Overview
2. How Data is Dynamically Shared Across Nodes and Edges
3. How the Frontend Constructs a Workflow

## 1. React Flow Overview (Exploring: nodes, edges, connectivity and layouting)

`react-flow` is a library for creating customizable, interactive node-based UIs.  
In our case, nodes represented workflow steps and edges represented transitions or logic flows.  
Key features we used:  
- **Nodes & edges**: Represent workflow logic visually.  
- **Connectivity**: Users can drag connections between steps.  
- **Layouting**: We used Dagre.js to arrange nodes automatically.

---

### Example: A Simple Flow

```tsx
import React, { useState, useEffect } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'World' },
  },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        defaultViewport={defaultViewport}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
```
![simple-workflow-example](/reactflowexample.png)


### Konan Custom Workflow Setup — Part 1 
rendering the `<ReactFlow>` component.

```tsx
/* Reactflow canvas */
return (
  <ReactFlow
    edgeTypes={edgeTypes}
    snapToGrid={true}
    nodes={isWorkflowLoading ? [] : nodes}
    nodeTypes={nodeTypes}
    fitView={isCreateMode}
    nodesDraggable={true}
    onEdgesChange={onEdgesChange}
    className="transition"
    edges={edges}
    connectionLineType={ConnectionLineType.Bezier}
  >
    <Background />
    <Controls
      onZoomIn={() => zoomIn({ duration: 400 })}
      onZoomOut={() => zoomOut({ duration: 400 })}
      onFitView={() => fitView({ duration: 500 })}
      position="top-right"
      showFitView={true}
      showInteractive={false}
    />
  </ReactFlow>
)

```

Config for edge styles
```tsx
export const edgeTypes = {
  custom: CustomEdgeLabel,
}

// Generic CUSTOM EDGE STYLES
export const markerEnd: EdgeMarker = {
  type: MarkerType.Arrow,
  width: 40,
  height: 20,
  color: theme.palette.neutral.border.active,
  orient: "auto",
}

export const edgeStyles = {
  strokeWidth: 2,
  stroke: theme.palette.neutral.border.active,
  color: theme.palette.neutral.border.active,
}

// declaring our custom nodes types/styles to react-flow
export const nodeTypes = {
  SelectionNode,
  AddBlockNode,
  LabeledNode,
  FilterNode,
  CalculatorNode,
}
```
Holds:  
- Node types  
- Edge types  
- Custom labels  
- Edge styles  

### Konan Custom Workflow Setup — Part 2
 
Defining the style for custom labels above edges.

```tsx
return (
  <Fragment>
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      style={style}
    />
    <EdgeLabelRenderer>
      <div
        style={{
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          background: theme.palette.greyScale.background[1],
          padding: 5,
          borderRadius: 2,
          fontSize: 12,
          fontWeight: 700,
          color: theme.palette.greyScale.text[1],
        }}
        className="nodrag nopan"
      >
        <Typography variant="label">{data.text}</Typography>
      </div>
    </EdgeLabelRenderer>
  </Fragment>
);

```

 
Initializing default nodes and edges to kick-start a workflow.

```tsx
// default nodes and edges for EVERY workflow
const initNodesAndEdges = (): void => {
  const initNodes = [
    {
      id: "1",
      data: { nodeType: "StartNode" },
      position: { x: 100, y: 100 },
      type: "SelectionNode",
      draggable: true,
    },
    {
      id: "2",
      data: { updateGraph },
      position: { x: 100, y: 250 },
      type: "AddBlockNode",
    },
  ];

  const initEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "default",
      animated: true,
      markerEnd,
      style: edgeStyles,
    },
  ];
};

```

### Konan Custom Workflow Setup — Part 3 
We used Dagre.js for automatic layouting. This keeps the diagram clean without manual adjustment.  
Directed Acyclic Graph (DAG) ensures:  
- No loops  
- Predictable execution order  

And here's how the canvas looks like after creating this workflow based on these configurations
![Workflow-early-prototype](/workflow.png)

[Wikipedia: DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph)

---

## 2. How Data is Dynamically Shared Across Nodes and Edges (Diving deep into data flow implementation) 

What’s the problem so far with our implementation? Simple: we don’t have a clean, reliable way to dynamically update nodes and edges from anywhere—custom nodes, side panels, edge labels—without spaghetti props and rerender storms. In a controlled setup, every node/edge lives in your React state, so you end up lifting state to the top, passing callbacks down five layers, and praying nothing desyncs. Fun for no one. The fix is going uncontrolled with React Flow and wrapping the canvas in <ReactFlowProvider>. That hands ownership of nodes/edges to React Flow’s internal Zustand store, giving us a single source of truth we can poke from any child: add a node, tweak data, attach edges—no prop-drilling, fewer re-renders, more sanity.

So basically There are two ways to use React Flow - controlled or uncontrolled. Controlled means, that you are in control of the state of the nodes and edges. In an uncontrolled flow, the state of the nodes and edges is handled by React Flow internally. uncontrolled flow allows us to programmatically trigger any update action on any state from the store
So We went with uncontrolled mode in React Flow.  

```tsx
// React Flow v11+ (package name: 'reactflow')

// in order to use uncontrolled flow, 
// we must wrap the workflow component with <ReactFlowProvider/>
import { ReactFlowProvider } from "reactflow";
import { memo } from "react";

const FlowWithProvider = (): React.ReactElement => {
  return (
    <div className="zoompanflow">
      <ReactFlowProvider>
        <Workflows />
      </ReactFlowProvider>
    </div>
  );
};

export default memo(FlowWithProvider);

```

### React Flow Store

Under the hood, React Flow uses Zustand for state management.  
The store:  
- Holds all nodes, edges, and other state.  
- Can be accessed using `useStore` inside a `ReactFlowProvider`.  

Basic flow of state updates:  
1. Component dispatches an action.  
2. Reducer updates the store.  
3. Subscribed components re-render.

**Links**:  
- [Zustand GitHub](https://github.com/pmndrs/zustand)  
- [React Flow Provider Docs](https://reactflow.dev/docs/api/react-flow-provider/)

### Workflow Data Flow

**Part 1 — Adding Nodes**  
When a node is selected:  
- Pass its data to a helper function.  
- This function sets up the node and its predefined children.  
- Return them as an array to merge into the store.

**Part 2 — Defining Routes**  
We built a Function that:  
- Builds the data for the selected node.  
- Adds possible child nodes.

**Part 3 — Updating the Graph**  
We built a central function that:  
- Attaches edges for new nodes.  
- Updates node/edge state.  
- Triggers layout recalculation.

**Part 4 — Updating Nodes Internally**  
We used `useEffect` to watch for changes in input fields and update the node’s state automatically.

```tsx
useEffect(() => {
  updateNodeInternally({ feature, equation });
}, [feature, equation]);
```

---

## 3. How the Frontend Constructs a Workflow

**Step 1 — Validation**  
We run a validation function before creating a workflow:  
- Checks if there are incomplete nodes.

**Step 2 — Parsing for the Backend**  
We convert the frontend node structure into the backend’s required format:  
- Extract `node.data`  
- Add indexes for parent-child relationships  

**Step 3 — Handling Invalid Data**  
If any node has incomplete or invalid data, we stop and return an error.

**Step 4 — Sending to Backend**  
We call a mutation function with the validated data.

**Step 5 — Parsing the Backend Response**  
When fetching an existing workflow:  
- Pass nodes and starting node to convert into our react-flow format.  
- Get an array of nodes/edges ready for React Flow to render.

---

## Resources

- [React Flow Documentation](https://reactflow.dev/docs/)  
- [React Flow GitHub](https://github.com/wbkd/react-flow)  
- [Dagre.js](https://github.com/dagrejs/dagre)  
- [Zustand](https://github.com/pmndrs/zustand)