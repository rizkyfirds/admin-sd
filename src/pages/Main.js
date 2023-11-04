import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import HeadBar from "../components/headbar/HeadBar";
import Dashboard from "../components/body/dashboard/Dashboard";
import DataSiswa from "../components/body/dataSiswa/DataSiswa";

function Main() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState("Data Siswa");
  const [showDashboard, setShowDashboard] = useState(false);
  const [showDataSiswa, setShowDataSiswa] = useState(false);
  const [showDataKeluarga, setShowDataKeluarga] = useState(false);
  const [showDataGuru, setShowDataGuru] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (showMenu === "Dashboard") {
      navigate("/dashboard/");
      setShowDashboard(true);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(false);
    } else if (showMenu === "Data Siswa") {
      navigate("/data-siswa/");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(true);
      setShowRole(false);
      setShowDataGuru(false);
    } else if (showMenu === "Data Keluarga") {
      navigate("/data-keluarga/");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(true);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(false);
    } else if (showMenu === "Data Guru") {
      navigate("/data-guru/");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(false);
      setShowDataGuru(true);
    } else if (showMenu === "Role") {
      navigate("/role/");
      setShowDashboard(false);
      setShowProfile(false);
      setShowDataKeluarga(false);
      setShowDataSiswa(false);
      setShowRole(true);
      setShowDataGuru(false);
    } else if (showMenu === "Profile") {
      navigate("/profile/");
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

  return (
    <div className="flex h-screen w-full">
      <div className="w-60">
        <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className="w-full h-full">
        <div className="h-20">
          <HeadBar />
        </div>
        <div className="h-full px-6 pt-6 bg-body">
          {/* {showMenu === "Dashboard" ? (
            <Dashboard />
          ) : showMenu === "Data Siswa" ? (
            <DataSiswa />
          ) : (
            ""
          )} */}
          <Routes>
                {showDashboard && <Route path="/dashboard" element={renderDashboard()} />}
                {showDataSiswa && <Route path="/data-siswa" element={renderDataSiswa()} />}
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
