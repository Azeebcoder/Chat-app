import React from "react";

const Button = ({ type = "submit", text }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors cursor-pointer mt-3"
    >
      {text}
    </button>
  );
};

export default Button;
