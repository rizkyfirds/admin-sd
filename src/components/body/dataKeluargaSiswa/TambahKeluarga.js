// Tambah.js
import React, { useState } from "react";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";

function Tambah() {
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
          <h1 className="font-bold text-4xl font-['Segoe UI']">Data Keluarga Siswa /</h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="mt-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Data Keluarga
          </div>
        </div>
        <div className="w-full px-20 pt-10">
          <InputField
            Value={"NIK Siswa :"}
            Placeholder={"pilih NIK siswa"}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"Nama :"}
            Placeholder={"auto dari BE"}
            changeHandler={(e) => setNIS(e.target.value)}
          />
          <InputField
            Value={"Keluarga :"}
            Placeholder={"pilih keluarga"}
            changeHandler={(e) => setNKK(e.target.value)}
          />
          <InputField
            Value={"Nama :"}
            Placeholder={"isi nama keluarga siswa"}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
          />
          <InputField
            Value={"Pekerjaan :"}
            Placeholder={"isi pekerjaan keluarga siswa"}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <InputField
            Value={"Alamat :"}
            Placeholder={"isi alamat keluarga siswa"}
            changeHandler={(e) => setNIK(e.target.value)}
          />
          <InputField
            Value={"Pendapatan :"}
            Placeholder={"isi pendapatan keluarga siswa"}
            changeHandler={(e) => setSdSebelum(e.target.value)}
          />
          <InputField
          Value={"Lulusan :"}
          Placeholder={"pilih lulusan"}
          changeHandler={(e) => setSdSebelum(e.target.value)}
        />
        </div>
        <div className="py-10">
          <div className="flex justify-center gap-x-5">
            <Button color={"#03045E"} text={"Simpan"}/>
            <Button color={"#7E0303"} text={"Batalkan"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
