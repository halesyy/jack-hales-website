import { ReactNode } from "react";

interface VerticalTabProps {
  title: string;
  icon: ReactNode;
  category?: string;
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function VerticalTab({ title, icon, category, children, isActive = false, onClick }: VerticalTabProps) {
  return (
    <div className="flex flex-col min-w-[300px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Tab Header */}
      <div className="bg-gray-50 border-b border-gray-200 rounded-t-lg">
        <button
          onClick={onClick}
          className={`w-full p-4 text-left transition-all rounded-t-lg duration-200 flex items-center space-x-3 hover:bg-gray-100 ${
            isActive 
              ? 'bg-blue-600 text-white hover:!bg-blue-700' 
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          <div className="text-xl">{icon}</div>
          <div className="flex flex-col">
            <span className="font-medium">{title}</span>
            {category && (
              <span className={`text-xs ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                {category}
              </span>
            )}
          </div>
        </button>
      </div>
      
      {/* Content Panel */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 text-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}

export default VerticalTab; 