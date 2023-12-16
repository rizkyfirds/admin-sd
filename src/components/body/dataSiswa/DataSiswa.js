import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./TambahSiswa";
import Table from "../table/Table";
import SearchBar from "../search-bar/Search";
import Pagination from "../pagination/Pagination";
import Ubah from "./UbahSiswa";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

function DataSiswa({
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
  // console.log("uuuuu ", totalData);
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);
  const [showUbah, setShowUbah] = useState("-");
  const [DeleteID, setDeleteID] = useState("-");
  const tableRef = useRef(null);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/data-siswa/tambah-siswa");
    }
    setSearchTerm("");
  }, [showTambah]);

  const renderTambah = () => {
    setShowTambah(true);
  };

  useEffect(() => {
    if (showUbah !== "-") {
      console.log("ajajaj nih ", showUbah);
      navigate("/data-siswa/ubah-siswa");
    }
  }, [showUbah]);

  useEffect(() => {
    axios({
      method: "DELETE",
      url: `http://localhost:3000/siswa/${DeleteID.ID}`,
    }).then((result) => {
      console.log("Delete Success", result);
      setActionType("update siswa");
    });
  }, [DeleteID]);

//   const downloadPdf = () => {
//     const doc = new jsPDF();

//     // Atur konfigurasi gaya untuk teks
//     const styles = {
//         font: "times",
//         fontStyle: "normal",
//         fontSize: 12
//     };

//     // Terapkan konfigurasi gaya
//     doc.autoTable({
//         head: [tableHeaders],
//         body: totalData.map((data) => keyValues.map((key) => data[key])),
//         styles: styles
//     });

//     doc.save("siswa.pdf");
// };

const downloadPdf = () => {
  // Atur konfigurasi gaya untuk teks
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

  // Terapkan konfigurasi gaya
  doc.autoTable({
      head: [tableHeaders],
      body: totalData.map((data) => keyValues.map((key) => data[key])),
      styles: styles,
      headStyles: { fillColor: "#004B23", textColor: "#ffffff" },
  });

  // Simpan file PDF
  doc.save("siswa_landscape.pdf");
};

// const downloadPdf = () => {
//   // Atur konfigurasi gaya untuk teks
//   const styles = {
//       font: "times",
//       fontStyle: "normal",
//       fontSize: 8
//   };

//   // Atur konfigurasi orientasi kertas
//   const pdfConfig = {
//       orientation: "landscape"
//   };

//   // Buat objek jsPDF dengan konfigurasi orientasi kertas
//   const doc = new jsPDF(pdfConfig);

//   // Tentukan lebar kolom untuk kolom "Alamat"
//   const columnWidths = {
//       Alamat: 28, // Kolom "Alamat" dengan lebar 28
//   };

//   // Terapkan konfigurasi gaya dan lebar kolom
//   doc.autoTable({
//       head: [tableHeaders],
//       body: totalData.map((data) => keyValues.map((key) => data[key])),
//       styles: styles,
//       columnStyles: columnWidths,
//   });

//   // Simpan file PDF
//   doc.save("table.pdf");
// };




  return (
    <div className="w-full h-full">
      {showTambah == false && showUbah == "-" ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Siswa</h1>
          <div className="my-10 h-fit bg-white">
            <div className="py-6 ml-8">
              <div className="flex w-1/2 gap-x-5 text-white font-bold">
                <button
                  className="px-12 py-2.5 bg-[#03045E] hover:bg-[#0066FF]"
                  onClick={renderTambah}
                >
                  Tambah
                </button>
                <button
                  className="px-6 py-2.5 bg-[#004B23] hover:bg-[#299948]"
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
          path="/data-siswa/tambah-siswa"
          element={<Tambah setShowTambah={setShowTambah} setActionType={setActionType} />}
        />
        <Route
          path="/data-siswa/ubah-siswa"
          element={<Ubah setShowUbah={setShowUbah} setActionType={setActionType} data={showUbah} />}
        />
      </Routes>
    </div>
  );
}

export default DataSiswa;
