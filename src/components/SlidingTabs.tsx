import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  tabs: Array<{ id: string; name: string }>;
  activeTabIndex: number;
  setActiveTabIndex: Dispatch<SetStateAction<number>>;
};

export default function SlidingTabs({
  tabs,
  activeTabIndex,
  setActiveTabIndex,
}: Readonly<Props>) {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flew-row relative mx-auto flex h-12 w-full justify-between rounded-3xl border border-white/30 bg-gradient-to-r from-cyan-800 to-slate-600 px-2 backdrop-blur-sm dark:border-black/40 dark:bg-zinc-900/90 md:w-[400px]">
      <span
        className="absolute bottom-0  top-0 -z-10 mx-auto flex w-full overflow-hidden rounded-3xl py-2 text-center transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>
      {tabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive
                ? `w-full md:w-[200px]`
                : `w-full hover:text-neutral-300 md:w-[200px]`
            } my-auto cursor-pointer select-none rounded-full px-4 text-center text-lg font-bold text-white`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
