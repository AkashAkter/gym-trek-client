import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-1 transform-translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-white bg-opacity-80 text-black text-sm px-2 py-1 rounded border border-gray-300">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
