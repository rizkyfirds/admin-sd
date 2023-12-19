import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./TambahKeluarga";
import Ubah from "./UbahKeluarga";
import Table from "../table/Table";
import SearchBar from "../search-bar/Search";
import Pagination from "../pagination/Pagination";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function DataKeluarga({
  tableHeaders,
  totalData,
  keyValues,
  handleSearch,
  searchTerm,
  setSearchTerm,
  currentPage,
  itemsPerPage,
  handlePageChange,
  startIndex,
  endIndex,
  keluargaCek,
  dataSiswa,
  setActionType,
}) {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);
  const [showUbah, setShowUbah] = useState("-");
  const [DeleteID, setDeleteID] = useState("-");
  const tableRef = useRef(null);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/data-keluarga/tambah-keluarga");
    }
    setSearchTerm("");
  }, [showTambah]);

  const renderTambah = () => {
    setShowTambah(true);
  };

  useEffect(() => {
    if (showUbah !== "-") {
      // console.log("ajajaj nih ", showUbah);
      navigate("/data-keluarga/ubah-keluarga");
    }
  }, [showUbah]);

  useEffect(() => {
    console.log("ini deket ", DeleteID);
    if (DeleteID !== "-") {
      axios({
        method: "DELETE",
        url: `http://localhost:3000/ortu/${DeleteID.ID}`,
      }).then((result) => {
        console.log("Delete Success", result);
        setActionType("update ortu");
      });
    }
  }, [DeleteID]);

  const downloadPdf = () => {
    const pdfConfig = {
      orientation: "landscape",
    };
    const doc = new jsPDF(pdfConfig);
    const styles = {
      font: "times",
      fontStyle: "normal",
      fontSize: 8,
    };
    doc.autoTable({
      head: [tableHeaders],
      body: totalData.map((data) =>
        keyValues.map((key) =>
          key === "namaSiswa"
            ? data["siswa"]["nama"]
            : data[key] !== undefined
            ? data[key]
            : "-"
        )
      ),
      styles: styles,
      headStyles: { fillColor: "#004B23", textColor: "#ffffff" },
    });
    doc.save("keluarga_table.pdf");
  };

  console.log("keluarga ", totalData)
  return (
    <div className="w-full h-full">
      {showTambah == false && showUbah == "-" ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">
            Data Keluarga Siswa
          </h1>
          <div className="my-8 h-fit bg-white">
            <div className="py-6 ml-8">
              <div className="flex w-1/2 gap-x-5 text-white font-bold">
                <button
                  className="px-12 py-2.5 bg-[#03045E] hover:bg-[#0066FF]"
                  onClick={renderTambah}
                >
                  Tambah
                </button>
                <button
                  className="px-10 py-2.5 bg-[#004B23] hover:bg-[#299948]"
                  onClick={downloadPdf}
                >
                  Download Data
                </button>
              </div>
              <div className="w-1/2"></div>
            </div>
            <div className="px-8 pb-8">
              {/*Total entries and Search Bar*/}
              <div className="pb-5 pt-3 flex justify-between">
                <span>
                  Show{" "}
                  <span className="bg-[#D9D9D9] p-1 mx-1 font-bold">
                    {totalData.length ? totalData.length : "-"}
                  </span>{" "}
                  Entries
                </span>
                <SearchBar onSearch={handleSearch} />
              </div>
              {/*Table*/}
              <div className="pb-5" ref={tableRef}>
                <Table
                  headers={tableHeaders}
                  keyValues={keyValues}
                  data={totalData}
                  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}
                  searchTerm={searchTerm}
                  keluargaCek={keluargaCek}
                  setUbah={setShowUbah}
                  setDeleteID={setDeleteID}
                />
              </div>
              {/*Data entry in current page and pagination*/}
              {searchTerm.length === 0 && (
                <div className="flex justify-between">
                  <span>
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, totalData.length)} entries
                  </span>
                  <Pagination
                    totalPages={Math.ceil(totalData.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
      <Routes>
        <Route
          path="/data-keluarga/tambah-keluarga"
          element={
            <Tambah
              setActionType={setActionType}
              setShowTambah={setShowTambah}
              data={dataSiswa}
            />
          }
        />
        <Route
          path="/data-keluarga/ubah-keluarga"
          element={
            <Ubah
              setShowUbah={setShowUbah}
              setActionType={setActionType}
              data={showUbah}
              // nama={nama}
              // nik={nik}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default DataKeluarga;
