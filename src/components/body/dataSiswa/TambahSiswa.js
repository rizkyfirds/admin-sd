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
    navigate("/data-siswa")
  }
  
  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1 className="font-bold text-4xl font-['Segoe UI']" onClick={renderBack}>Data Siswa /</h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="mt-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Data Siswa
          </div>
        </div>
        <div className="w-full px-20 pt-8">
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
            Value={"SD Sebelum :"}
            Placeholder={"isi SD sebelumnya"}
            changeHandler={(e) => setSdSebelum(e.target.value)}
          />
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
