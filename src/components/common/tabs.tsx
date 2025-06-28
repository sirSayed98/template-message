import React, { useState } from 'react';


type Tab = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
};

export default function TabsComponent({ tabs,onChange }: { tabs: Tab[], onChange: (tabId: string) => void }) {
 
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex bg-gray-100 rounded-sm p-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={(e) => {
                e.preventDefault()
                setActiveTab(tab.id)
                onChange(tab.id)
              }}
              className={`flex items-center justify-center py-1 rounded-sm font-medium text-sm transition-all duration-200
                ${activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }
                flex-1
              `}
            >
              {tab.icon && <span className="text-base">{tab.icon}</span>}
              <span className="ml-2 text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      {activeTabData?.content && (
          <div className='mt-2'>{activeTabData?.content}</div>
      )}
    </>
  );
}