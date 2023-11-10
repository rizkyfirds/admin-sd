import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { tableHeaders } from "../dummy-data/tableHeaders.js";
import { tableData } from "../dummy-data/tableData.js";
import SideBar from "../components/SideBar/SideBar";
import HeadBar from "../components/headbar/HeadBar";
import Dashboard from "../components/body/dashboard/Dashboard";
import DataSiswa from "../components/body/dataSiswa/DataSiswa";
import Tambah from "../components/body/dataSiswa/TambahSiswa";
import DataGuru from "../components/body/dataGuru/DataGuru";
import DataKeluarga from "../components/body/dataKeluargaSiswa/DataKeluarga";
import DataRole from "../components/body/dataRole/DataRole";
import Profile from "../components/body/profile/Profile";

function Main() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState("Dashboard");
  const [showDashboard, setShowDashboard] = useState(false);
  const [showDataSiswa, setShowDataSiswa] = useState(false);
  const [showDataKeluarga, setShowDataKeluarga] = useState(false);
  const [showDataGuru, setShowDataGuru] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set as needed

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset current page when searching
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (showMenu === "Dashboard") {
      navigate("/dashboard");
      setShowDashboard(true);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(false);
    } else if (showMenu === "Data Siswa") {
      navigate("/data-siswa");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(true);
      setShowRole(false);
      setShowDataGuru(false);
    } else if (showMenu === "Data Keluarga Siswa") {
      console.log("data Keluarga", showMenu);
      navigate("/data-keluarga");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(true);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(false);
    } else if (showMenu === "Data Guru") {
      navigate("/data-guru");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(true);
    } else if (showMenu === "Role") {
      navigate("/role");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(true);
      setShowDataGuru(false);
    } else if (showMenu === "Profile") {
      navigate("/profile");
      setShowDashboard(false);
      setShowProfile(true);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(false);
    }
    setCurrentPage(1); // Reset current page
    setSearchTerm("")
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
          tableHeaders={tableHeaders.siswa}
          totalData={tableData.siswa}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    );
  };

  const renderDataGuru = () => {
    return (
      <div className="w-full h-full">
        <DataGuru
          tableHeaders={tableHeaders.guru}
          totalData={tableData.guru}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    );
  };

  const renderDataKeluarga = () => {
    return (
      <div className="w-full h-full">
        <DataKeluarga
          tableHeaders={tableHeaders.keluarga}
          totalData={tableData.keluarga}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    );
  };

  const renderDataRole = () => {
    return (
      <div className="w-full h-full">
        <DataRole
          tableHeaders={tableHeaders.role}
          totalData={tableData.role}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    );
  };

  const renderProfile = () => {
    return (
      <div className="w-full h-full">
        <Profile />
      </div>
    );
  };
  return (
    <div className="flex h-full w-full">
      <div className="w-auto h-auto">
        <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className="w-full">
        <div className="h-headbar">
          <HeadBar />
        </div>
        <div className="h-body px-6 py-6 bg-body">
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
                      : ""}
          {/* <Routes> */}
          {/* <Route path="/dashboard" element={renderDashboard} /> */}
          {/* <Route path="/data-siswa" element={renderDataSiswa} /> */}
          {/* Definisikan rute-rute lainnya di sini */}
          {/* </Routes> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
