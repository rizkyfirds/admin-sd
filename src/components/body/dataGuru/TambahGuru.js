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
    navigate("/data-guru")
  }

  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1 className="font-bold text-4xl font-['Segoe UI']" onClick={renderBack}>Data Guru /</h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="mt-8 h-full bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Data Guru
          </div>
        </div>
        <div className="w-full px-20 pt-8">
          <InputField
            Value={"Nama :"}
            Placeholder={"isi nama guru"}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"NIK :"}
            Placeholder={"isi NIK guru"}
            changeHandler={(e) => setNIS(e.target.value)}
          />
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Tempat Lahir :"}
              Placeholder={"isi tempat lahir masuk"}
              changeHandler={(e) => setTempatLahir(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Tanggal Lahir :"}
                Placeholder={"isi tanggal lahir masuk"}
                changeHandler={(e) => setTempatLahir(e.target.value)}
              />
            </div>
          </div>
          <InputField
            Value={"Alamat :"}
            Placeholder={"isi alamat guru"}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <InputField
            Value={"Lulusan :"}
            Placeholder={"pilih lulusan"}
            changeHandler={(e) => setNKK(e.target.value)}
          />
          <InputField
            Value={"Perguruan Tinggi :"}
            Placeholder={"isi nama perguruan tinggi"}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
          />
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Sertifikat Diperoleh :"}
              Placeholder={"isi sertifikat apa saja yang diperoleh guru"}
              changeHandler={(e) => setTempatLahir(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Foto :"}
                Placeholder={"import foto guru"}
                changeHandler={(e) => setTempatLahir(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"File Ijazah :"}
              Placeholder={"import file ijazah"}
              changeHandler={(e) => setTempatLahir(e.target.value)}
            />
            <div className="pl-3">
              <InputField
                Value={"Import File KTP :"}
                Placeholder={"import file KTP"}
                changeHandler={(e) => setTempatLahir(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <Button color={"#03045E"} text={"Simpan"} />
            <Button color={"#7E0303"} text={"Batalkan"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
