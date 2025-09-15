interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({
  activeTab,
  onTabChange,
}: NavigationProps) {
  const tabs = ["About", "Professional", "Gallery"];

  return (
    <div className="flex space-x-6 w-full sm:flex-col sm:space-x-0 sm:space-y-2 sm:justify-start sm:w-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`block text-left ${activeTab === tab ? "text-black" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
