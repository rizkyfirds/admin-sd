import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import HeadBar from "../components/headbar/HeadBar";
import Dashboard from "../components/body/dashboard/Dashboard";
import DataSiswa from "../components/body/dataSiswa/DataSiswa";
import Tambah from "../components/body/dataSiswa/Tambah";
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
        <DataSiswa />
      </div>
    );
  };

  const renderDataGuru = () => {
    return (
      <div className="w-full h-full">
        <DataGuru />
      </div>
    );
  };

  const renderDataKeluarga = () => {
    return (
      <div className="w-full h-full">
        <DataKeluarga />
      </div>
    );
  };

  const renderDataRole = () => {
    return (
      <div className="w-full h-full">
        <DataRole />
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
