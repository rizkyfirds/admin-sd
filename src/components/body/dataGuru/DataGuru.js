import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./TambahGuru";

function DataGuru() {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/data-guru/tambah-guru");
    } else {
      navigate("../");
    }
  }, [showTambah]);

  const renderTambah = () => {
    setShowTambah(true);
  };

  return (
    <div className="w-full h-auto">
      {showTambah == false ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Guru</h1>
          <div className="mt-8 h-full bg-white">
            <div className="pt-6 ml-8">
              <div className="flex w-1/2 gap-x-5 text-white font-bold">
                <button
                  className="px-12 py-2.5 bg-[#03045E]"
                  onClick={renderTambah}
                >
                  Tambah
                </button>
                <button className="px-6 py-2.5 bg-[#805B10]">
                  Import Data
                </button>
                <button className="px-10 py-2.5 bg-[#004B23]">
                  Download Data
                </button>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </>
      ) : null}
      <Routes>
        <Route path="/data-guru/tambah-guru" element={<Tambah />} />
      </Routes>
    </div>
  );
}

export default DataGuru;
