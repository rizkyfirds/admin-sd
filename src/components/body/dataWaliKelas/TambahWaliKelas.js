// Tambah.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import SearchField from "../../inputField/SearchFiled";
import Button from "../../button/Button";
import TableReport from "../table/TableReport";
import SearchBar from "../search-bar/Search";
import Pagination from "../pagination/Pagination";
import axios from "axios";

function Tambah({
  dataGuru,
  dataKelas,
  setShowTambah,
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
  const navigate = useNavigate();
  const [nikGuru, setNIKGuru] = useState("");
  const [kelas, setKelas] = useState("");
  const [grade, setGrade] = useState("");
  const [namaAngkatan, setNamaAngkatan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [guru, setGuru] = useState("");
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

  const handleGetGuruByNIK = () => {
    const requestingData = {
      key: parseInt(nikGuru, 10),
    };
    console.log("data masuk ", requestingData);
    axios({
      method: "POST",
      url: "http://localhost:3000/cariGuru/id/",
      data: requestingData,
    }).then((result) => {
      // console.log("hasil", result.data.Status );
      // console.log("hasil nih", result.data.Status === "Success ");
      if (result.data.Status === "Success ") {
        setGuru(result.data.Isi[0].nama);
      } else {
        console.log("gagal menambahkan, ada yg salah");
      }
    });
  };

  useEffect(() => {
    if (nikGuru != "-") {
      handleGetGuruByNIK();
    }
  }, [nikGuru]);

  const renderBack = () => {
    setShowTambah(false);
    navigate("/data-kelas");
  };
  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1
            className="font-bold text-4xl font-['Segoe UI']"
            onClick={renderBack}
          >
            Data Wali Kelas /
          </h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="my-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Wali Kelas Siswa
          </div>
        </div>
        <div className="w-full px-20 pt-10">
          <SearchField
            Value={"NIK Guru"}
            Placeholder={"pilih NIK guru"}
            changeHandler={(e) => setNIKGuru(e)}
            datas={dataGuru}
            // nikFiltered={setNikFiltered}
          />
          <div className="flex mt-4">
            <div className="flex w-24 h-11">
              <h1 className="font-SegoeUI my-auto">Nama Guru</h1>
            </div>
            <div className="w-full p-2.5 italic border border-[#000000] border-solid">
              {guru}
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Grade"}
              Placeholder={"pilih grade"}
              changeHandler={(e) => setGrade(e.target.value)}
              dropdown={true}
              ManyValue={["1", "2", "3", "4", "5", "6"]}
            />
            <div className="ml-3">
              <SearchField
                Value={"Kelas"}
                Placeholder={"pilih kelas"}
                changeHandler={(e) => setKelas(e)}
                datas={dataKelas}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
          <InputField
            Value={"Nama Angkatan"}
            Placeholder={"pilih nama angkatan"}
            changeHandler={(e) => setNamaAngkatan(e.target.value)}
            dropdown={true}
            ManyValue={["belum tau", "belum tau"]}
            />
            <div className="ml-3">
            <InputField
                Value={"Tahun Masuk"}
                Placeholder={"isi tahun masuk"}
                changeHandler={(e) => setTahunMasuk(e.target.value)}
                tanggal={true}
              />
            </div>

            </div>
        </div>
        <div className="mx-8">
          <div className="mt-10 font-bold text-lg">List Siswa yang Dipilih</div>
          <div className="px-8 pb-8">
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
        <div className="mx-8">
          <div className="mt-10 font-bold text-lg">Data Siswa</div>
          <div className="px-8 pb-8">
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
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <Button color={"#03045E"} text={"Simpan"} hoverBg="[#06F]" />
            <Button color={"#7E0303"} text={"Batalkan"} hoverBg="[#DE0404]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
