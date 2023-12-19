// Tambah.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";
import axios from "axios";

function Tambah({ setShowTambah, setActionType }) {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [nis, setNIS] = useState("");
  const [nkk, setNKK] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [alamat, setAlamat] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [nik, setNIK] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [sdSebelum, setSdSebelum] = useState("");
  const [tkSebelum, setTkSebelum] = useState("");
  const [prestasi, setPrestasi] = useState("");
  const [filePrestasi, setFilePrestasi] = useState("");

  const renderBack = () => {
    setShowTambah(false);
    navigate("/data-siswa");
  };

  const handleTambahSiswa = (
  ) => {
    const requestingData = {
      id : nik,
      nama: nama,
      NIS: nis,
      NIK : nik,
      No_KartuKeluarga: nkk,
      Tempat_Lahir: tempatLahir,
      Tanggal_Lahir: tanggalLahir,
      Alamat: alamat,
      Tahun_MasukSDIT: tahunMasuk,
      AsalTK: tkSebelum,
      Asal_SD: sdSebelum,
      Prestasi: prestasi,
      LinkPrestasi: filePrestasi,
      NamaAngkatan: angkatan,
    };
    console.log(requestingData)
    axios({
      method: "POST",
      url: "http://localhost:3000/siswa",
      data: requestingData,
    }).then((result) => {
      console.log("hasil",result);
      if (result.data.msg == 'Siswa Created') {
        console.log("register success");
        setActionType("update siswa")
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
          <h1
            className="font-bold text-4xl font-['Segoe UI']"
            onClick={renderBack}
          >
            Data Siswa /
          </h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="my-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Data Siswa
          </div>
        </div>
        <div className="w-full px-20 pt-8">
          <InputField
            Value={"Nama"}
            Placeholder={"isi nama siswa"}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"NIS"}
            Placeholder={"isi NIS siswa"}
            changeHandler={(e) => setNIS(e.target.value)}
          />
          <InputField
            Value={"NIK"}
            Placeholder={"isi NIK masuk"}
            changeHandler={(e) => setNIK(e.target.value)}
          />
          <InputField
            Value={"No. KK"}
            Placeholder={"isi nomor kartu keluarga siswa"}
            changeHandler={(e) => setNKK(e.target.value)}
          />
          <InputField
            Value={"Tahun Masuk"}
            Placeholder={"isi tahun masuk"}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
            tanggal={true}
          />
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Alamat"}
              Placeholder={"isi alamat siswa"}
              changeHandler={(e) => setAlamat(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Nama Angkatan"}
                Placeholder={"nama angkatan siswa"}
                changeHandler={(e) => setAngkatan(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Tempat Lahir"}
              Placeholder={"isi tempat lahir masuk"}
              changeHandler={(e) => setTempatLahir(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Tanggal Lahir"}
                Placeholder={"isi tanggal lahir masuk"}
                changeHandler={(e) => setTanggalLahir(e.target.value)}
                tanggal={true}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"TK Sebelum"}
              Placeholder={"isi TK sebelumnya"}
              changeHandler={(e) => setTkSebelum(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"SD Sebelum"}
                Placeholder={"isi SD sebelumnya"}
                changeHandler={(e) => setSdSebelum(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Prestasi"}
              Placeholder={"isi prestasi"}
              changeHandler={(e) => setPrestasi(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"File Prestasi"}
                Placeholder={"isi file prestasi"}
                changeHandler={(e) => setFilePrestasi(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <button className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]" onClick={handleTambahSiswa}>Simpan</button>
            {/* <Button color={"#03045E"} text={"Simpan"} hoverBg="[#06F]" /> */}
            <Button color={"#7E0303"} text={"Batalkan"} hoverBg="[#DE0404]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tambah;
