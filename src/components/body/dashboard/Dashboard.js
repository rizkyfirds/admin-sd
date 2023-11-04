import React, { useState } from "react";
import BarSum from "./BarSum";


function Dashboard() {
    const [sumSiswa,setSumSiswsa] = useState(0)
    const [sumGuru,setSumGuru] = useState(0)
    const [sumOrtuWali,setSumOrtuWali] = useState(0)
  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-4xl font-['Segoe UI']">DASHBOARD</h1>
      <div className="pt-9 flex justify-between h-1/3 gap-x-10">
        <BarSum Subject={"Siswa"} Value={sumSiswa}/>
        <BarSum Subject={"Guru"} Value={sumGuru}/>
        <BarSum Subject={"Orang Tua / Wali"} Value={sumOrtuWali}/>
      </div>
    </div>
  );
}

export default Dashboard;
