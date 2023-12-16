// Tambah.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";

function Tambah({ setShowTambah }) {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [nis, setNIS] = useState("");
  const [nkk, setNKK] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nik, setNIK] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [sdSebelum, setSdSebelum] = useState("");

  const renderBack = () => {
    setShowTambah(false)
    navigate("/data-role")
  }
  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1 className="font-bold text-4xl font-['Segoe UI']" onClick={renderBack}>Data Role User /</h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="my-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Data Keluarga
          </div>
        </div>
        <div className="w-full px-20 pt-10">
          <InputField
            Value={"NIK"}
            Placeholder={"pilih NIK guru"}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"Nama"}
            Placeholder={"auto dari BE"}
            changeHandler={(e) => setNIS(e.target.value)}
          />
          <InputField
            Value={"Kelas"}
            Placeholder={"isi kelas"}
            changeHandler={(e) => setNKK(e.target.value)}
          />
          <InputField
            Value={"Nama"}
            Placeholder={"isi nama keluarga siswa"}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
          />
          <InputField
            Value={"Role"}
            Placeholder={"pilih role"}
            changeHandler={(e) => setAlamat(e.target.value)}
            dropdown= {true}
            dropdownValue={["admin", "wali kelas"]}
          />
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <Button color={"#03045E"} text={"Simpan"} hoverBg="[#06F]"/>
            <Button color={"#7E0303"} text={"Batalkan"} hoverBg="[#DE0404]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
