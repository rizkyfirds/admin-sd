// Tambah.js
import React, { useState } from "react";
import InputField from "../../inputField/InputField";

function Tambah() {
  console.log("tambah")
  const [nama, setNama] = useState("");
  const [nis, setNIS] = useState("");
  const [nkk, setNKK] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nik, setNIK] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [sdSebelum, setSdSebelum] = useState("");

  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Siswa /</h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="mt-8 h-full bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Data Siswa
          </div>
        </div>
        <div className="container px-20 pt-10 h-full">
          <InputField
            Value={"Nama :"}
            Placeholder={"isi nama siswa"}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"NIS :"}
            Placeholder={"isi NIS siswa"}
            changeHandler={(e) => setNIS(e.target.value)}
          />
          <InputField
            Value={"NKK :"}
            Placeholder={"isi NKK siswa"}
            changeHandler={(e) => setNKK(e.target.value)}
          />
          <InputField
            Value={"Tahun Masuk :"}
            Placeholder={"isi tahun masuk"}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
          />
          <InputField
            Value={"Alamat :"}
            Placeholder={"isi alamat siswa"}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <InputField
            Value={"NIK :"}
            Placeholder={"isi NIK masuk"}
            changeHandler={(e) => setNIK(e.target.value)}
          />
          <InputField
            Value={"Tempat Lahir :"}
            Placeholder={"isi tempat lahir masuk"}
            changeHandler={(e) => setTempatLahir(e.target.value)}
          />
          <InputField
            Value={"SD Sebelum :"}
            Placeholder={"isi SD sebelumnya"}
            changeHandler={(e) => setSdSebelum(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Tambah;
