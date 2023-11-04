import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./Tambah"

function DataSiswa() {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);
  console.log("masuk", showTambah);

  const gotoTambah = () => {
    console.log("first");
    setShowTambah(!showTambah);  
    console.log("first", showTambah );
    navigate("./tambah-siswa/");
  };

  const renderTambah = () => {
    console.log("kakakak")
    return (
      <div className="h-full w-full">
        <Tambah />
      </div>
    );
  };
  console.log("oooo", showTambah)

  return (
    <div className="w-full h-full">
      {/* <Tambah /> */}
      <h1 className="font-bold text-4xl font-['Segoe UI']">Data Guru</h1>
      <div className="mt-8 h-full bg-white">
        <div className="pt-6 ml-8">
          <div className="flex w-1/2 gap-x-5 text-white font-bold">
            <button
              className="px-12 py-2.5 bg-[#03045E]"
              onClick={gotoTambah}
            >
              Tambah
            </button>
            <button className="px-6 py-2.5 bg-[#805B10]">Import Data</button>
            <button className="px-10 py-2.5 bg-[#004B23]">Download Data</button>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <Routes>
        {showTambah && <Route path="./tambah-siswa/" element={renderTambah} />}
      </Routes>
    </div>
  );
}

export default DataSiswa;
