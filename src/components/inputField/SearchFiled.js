import React, { useState, useEffect } from "react";

function SearchField({
  Value,
  Placeholder,
  changeHandler,
  datas,
  // nikFiltered,
}) {
  console.log("cekekek ", datas);
  const dataSiswa = datas || [];
  console.log("yuuhh ", dataSiswa);
  const dataNIK = dataSiswa.map((item) => (item.NIK ? item.NIK : item.ID)) || [];
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Filter data based on input value
    const filteredResults = dataNIK.filter(
      (item) => item && item.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredData(filteredResults);
    setIsDropdownVisible(true);
  };

  const handleSelectChange = (selectedValue) => {
    setInputValue(selectedValue);
    setIsDropdownVisible(false);
    // nikFiltered(selectedValue); // Assuming you want to pass the selected item to a function
  };

  useEffect(() => {
    if (inputValue !== "") {
      handleInputChange(inputValue);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    const value = e.target ? e.target.value : e;
    changeHandler(value);
  };

  return (
    <div className="flex mt-4">
      <div className="my-auto w-24">
        <h1 className="font-SegoeUI">{Value}</h1>
      </div>
      <div className="w-full relative">
        <div className="relative">
          <div className="w-full relative">
            <input
              type="text"
              placeholder={Placeholder}
              value={inputValue}
              onChange={handleSearchChange}
              className="w-full p-2.5 italic border border-[#000000] border-solid"
            />
            {isDropdownVisible && filteredData.length > 0 && (
              <div className="z-20 w-full h-fit absolute top-full left-0 bg-white border border-[#000000] border-solid mt-2 p-2.5">
                <ul>
                  {filteredData.map((item, index) => (
                    <li
                      key={index}
                      className="hover:bg-body cursor-pointer"
                      onClick={() => handleSelectChange(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchField;
