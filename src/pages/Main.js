import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/SideBar/SideBar";
import HeadBar from "../components/headbar/HeadBar";
import Dashboard from "../components/body/dashboard/Dashboard";
import DataSiswa from "../components/body/dataSiswa/DataSiswa";
import DataKelas from "../components/body/kelas/DataKelas.js";
import DataGuru from "../components/body/dataGuru/DataGuru";
import DataKeluarga from "../components/body/dataKeluargaSiswa/DataKeluarga";
import DataRole from "../components/body/dataRole/DataRole";
import Profile from "../components/body/profile/Profile";
import DataWaliKelas from "../components/body/dataWaliKelas/DataWaliKelas.js";
import LombaExternal from "../components/body/lombaExternal/LombaExternal.js";
import LombaInternal from "../components/body/lombaInternal/LombaInternal.js";
import Imunisasi from "../components/body/imunisasi/Imunisasi.js";
import LoginPage from "./LoginPage.js";

function Main() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState("Dashboard");
  const [loginStatus, setLoginStatus] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showDataSiswa, setShowDataSiswa] = useState(false);
  const [showDataKeluarga, setShowDataKeluarga] = useState(false);
  const [showDataGuru, setShowDataGuru] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showKelas, setShowKelas] = useState(false);
  const [showImunisasi, setShowImunisasi] = useState(false);
  const [showWaliKelas, setShowWaliKelas] = useState(false);
  const [showLombaExternal, setLombaExternal] = useState(false);
  const [showLombaInternal, setLombaInternal] = useState(false);
  const tableHeadersSiswa = [
    "Nama",
    "NIS",
    "NIK",
    "No. KK",
    "Tempat Lahir",
    "Tanggal Lahir",
    "Alamat",
    "TK Sebelum",
    "SD Sebelum",
    "Nama Angkatan",
    "Prestasi",
    "File Prestasi",
    "Tahun Masuk",
  ];
  const keyValuesSiswa = [
    "nama",
    "NIS",
    "ID",
    "No_KartuKeluarga",
    "Tempat_lahir",
    "Tanggal_Lahir",
    "Alamat",
    "AsalTK",
    "Asal_SD",
    "NamaAngkatan",
    "Prestasi",
    "LinkPrestasi",
    "Tahun_MasukSDIT",
  ];
  const [tableDataSiswa, setTableDataSiswa] = useState(null);
  const tableHeadersGuru = [
    "Nama",
    "NIK",
    "Tempat Lahir",
    "Tanggal Lahir",
    "Alamat",
    "Lulusan",
    "Sertifikat",
    "Ijazah",
    "KTP",
    "No. KK",
    "No. Kontak",
    "Email",
  ];
  const keyValuesGuru = [
    "nama",
    "ID",
    "Tempat_Lahir",
    "Tanggal_Lahir",
    "Alamat",
    "Lulusan",
    "Sertifikat",
    "ijazah",
    "KTP",
    "KK",
    "Nomor_HP",
    "Email",
  ];
  const [tableDataGuru, setTableDataGuru] = useState(null);
  const tableHeadersKeluarga = [
    "Nama Siswa",
    "Keterangan Keluarga",
    "Nama",
    "Pekerjaan",
    "Alamat",
    "Pendapatan",
    "Pendidikan Terakhir",
    "No. Kontak",
    "Email",
  ];
  const keyValuesKeluarga = [
    "namaSiswa",
    "Jenis",
    "nama",
    "pekerjaan",
    "alamat",
    "pendapatan",
    "Pendidikan_Terakhir",
    "Nomor_HP",
    "Email",
  ];
  const [tableDataKeluarga, setTableDataKeluarga] = useState(null);
  const tableHeadersRole = ["Nama", "Kelas", "Role"];
  const keyValuesRole = ["Nama", "Kelas", "Role"];
  const [tableDataRole, setTableDataRole] = useState(null);
  const tableHeadersKelas = ["Grade", "Kelas", "Nama Angkatan", "Tahun Masuk"];
  const keyValuesKelas = [
    "Grade_Kelas",
    "NamaKelas",
    "Nama_Angkatan",
    "Tahun_Masuk",
  ];
  const [tableDataKelas, setTableDataKelas] = useState(null);
  const tableHeadersWaliKelas = [
    "Nama Wali",
    "Grade",
    "Nama Angkatan",
    "Kelas",
    "Total Siswa",
    "Alamat",
    "Tahun Masuk",
  ];
  const keyValuesWaliKelas = [
    "nama",
    "Grade_Kelas",
    "Nama_Angkatan",
    "NamaKelas",
    "Siswa",
    "Alamat",
    "Tahun_Masuk",
  ];
  const [tableDataWaliKelas, setTableDataWaliKelas] = useState(null);
  const [actionType, setActionType] = useState("init");

  // useEffect(()=>{
  //   if
  // }, [loginStatus])

  useEffect(() => {
    if (actionType === "update siswa" || actionType === "init") {
      axios({
        method: "GET",
        url: `http://localhost:3000/List/siswa`,
      }).then((result) => {
        if (result.data["Message"] === "Server Error") {
          setTableDataSiswa([]);
        } else {
          setTableDataSiswa(result.data.Isi);
        }
      });
    }
    if (actionType === "update guru" || actionType === "init") {
      axios({
        method: "GET",
        url: `http://localhost:3000/List/guru`,
      }).then((result) => {
        if (result.data["Message"] === "Server Error") {
          setTableDataGuru([]);
        } else {
          setTableDataGuru(result.data.Isi);
        }
        // console.log("op ",result.data.Isi)
      });
    }
    if (actionType === "update ortu" || actionType === "init") {
      axios({
        method: "GET",
        url: `http://localhost:3000/List/ortu`,
      }).then((result) => {
        if (result.data["Message"] === "Server Error") {
          setTableDataKeluarga([]);
        } else {
          setTableDataKeluarga(result.data.Isi);
        }
        console.log("ortu ", result.data.Isi[0]);
      });
    }
    if (actionType === "update kelas" || actionType === "init") {
      axios({
        method: "GET",
        url: `http://localhost:3000/List/kelas`,
      }).then((result) => {
        console.log("kelas ", result.data.Isi);
        if (result.status !== 200) {
          setTableDataKelas([]);
        } else {
          setTableDataKelas(result.data.Isi);
        }
      });
    }if (actionType === "update wali kelas" || actionType === "init") {
      axios({
        method: "GET",
        url: `http://localhost:3000/List/kelas-siswa`,
      }).then((result) => {
        console.log("wali kelas ", result.data.Data);
        if (result.status !== 200) {
          setTableDataWaliKelas([]);
        } else {
          setTableDataWaliKelas(result.data.Data);
        }
      });
    }
    setActionType("");
  }, [actionType]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm2, setSearchTerm2] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const itemsPerPage = 5; // Set as needed

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset current page when searching
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch2 = (term) => {
    setSearchTerm2(term);
    setCurrentPage2(1); // Reset current page when searching
  };
  const handlePageChange2 = (page) => {
    setCurrentPage2(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const startIndex2 = (currentPage2 - 1) * itemsPerPage;
  const endIndex2 = startIndex2 + itemsPerPage;

  useEffect(() => {
    if (showMenu === "Dashboard") {
      navigate("/dashboard");
      setShowDashboard(true);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(false);
      setShowKelas(false);
      setLombaExternal(false);
      setLombaInternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(false);
    } else if (showMenu === "Data Siswa") {
      navigate("/data-siswa");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(true);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(false);
      setLombaInternal(false);
    } else if (showMenu === "Data Keluarga Siswa") {
      navigate("/data-keluarga");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(true);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(false);
      setLombaInternal(false);
    } else if (showMenu === "Data Guru") {
      navigate("/data-guru");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(true);
      setLombaExternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(false);
      setLombaInternal(false);
    } else if (showMenu === "Role") {
      navigate("/role");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(true);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(false);
      setLombaInternal(false);
    } else if (showMenu === "Profile") {
      navigate("/profile");
      setShowDashboard(false);
      setShowProfile(true);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(false);
      setLombaInternal(false);
    } else if (showMenu === "Data Kelas") {
      navigate("/data-kelas");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowKelas(true);
      setShowDataGuru(false);
      setLombaExternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(false);
      setLombaInternal(false);
    } else if (showMenu === "Data Wali Kelas") {
      navigate("/data-wali-kelas");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(false);
      setLombaInternal(false);
      setShowImunisasi(false);
      setShowWaliKelas(true);
    } else if (showMenu === "Lomba Internal") {
      navigate("/lomba-internal");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowWaliKelas(false);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(false);
      setShowImunisasi(false);
      setLombaInternal(true);
    } else if (showMenu === "Lomba External") {
      navigate("/lomba-external");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(true);
      setShowWaliKelas(false);
      setShowImunisasi(false);
      setLombaInternal(false);
    } else if (showMenu === "Imunisasi") {
      navigate("/imunisasi");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowKelas(false);
      setShowDataGuru(false);
      setLombaExternal(false);
      setShowWaliKelas(false);
      setShowImunisasi(true);
      setLombaInternal(false);
    }
    setCurrentPage(1); // Reset current page
    setSearchTerm("");
  }, [showMenu]);

  const renderDashboard = () => {
    return (
      <div className="w-full h-full">
        <Dashboard />
      </div>
    );
  };

  const renderDataSiswa = () => {
    return (
      <div className="w-full h-full">
        <DataSiswa
          tableHeaders={tableHeadersSiswa}
          totalData={tableDataSiswa}
          keyValues={keyValuesSiswa}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          setActionType={setActionType}
        />
      </div>
    );
  };

  const renderDataGuru = () => {
    return (
      <div className="w-full h-full">
        <DataGuru
          tableHeaders={tableHeadersGuru}
          totalData={tableDataGuru}
          keyValues={keyValuesGuru}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          setActionType={setActionType}
        />
      </div>
    );
  };

  const renderDataKelas = () => {
    return (
      <div className="w-full h-full">
        <DataKelas
          tableHeaders={tableHeadersKelas}
          totalData={tableDataKelas}
          keyValues={keyValuesKelas}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          kelas={true}
          setActionType={setActionType}
        />
      </div>
    );
  };

  const renderDataKeluarga = () => {
    return (
      <div className="w-full h-full">
        <DataKeluarga
          tableHeaders={tableHeadersKeluarga}
          totalData={tableDataKeluarga}
          keyValues={keyValuesKeluarga}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          keluargaCek={true}
          setActionType={setActionType}
          dataSiswa={tableDataSiswa}
        />
      </div>
    );
  };

  const renderDataWaliKelas = () => {
    return (
      <div className="w-full h-full">
        <DataWaliKelas
          dataWaliKelas = {tableDataWaliKelas}
          dataKelas = {tableDataKelas}
          dataGuru={tableDataGuru}
          tableHeaders={tableHeadersWaliKelas}
          totalData={tableDataKelas}
          keyValues={keyValuesWaliKelas}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          walikelas={true}
          setActionType={setActionType}
          handleSearch2={handleSearch2}
          searchTerm2={searchTerm2}
          currentPage2={currentPage2}
          itemsPerPage2={itemsPerPage}
          handlePageChange2={handlePageChange2}
          startIndex2={startIndex2}
          endIndex2={endIndex2}
          tableHeadersSiswa={tableHeadersSiswa}
          totalDataSiswa={tableDataSiswa}
          keyValuesSiswa={keyValuesSiswa}
        />
      </div>
    );
  };

  const renderImunisasi = () => {
    return (
      <div className="w-full h-full">
        <Imunisasi
          tableHeaders={tableHeadersSiswa}
          totalData={tableDataSiswa}
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
          itemsPerPage2={itemsPerPage}
          handlePageChange2={handlePageChange2}
          startIndex2={startIndex2}
          endIndex2={endIndex2}
        />
      </div>
    );
  };

  const renderLombaInternal = () => {
    return (
      <div className="w-full h-full">
        <LombaInternal
          tableHeaders={tableHeadersSiswa}
          totalData={tableDataSiswa}
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
          itemsPerPage2={itemsPerPage}
          handlePageChange2={handlePageChange2}
          startIndex2={startIndex2}
          endIndex2={endIndex2}
        />
      </div>
    );
  };

  const renderLombaExternal = () => {
    return (
      <div className="w-full h-full">
        <LombaExternal
          tableHeaders={tableHeadersSiswa}
          totalData={tableDataSiswa}
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
          itemsPerPage2={itemsPerPage}
          handlePageChange2={handlePageChange2}
          startIndex2={startIndex2}
          endIndex2={endIndex2}
        />
      </div>
    );
  };

  const renderDataRole = () => {
    return (
      <div className="w-full h-full">
        <DataRole
          tableHeaders={tableHeadersRole}
          totalData={tableDataRole}
          keyValues={keyValuesRole}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          keluarga={false}
          endIndex={endIndex}
        />
      </div>
    );
  };

  const renderLogin = () => {
    return (
      <div className="w-full h-full">
        <LoginPage setLoginStatus={setLoginStatus} />
      </div>
    );
  }

  const renderProfile = () => {
    return (
      <div className="w-full h-full">
        <Profile />
      </div>
    );
  };
  return (
    <div className="flex h-full w-full">
      {loginStatus ? (
        <>
          <div className="w-auto h-auto sticky top-0">
            <SideBar setLoginStatus={setLoginStatus} showMenu={showMenu} setShowMenu={setShowMenu} />
          </div>
          <div className="w-full">
            <div className="h-headbar">
              <HeadBar />
            </div>
            <div className="h-body px-6 py-6 bg-body ">
              {showMenu === "Dashboard"
                ? renderDashboard()
                : showMenu === "Data Siswa"
                ? renderDataSiswa()
                : showMenu === "Data Guru"
                ? renderDataGuru()
                : showMenu === "Data Keluarga Siswa"
                ? renderDataKeluarga()
                : showMenu === "Role"
                ? renderDataRole()
                : showMenu === "Profile"
                ? renderProfile()
                : showMenu === "Data Kelas"
                ? renderDataKelas()
                : showMenu === "Data Wali Kelas"
                ? renderDataWaliKelas()
                : showMenu === "Lomba Internal"
                ? renderLombaInternal()
                : showMenu === "Lomba External"
                ? renderLombaExternal()
                : showMenu === "Imunisasi"
                ? renderImunisasi()
                : ""}
            </div>
          </div>
        </>
      ) : (
        renderLogin()
      )}
    </div>
  );
}

export default Main;
