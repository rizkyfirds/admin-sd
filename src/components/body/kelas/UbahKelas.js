// Tambah.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";
import axios from "axios";

function Ubah({ setShowUbah, setActionType, data }) {
  console.log("opoughvgfc ", data["kelas"]?.walikelas.ID || "");
  const navigate = useNavigate();
  const [grade, setGrade] = useState(data["kelas"]?.Grade_Kelas || "");
  const [kelas, setKelas] = useState(data["kelas"]?.NamaKelas || "");
  const [namaAngkatan, setNamaAngkatan] = useState(
    data["kelas"]?.Nama_Angkatan || ""
  );
  const [tahunMasuk, setTahunMasuk] = useState(
    data["kelas"]?.Tahun_Masuk || ""
  );
  const [waliKelas, setWaliKelas] = useState(data["kelas"]?.walikelas.ID || "");

  const renderBack = () => {
    setShowUbah("-");
    navigate("/data-kelas");
  };

  const handleUbahKelas = () => {
    const requestingData = {
      Grade_Kelas: grade,
      Nama_Angkatan: namaAngkatan,
      NamaKelas: kelas,
      Tahun_Masuk: tahunMasuk,
      WaliKelas: waliKelas,
    };
    let idKelas = data["kelas"].ID;
    // console.log( requestingData, " kannnnnnnnnn ", idKelas)
    axios({
      method: "PATCH",
      url: `http://localhost:3000/kelas/${idKelas}`,
      data: requestingData,
    }).then((result) => {
      console.log("hasil ubah", result);
      if (result.data.msg == "Kelas Updated") {
        console.log("ubah success");
        setActionType("update kelas");
        renderBack();
      } else {
        console.log("gagal ubah, ada yg salah");
      }
    });
  };

  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1
            className="font-bold text-4xl font-['Segoe UI']"
            onClick={renderBack}
          >
            Data Kelas /
          </h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Ubah</h1>
      </div>
      <div className="my-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">Form Ubah Kelas</div>
        </div>
        <div className="w-full px-20 pt-10">
          <InputField
            Value={"Grade"}
            Placeholder={grade}
            changeHandler={(e) => setGrade(e.target.value)}
            dropdown={true}
            ManyValue={["1", "2", "3", "4", "5", "6"]}
          />
          <InputField
            Value={"Kelas"}
            Placeholder={kelas}
            changeHandler={(e) => setKelas(e.target.value)}
          />
          <InputField
            Value={"Nama Angkatan"}
            Placeholder={namaAngkatan}
            changeHandler={(e) => setNamaAngkatan(e.target.value)}
          />
          <InputField
            Value={"Tahun Masuk"}
            Placeholder={tahunMasuk}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
            tanggal={true}
          />
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <button
              className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]"
              onClick={handleUbahKelas}
            >
              Simpan
            </button>
            <button
              className="w-32 h-10 bg-[#7E0303] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#DE0404]"
              onClick={renderBack}
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubah;
