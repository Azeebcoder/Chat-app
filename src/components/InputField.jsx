import React, { memo } from "react";

const InputField = ({type,id,name,value,setValue,text}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full p-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <label
        htmlFor={id}
        className="absolute left-4 -top-2.5 text-sm bg-white px-1 transform scale-75 origin-left transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:scale-120 peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:scale-100 cursor-text"
      >
        {text}
      </label>
    </div>
  );
};

export default memo(InputField);
