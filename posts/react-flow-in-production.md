---
title: "React Flow In Production"
date: "2025-03-20"
description: "A behind-the-scenes look at how we built Konan AI’s workflow editor using React Flow, Dagre.js, and Zustand — from designing intuitive node-based UIs to managing data flow and integrating with the backend."
duration: "8 mins read"
---


## Building Workflows in Konan AI with React Flow

![Workflow](https://cdn.prod.website-files.com/67ac814b1bd2403fd14444a2/67cd749be725080850561375_HQ-p-2000.png)


# Almost two years ago, I worked on a core feature for **Konan AI** by Synapse Analytics — a platform designed to help risk officers and financial institutions create and manage workflow policies more easily.  
We called this feature **Workflows**. The idea was to let users design complex risk assessment processes visually, in a way that feels simple and intuitive. For the UI, I relied on [`react-flow`](https://reactflow.dev/), a powerful React package for building node-based editors.  
In this post, I’ll walk you through exactly how we built it — from the setup, to handling data flow between nodes and edges, and integrating everything with the backend.

---

## Contents

1. [React Flow Overview](#react-flow-overview)
2. [How Data is Dynamically Shared Across Nodes and Edges](#how-data-is-dynamically-shared-across-nodes-and-edges)
3. [How the Frontend Constructs a Workflow](#how-the-frontend-constructs-a-workflow)
4. [Persisting and Updating Data in Workflow Blocks](#persisting-and-updating-data-in-workflow-blocks)

---

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


**Konan Custom Workflow Setup — Part 1**  
`WorkflowCanvas.tsx`  
Responsible for rendering the `<ReactFlow>` component.

`workflow-fixtures.ts`  
Holds:  
- Node types  
- Edge types  
- Custom labels  
- Edge styles  

**Konan Custom Workflow Setup — Part 2**  
`CustomEdgeLabel.tsx`  
Defines the style for custom labels above edges.

`Workflows.tsx`  
Initializes default nodes and edges to kick-start a workflow.

**Konan Custom Workflow Setup — Part 3**  
We used Dagre.js for automatic layouting. This keeps the diagram clean without manual adjustment.  
Directed Acyclic Graph (DAG) ensures:  
- No loops  
- Predictable execution order  

[Wikipedia: DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph)

---

## 2. How Data is Dynamically Shared Across Nodes and Edges

We went with uncontrolled mode in React Flow.  
In controlled mode, you manage all node/edge state in your own React state.  
In uncontrolled mode, React Flow’s internal store handles it.  
This allows us to:  
- Programmatically trigger updates from anywhere.  
- Use `ReactFlowProvider` to wrap the workflow component.

```tsx
import { ReactFlowProvider } from 'react-flow-renderer';

<ReactFlowProvider>
  <WorkflowCanvas />
</ReactFlowProvider>
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
`AddBlockNode.tsx`  
When a node is selected:  
- Pass its data to a helper function.  
- This function sets up the node and its predefined children.  
- Return them as an array to merge into the store.

**Part 2 — Defining Routes**  
`workflowHelpers.ts`  
Function `preDefinedRoutesForNodes`:  
- Builds the data for the selected node.  
- Adds possible child nodes.

**Part 3 — Updating the Graph**  
`Workflow.tsx`  
`updateGraph`:  
- Attaches edges for new nodes.  
- Updates node/edge state.  
- Triggers layout recalculation.

**Part 4 — Updating Nodes Internally**  
`CalculatorNode.tsx`  
We used `useEffect` to watch for changes in input fields and update the node’s state automatically.

```tsx
useEffect(() => {
  updateNodeInternally({ feature, equation });
}, [feature, equation]);
```

---

## 3. How the Frontend Constructs a Workflow

**Step 1 — Validation**  
We run `validateWorkflow` before creating a workflow:  
- Checks if there are incomplete nodes (e.g., `AddBlockNode` type).

**Step 2 — Parsing for the Backend**  
We convert the frontend node structure into the backend’s required format:  
- Extract `node.data`  
- Add indexes for parent-child relationships  

**Step 3 — Handling Invalid Data**  
If any node has incomplete or invalid data, we stop and return an error.

**Step 4 — Sending to Backend**  
We call the `createWorkflow` mutation with the validated data.

**Step 5 — Parsing the Backend Response**  
When fetching an existing workflow:  
- Pass nodes and starting node to `convertNodesToFlow`.  
- Get an array of nodes/edges ready for React Flow to render.

---

## 4. Persisting and Updating Data in Workflow Blocks

Since the original text did not provide specific content for this section, I'll note that this section was referenced in the Table of Contents but requires additional details to complete. Typically, this section would cover:  
- How workflow data is saved (e.g., to a database via API calls).  
- How updates to nodes/edges are persisted in real-time or on save.  
- Any specific backend integration details for storing workflow state.  

If you have additional content for this section, please provide it for a more complete Markdown file.

---

## Resources

- [React Flow Documentation](https://reactflow.dev/docs/)  
- [React Flow GitHub](https://github.com/wbkd/react-flow)  
- [Dagre.js](https://github.com/dagrejs/dagre)  
- [Zustand](https://github.com/pmndrs/zustand)