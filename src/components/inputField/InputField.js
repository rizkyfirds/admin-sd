import React from "react";

function InputField(Value, Placeholder, changeHandler) {
  const handleInputChange = (e) => {
			changeHandler(e)
	}
  return (
    <div className="flex mt-4">
      <h1 className="my-auto w-1/12 font-['Segoe UI']">{Value}</h1>
      <input
        type="text"
        placeholder={Placeholder}
        onChange={handleInputChange}
        className="w-11/12 p-2.5 italic border border-[#000000] border-solid"
      />
    </div>
  );
}

export default InputField();
