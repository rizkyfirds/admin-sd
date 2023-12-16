import React, { useState, useEffect } from "react";
import BarSum from "./BarSum";
import axios from "axios";


function Dashboard() {
    const [sumSiswa,setSumSiswsa] = useState(0)
    const [sumGuru,setSumGuru] = useState(0)
    const [sumOrtuWali,setSumOrtuWali] = useState(0)

    useEffect(() => {
      axios({
          method: "GET",
          url: `http://localhost:3000/dashboard/siswa/`,
      }).then((result) => {
          console.log("inii lo ",result.data.Isi[0]["COUNT(ID)"])
          setSumSiswsa(result.data.Isi[0]["COUNT(ID)"]);
      })
    }, [])

    useEffect(() => {
      axios({
          method: "GET",
          url: `http://localhost:3000/dashboard/guru/`,
      }).then((result) => {
          console.log("inii lo ",result.data.Isi[0]["COUNT(ID)"])
          setSumGuru(result.data.Isi[0]["COUNT(ID)"]);
      })
    }, [])

    useEffect(() => {
      axios({
          method: "GET",
          url: `http://localhost:3000/dashboard/ortu/`,
      }).then((result) => {
          console.log("inii lo ",result.data.Isi[0]["COUNT(ID)"])
          setSumOrtuWali(result.data.Isi[0]["COUNT(ID)"]);
      })
    }, [])

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
