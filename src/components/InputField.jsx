import React from "react";

const InputField = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full rounded-full text-sm px-6 py-3 bg-white text-gray-600
         placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FF9C01] 
         transition-all duration-300 ${className}`}
    />
  );
};

export default InputField;
