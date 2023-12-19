import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./TambahWaliKelas";
import TableWali from "../table/TableWali";
import SearchBar from "../search-bar/Search";
import Pagination from "../pagination/Pagination";
import jsPDF from "jspdf";
import "jspdf-autotable";

function DataWaliKelas({
  dataKelas,
  dataGuru,
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
  walikelas,
  setTotalData,
  handleSearch2,
  searchTerm2,
  currentPage2,
  itemsPerPage2,
  handlePageChange2,
  startIndex2,
  endIndex2,
  tableHeadersSiswa,
  totalDataSiswa,
  keyValuesSiswa
}) {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/data-wali-kelas/tambah-wali-kelas");
    }
    setSearchTerm("");
  }, [showTambah]);

  const renderTambah = () => {
    setShowTambah(true);
  };

  const fetchDataFunction = async () => {
    // Implement your data fetching logic here
    // For example, using fetch or axios to get data from an API
    const response = await fetch("your_api_endpoint");
    const data = await response.json();
    return data;
  };

  const downloadPdf = async () => {
    const pdfConfig = {
      orientation: "landscape"
    };
    const doc = new jsPDF(pdfConfig);
    const styles = {
      font: "times",
      fontStyle: "normal",
      fontSize: 8
  };

    // Fetch data if not available
    if (!totalData.length) {
      try {
        const fetchedData = await fetchDataFunction();
        // Update the state or use another mechanism to set the fetched data
        setTotalData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        return;
      }
    }

    const tableData = totalData.map((row) =>
      keyValues.map((value) => {
        let cellData = "-"; // Default value if the data is not available

        // Handle nested data structure
        if (value === "nama" || value === "Alamat") {
          cellData =
            row["kelas"]["walikelas"] && row["kelas"]["walikelas"][value]
              ? row["kelas"]["walikelas"][value]
              : "-";
        } else {
          cellData = row["kelas"] && row["kelas"][value] ? row["kelas"][value] : "-";
        }

        return cellData;
      })
    );

    doc.autoTable({
      head: [keyValues],
      body: tableData,
      styles: styles,
      headStyles: { fillColor: "#004B23", textColor: "#ffffff" },
    });

    doc.save("walikelas_table.pdf");
  };

  return (
    <div className="w-full h-full">
      {showTambah == false ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Wali Kelas</h1>
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
                <TableWali
                  headers={tableHeaders}
                  data={totalData}
                  keyValues={keyValues}
                  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}
                  searchTerm={searchTerm}
                  walikelas={walikelas}
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
          path="/data-wali-kelas/tambah-wali-kelas"
          element={<Tambah 
          dataKelas={dataKelas}
          dataGuru={dataGuru}
          setShowTambah={setShowTambah} 
          tableHeaders={tableHeadersSiswa}
          totalData={totalDataSiswa}
          keyValues={keyValuesSiswa}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          handleSearch2={handleSearch2}
          searchTerm2={searchTerm2}
          currentPage2={currentPage2}
          itemsPerPage2={itemsPerPage2}
          handlePageChange2={handlePageChange2}
          startIndex2={startIndex2}
          endIndex2={endIndex2}
          />}
        />
      </Routes>
    </div>
  );
}

export default DataWaliKelas;
