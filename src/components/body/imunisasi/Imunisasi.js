import React, { useEffect, useState, useRef } from "react";
import Button from "../../button/Button";
import InputField from "../../inputField/InputField";
import { Routes, Route, useNavigate } from "react-router-dom";
import TableReport from "../table/TableReport";
import SearchBar from "../search-bar/Search";
import Pagination from "../pagination/Pagination";
import jsPDF from "jspdf";
import "jspdf-autotable";

function LombaImunisasi({
  tableHeaders,
  totalData,
  keyValues,
  handleSearch,
  searchTerm,
  currentPage,
  itemsPerPage,
  handlePageChange,
  startIndex,
  endIndex,
  handleSearch2,
  searchTerm2,
  currentPage2,
  itemsPerPage2,
  handlePageChange2,
  startIndex2,
  endIndex2,
}) {
  // console.log("uuuuu ", totalData);
  const navigate = useNavigate();
  const [NamaLomba, setNamaLomba] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const tableRef = useRef(null);
  const tableRef2 = useRef(null);
  const [clickTambahCondition, setClickTambahCondition] = useState("-");
  const [clickBatalCondition, setClickBatalCondition] = useState("-");

  useEffect(() => {
    if (clickTambahCondition !== "-") {
      setDataTable((prevDataTable) => [...prevDataTable, clickTambahCondition]);
    }
    setClickTambahCondition("-");
  }, [clickTambahCondition]);

  useEffect(() => {
    if (clickBatalCondition !== "-") {
      setDataTable((prevDataTable) =>
        prevDataTable.filter((item) => item !== clickBatalCondition)
      );
    }
    setClickBatalCondition("-");
  }, [clickBatalCondition]);

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
      body: totalData.map((data) => keyValues.map((key) => data[key])),
      styles: styles,
      headStyles: { fillColor: "#004B23", textColor: "#ffffff" },
    });
    doc.save(`${NamaLomba}.pdf`);
  };

  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl font-['Segoe UI']">Imunisasi Siswa</h1>
      <div className="mt-8 mb-32 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">Form Imunisasi Siswa</div>
        </div>
        <div className="w-full px-20 pt-10">
          <InputField
            Value={"Nama Imunisasi"}
            Placeholder={"isi nama kegiatan imunisasi..."}
            changeHandler={(e) => setNamaLomba(e.target.value)}
          />
          <InputField
            Value={"Tanggal"}
            Placeholder={"pilih tanggal kegiatan..."}
            changeHandler={(e) => setTanggal(e.target.value)}
          />
          <div>
            <div className="mt-10 font-bold text-lg">
              List Siswa yang Dipilih
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
                <SearchBar onSearch={handleSearch2} />
              </div>
              {/*Table*/}
              <div className="pb-5" ref={tableRef2}>
                <TableReport
                  headers={tableHeaders}
                  data={dataTable}
                  keyValues={keyValues}
                  startIndex={startIndex2}
                  itemsPerPage={itemsPerPage2}
                  searchTerm={searchTerm2}
                  conditionButton={"Batalkan"}
                  setConditionButton={setClickBatalCondition}
                />
              </div>
              {/*Data entry in current page and pagination*/}
              {searchTerm2.length === 0 && (
                <div className="flex justify-between">
                  <span>
                    Showing {startIndex2 + 1} to{" "}
                    {Math.min(endIndex2, totalData.length)} entries
                  </span>
                  <Pagination
                    totalPages={Math.ceil(totalData.length / itemsPerPage2)}
                    currentPage={currentPage2}
                    onPageChange={handlePageChange2}
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="mt-10 font-bold text-lg">Data Siswa</div>
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
                <TableReport
                  headers={tableHeaders}
                  data={totalData}
                  keyValues={keyValues}
                  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}
                  searchTerm={searchTerm}
                  conditionButton={"tambah"}
                  setConditionButton={setClickTambahCondition}
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
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <button
              className="h-10 w-32 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]"
              onClick={downloadPdf}
            >
              Print
            </button>
            <Button color={"#7E0303"} text={"Batalkan"} hoverBg="[#DE0404]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LombaImunisasi;
