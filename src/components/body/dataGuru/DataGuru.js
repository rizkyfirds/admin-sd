import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tambah from "./TambahGuru";
import SearchBar from "../search-bar/Search";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";

function DataGuru({ tableHeaders, totalData, handleSearch, searchTerm, setSearchTerm, currentPage, itemsPerPage, handlePageChange, startIndex, endIndex }) {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/data-guru/tambah-guru");
    }
    setSearchTerm("")
  }, [showTambah]);

  const renderTambah = () => {
    setShowTambah(true);
  };

  return (
    <div className="w-full h-full">
      {showTambah == false ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Guru</h1>
          <div className="mt-8 h-fit bg-white">
            <div className="py-6 ml-8">
              <div className="flex w-1/2 gap-x-5 text-white font-bold">
                <button className="px-12 py-2.5 bg-[#03045E]" onClick={renderTambah}>
                  Tambah
                </button>
                <button className="px-6 py-2.5 bg-[#805B10]">Import Data</button>
                <button className="px-10 py-2.5 bg-[#004B23]">Download Data</button>
              </div>
              <div className="w-1/2"></div>
            </div>
            <div className="px-8 pb-8">
              {/*Total entries and Search Bar*/}
              <div className="pb-5 pt-3 flex justify-between">
                <span>
                  Show <span className="bg-[#D9D9D9] p-1 mx-1 font-bold">{totalData.length}</span> Entries
                </span>
                <SearchBar
                  onSearch={handleSearch}
                />
              </div>
              {/*Table*/}
              <div className="pb-5">
                <Table
                  headers={tableHeaders}
                  data={totalData}
                  startIndex={startIndex}
                  itemsPerPage={itemsPerPage}
                  searchTerm={searchTerm}
                />
              </div>
              {/*Data entry in current page and pagination*/}
              {searchTerm.length === 0 &&
                <div className="flex justify-between">
                  <span>
                    Showing {startIndex + 1} to {Math.min(endIndex, totalData.length)} entries
                  </span>
                  <Pagination
                    totalPages={Math.ceil(totalData.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              }
            </div>
          </div>
        </>
      ) : null}
      <Routes>
        <Route path="/data-guru/tambah-guru" element={<Tambah setShowTambah={setShowTambah} />} />
      </Routes>
    </div>
  );
}

export default DataGuru;
