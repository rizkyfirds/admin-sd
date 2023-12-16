// Tambah.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";
import axios from "axios";

function Tambah({ setShowTambah, setActionType }) {
  const navigate = useNavigate();
  const [grade, setGrade] = useState("");
  const [kelas, setKelas] = useState("");
  const [namaAngkatan, setNamaAngkatan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");

  const renderBack = () => {
    setShowTambah(false)
    navigate("/data-kelas")
  }

  const handleTambahKelas = (
    ) => {
      const requestingData = {
        id    : "100", //harusnya ga perlu
        Grade_Kelas : grade,
        Nama_Angkatan	: namaAngkatan,
        NamaKelas : kelas,
        Tahun_Masuk : tahunMasuk
      };
      console.log(requestingData)
      axios({
        method: "POST",
        url: "http://localhost:3000/kelas",
        data: requestingData,
      }).then((result) => {
        console.log("hasil",result);
        if (result.data.msg == 'Kelas Created') {
          console.log("register success");
          setActionType("update kelas")
          renderBack();
        } else {
          console.log("gagal menambahkan, ada yg salah");
        }
      });
    };

  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1 className="font-bold text-4xl font-['Segoe UI']" onClick={renderBack}>Data Kelas /</h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="my-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Kelas
          </div>
        </div>
        <div className="w-full px-20 pt-10">
          <InputField
            Value={"Grade"}
            Placeholder={"pilih grade"}
            changeHandler={(e) => setGrade(e.target.value)}
            dropdown = {true}
            ManyValue={["1", "2", "3","4","5","6"]}
          />
          <InputField
            Value={"Kelas"}
            Placeholder={"isi kelas"}
            changeHandler={(e) => setKelas(e.target.value)}
          />
          <InputField
            Value={"Nama Angkatan"}
            Placeholder={"isi nama angkatan"}
            changeHandler={(e) => setNamaAngkatan(e.target.value)}
            />
          <InputField
            Value={"Tahun Masuk"}
            Placeholder={"isi tahun masuk"}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
            tanggal={true}
            />
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
          <button className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]" onClick={handleTambahKelas}>Simpan</button>
            <Button color={"#7E0303"} text={"Batalkan"} hoverBg="[#DE0404]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
