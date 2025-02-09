import React from "react";

function HoverDetails({ children, text, handleCLick,show }) {
  return (
    <div className="relative group flex items-center justify-center cursor-pointer text-xl" onClick={()=>handleCLick(!show)}>
      {/* Icon */}
      {children}
      {/* Hover Content */}
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 bg-gray-900 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {text}

        {/* Tooltip Arrow */}
        <span className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></span>
      </span>
    </div>
  );
}

export default HoverDetails;
