import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import Dashboard from "./components/body/dashboard/Dashboard";
import Tambah from "./components/body/dataSiswa/Tambah";
import DataSiswa from "./components/body/dataSiswa/DataSiswa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/data-siswa" element={<DataSiswa />}>
          <Route path="/tambah-siswa" element={<Tambah />} />
        </Route> */}
        {/* <Route path="/data-siswa/tambah-siswa" element={<Tambah />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
