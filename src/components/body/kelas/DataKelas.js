import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./TambahKelas";
import Ubah from "./UbahKelas";
import Table from "../table/Table";
import SearchBar from "../search-bar/Search";
import Pagination from "../pagination/Pagination";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function DataKelas({
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
  kelas,
  setActionType
}) {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);
  const [showUbah, setShowUbah] = useState("-");
  const [DeleteID, setDeleteID] = useState("-");
  const tableRef = useRef(null);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/data-kelas/tambah-kelas");
    }
    setSearchTerm("");
  }, [showTambah]);

  const renderTambah = () => {
    setShowTambah(true);
  };

  useEffect(() => {
    if (showUbah !== "-") {
      // console.log("ajajaj nih ", showUbah);
      navigate("/data-kelas/ubah-kelas");
    }
  }, [showUbah]);

  useEffect(() => {
    if(DeleteID !== "-"){
      console.log("daaaa ", DeleteID.id)
      axios({
        method: "DELETE",
        url: `http://localhost:3000/kelas/${DeleteID.id}`,
      }).then((result) => {
        // console.log(DeleteID.kelas.ID, "Delete Success", result);
        setActionType("update kelas");
      });
    }
    setDeleteID("-")
  }, [DeleteID]);

  const downloadPdf = () => {
    const styles = {
      font: "times",
      fontStyle: "normal",
      fontSize: 8
  };

  // Atur konfigurasi orientasi kertas
  const pdfConfig = {
      orientation: "landscape"
  };

  // Buat objek jsPDF dengan konfigurasi orientasi kertas
  const doc = new jsPDF(pdfConfig);

    doc.autoTable({
      head: [tableHeaders],
      body: totalData.map((data) =>
        keyValues.map((key) =>
          data["kelas"][key] !== undefined ? data["kelas"][key] : "-"
        )
      ),
      styles: styles,
      headStyles: { fillColor: "#004B23", textColor: "#ffffff" },
    });

    doc.save("kelas_table.pdf");
  };

  return (
    <div className="w-full h-full">
      {showTambah == false && showUbah == "-" ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Kelas</h1>
          <div className="mt-8 h-fit bg-white">
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
              {totalData.length !== null ? (
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
              ) : (
                <div></div>
              )}
              {/*Table*/}
              <div className="pb-5" ref={tableRef}>
                <Table
                  headers={tableHeaders}
                  data={totalData}
                  keyValues={keyValues}
                  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}
                  searchTerm={searchTerm}
                  kelas={true}
                  setUbah={setShowUbah}
                  setDeleteID={setDeleteID}
                />
              </div>
              {/*Data entry in the current page and pagination*/}
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
          path="/data-kelas/tambah-kelas"
          element={<Tambah setShowTambah={setShowTambah} setActionType={setActionType}/>}
        />
        <Route
          path="/data-kelas/ubah-kelas"
          element={<Ubah setShowUbah={setShowUbah} setActionType={setActionType}  data={showUbah}/>}
        />
      </Routes>
    </div>
  );
}

export default DataKelas;
