import React, { useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import AddCheckBox from "../checkbox/AddCheckbox";

function CheckBoxInputField({ Value, changeHandler, ManyValue }) {
  const [S1, setS1] = useState([]);
  const [S2, setS2] = useState([]);
  const [S3, setS3] = useState([]);
  const [s1Jurusan, setS1Jurusan] = useState("");
  const [s2Jurusan, setS2Jurusan] = useState("");
  const [s3Jurusan, setS3Jurusan] = useState("");
  const [s1Univ, setS1Univ] = useState("");
  const [s2Univ, setS2Univ] = useState("");
  const [s3Univ, setS3Univ] = useState("");
  console.log("poooo ",changeHandler)

  const handleJurusanChange = (e, value) => {
    const setJurusanState = `set${value}Jurusan`;
    const newValue = e.target.value;
    eval(`${setJurusanState}('${newValue}')`);
  };

  const handleUnivChange = (e, value) => {
    const setUnivState = `set${value}Univ`;
    const newValue = e.target.value;
    eval(`${setUnivState}('${newValue}')`);
  };

  const combineDataSets = (sets) => {
    return sets
      .filter((set) => set.length > 0)
      .map(
        (set, index) =>
          `${set.join(" ")} Jurusan ${eval(`s${index + 1}Jurusan`)} di ${eval(
            `s${index + 1}Univ`
          )}`
      )
      .join(", ");
  };

  const combinedData = () => {
    const data = combineDataSets([S1, S2, S3]);
    console.log("cekkkk ", data)
    handleInputChange(data);
  };

  useEffect(() => {
    combinedData();
  }, [S1,s1Jurusan, s1Univ, S2,s2Jurusan, s2Univ, S3,s3Jurusan, s3Univ]);

  const handleInputChange = (e) => {
    changeHandler(e);
  };


  return (
    <div className="flex mt-4">
      <div className="my-auto w-24">
        <h1 className="font-SegoeUI">{Value}</h1>
      </div>
      <div className="w-full relative">
        {ManyValue.map((value, i) => (
          <div key={i} className="pt-2">
            <div className="flex">
              <div className="flex text-center m-auto gap-x-2 mr-2">
                <AddCheckBox
                  lulusanPicked={eval(value)}
                  setLulusanPicked={(newValue) => eval(`set${value}`)(newValue)}
                  lulusanData={value}
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
        ))}
      </div>
    </div>
  );
}

export default CheckBoxInputField;
