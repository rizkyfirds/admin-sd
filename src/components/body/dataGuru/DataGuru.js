import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./TambahGuru";
import Ubah from "./UbahGuru";
import SearchBar from "../search-bar/Search";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function DataGuru({
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
  setActionType,
}) {
  console.log("tyest ", totalData);
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);
  const [showUbah, setShowUbah] = useState("-");
  const [DeleteID, setDeleteID] = useState("-");
  const tableRef = useRef(null);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/data-guru/tambah-guru");
    }
    setSearchTerm("");
  }, [showTambah]);

  const renderTambah = () => {
    setShowTambah(true);
  };

  useEffect(() => {
    if (showUbah !== "-") {
      // console.log("ajajaj nih ", showUbah);
      navigate("/data-guru/ubah-guru");
    }
  }, [showUbah]);

  useEffect(() => {
    // console.log("ini deket ", DeleteID)
    axios({
      method: "DELETE",
      url: `http://localhost:3000/guru/${DeleteID.ID}`,
    }).then((result) => {
      console.log("Delete Success", result);
      setActionType("update guru");
    });
  }, [DeleteID]);

  const downloadPdf = () => {
    // Atur konfigurasi gaya untuk teks
    const styles = {
      font: "times",
      fontStyle: "normal",
      fontSize: 8,
    };

    // Atur konfigurasi orientasi kertas
    const pdfConfig = {
      orientation: "landscape",
    };

    // Buat objek jsPDF dengan konfigurasi orientasi kertas
    const doc = new jsPDF(pdfConfig);

    // Terapkan konfigurasi gaya
    doc.autoTable({
      head: [tableHeaders],
      body: totalData.map((data) => keyValues.map((key) => data[key])),
      styles: styles,
      headStyles: { fillColor: "#004B23", textColor: "#ffffff" },
    });
    doc.save("guru_table.pdf");
  };

  return (
    <div className="w-full h-full">
      {showTambah == false && showUbah == "-" ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Guru</h1>
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
                    {totalData.length}
                  </span>{" "}
                  Entries
                </span>
                <SearchBar onSearch={handleSearch} />
              </div>
              {/*Table*/}
              <div className="pb-5" ref={tableRef}>
                <Table
                  headers={tableHeaders}
                  data={totalData}
                  keyValues={keyValues}
                  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}
                  searchTerm={searchTerm}
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
          path="/data-guru/tambah-guru"
          element={
            <Tambah
              setShowTambah={setShowTambah}
              setActionType={setActionType}
              data={totalData}
            />
          }
        />
        <Route
          path="/data-guru/ubah-guru"
          element={
            <Ubah
              setShowUbah={setShowUbah}
              setActionType={setActionType}
              data={showUbah}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default DataGuru;
