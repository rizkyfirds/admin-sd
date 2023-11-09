import React from "react";

function InputField({ Value, Placeholder, changeHandler }) {
  const handleInputChange = (e) => {
    changeHandler(e);
  }

  return (
    <div className="flex mt-4 gap-x-0.5 w-full">
      <h1 className="my-auto w-24 font-['Segoe UI']">{Value}</h1>
      <input
        type="text"
        placeholder={Placeholder}
        onChange={handleInputChange}
        className="w-full p-2.5 italic border border-[#000000] border-solid"
      />
    </div>
  );
}

export default InputField;
