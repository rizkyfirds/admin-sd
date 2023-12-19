import React, { useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import AddCheckBox from "../checkbox/AddCheckbox";

function InputField({
  Value,
  Placeholder,
  changeHandler,
  tanggal = false,
  dropdown = false,
  ManyValue,
  Checkbox = false,
  SearchInput = false, 
  datas,
  nikFiltered
}) {
  const [CheckboxValue, setCheckboxValue] = useState([]);
  const [S1, setS1] = useState([]);
  const [S2, setS2] = useState([]);
  const [S3, setS3] = useState([]);
  const [s1Jurusan, setS1Jurusan] = useState("");
  const [s2Jurusan, setS2Jurusan] = useState("");
  const [s3Jurusan, setS3Jurusan] = useState("");
  const [s1Univ, setS1Univ] = useState("");
  const [s2Univ, setS2Univ] = useState("");
  const [s3Univ, setS3Univ] = useState("");
  
  // const [inputValue, setInputValue] = useState('');
  // const [filteredData, setFilteredData] = useState([]);
  // const dataSiswa = datas
  // const dataNIK = dataSiswa ? [...new Set(dataSiswa.map((item) => item.NIK))] : [];
  // console.log("nik ",dataNIK)
  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // const [selectedNIK, setSelectedNIK] = useState(null);
  // nikFiltered = selectedNIK

  const handleInputChange = (e) => {
    changeHandler(e);
  };

  const handleDropDownChange = (e) => {
    changeHandler(e);
  };

  const handleJurusanChange = (e, value) => {
    const setJurusanState = `set${value}Jurusan`;
    const newValue = e.target.value;

    // Use bracket notation to dynamically set state
    eval(`${setJurusanState}('${newValue}')`);
  };

  const handleUnivChange = (e, value) => {
    const setUnivState = `set${value}Univ`;
    const newValue = e.target.value;

    // Use bracket notation to dynamically set state
    eval(`${setUnivState}('${newValue}')`);
  };

  return (
    <div className="flex mt-4">
      <div className="my-auto w-24">
        <h1 className="font-SegoeUI">{Value}</h1>
      </div>
      <div className="w-full relative">
        {Checkbox === true ? (
          ManyValue.map((value, i) => (
            <div key={i} className="pt-2">
              <div className="flex">
                <div className="flex text-center m-auto gap-x-2 mr-2">
                  <AddCheckBox
                    lulusanPicked={eval(value)}
                    setLulusanPicked={ eval(`set${value}`)}
                    lulusanData={ManyValue}
                  />
                  {value}
                </div>
                <h1 className="font-SegoeUI my-auto w-24 mx-4">Jurusan</h1>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder={"Isi jurusan " + value}
                    onChange={(e) => handleJurusanChange(e, value)}
                    className="w-full p-2.5 italic border border-[#000000] border-solid"
                  />
                </div>
                <h1 className="font-SegoeUI my-auto w-24 mx-4">Universitas</h1>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder={"isi nama universitas " + value}
                    onChange={(e) => handleUnivChange(e, value)}
                    className="w-full p-2.5 italic border border-[#000000] border-solid"
                  />
                </div>
              </div>
            </div>
          ))
        ) : dropdown === true ? (
          <select
            id="dropdown"
            className="w-full p-2.5 italic border border-[#000000] border-solid"
            onChange={handleDropDownChange}
          >
            <option
              value=""
              disabled
              selected
              hidden
              className="text-neutral-400 font-bold"
            >
              {Placeholder}
            </option>
            {ManyValue.map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </select>
        ): (
          <div className="w-full">
            <input
              type="text"
              placeholder={Placeholder}
              onChange={handleInputChange}
              className="w-full p-2.5 italic border border-[#000000] border-solid"
            />
          </div>
        )}

        {tanggal === true && (
          <MdOutlineDateRange className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl" />
        )}
      </div>
    </div>
  );
}

export default InputField;
