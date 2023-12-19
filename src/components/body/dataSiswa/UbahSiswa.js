// Tambah.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";
import axios from "axios";

function Ubah({ setShowUbah, setActionType, data }) {
  const navigate = useNavigate();
  const [nama, setNama] = useState(data.nama);
  const [nis, setNIS] = useState(data.NIS);
  const [nkk, setNKK] = useState(data.No_KartuKeluarga);
  const [tahunMasuk, setTahunMasuk] = useState(data.Tahun_MasukSDIT);
  const [alamat, setAlamat] = useState(data.Alamat);
  const [angkatan, setAngkatan] = useState(data.Nama_Angkatan);
  const [nik, setNIK] = useState(data.nik);
  const [tempatLahir, setTempatLahir] = useState(data.Tempat_lahir);
  const [tanggalLahir, setTanggalLahir] = useState(data.Tanggal_Lahir);
  const [sdSebelum, setSdSebelum] = useState(data.Asal_SD);
  const [tkSebelum, setTkSebelum] = useState(data.AsalTk);
  const [prestasi, setPrestasi] = useState(data.Prestasi);
  const [filePrestasi, setFilePrestasi] = useState(data.LinkPrestasi);

  const renderBack = () => {
    setShowUbah("-");
    navigate("/data-siswa");
  };
  const handleUbahSiswa = () => {
    const requestingData = {
      id: nik,
      nama: nama,
      NIS: nis,
      NIK: nik,
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
    console.log(requestingData);
    axios({
      method: "PATCH",
      url: `http://localhost:3000/siswa/${data.ID}`,
      data: requestingData,
    }).then((result) => {
      console.log("hasil", result);
      setActionType("update siswa");
      renderBack();
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
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Ubah</h1>
      </div>
      <div className="my-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">Form Ubah Data Siswa</div>
        </div>
        <div className="w-full px-20 pt-8">
          <InputField
            Value={"Nama"}
            Placeholder={data.nama}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"NIS"}
            Placeholder={data.NIS}
            changeHandler={(e) => setNIS(e.target.value)}
          />
          <InputField
            Value={"NIK"}
            Placeholder={data.NIK}
            changeHandler={(e) => setNIK(e.target.value)}
          />
          <InputField
            Value={"No. KK"}
            Placeholder={data.No_KartuKeluarga}
            changeHandler={(e) => setNKK(e.target.value)}
          />
          <InputField
            Value={"Tahun Masuk"}
            Placeholder={data.Tahun_MasukSDIT}
            changeHandler={(e) => setTahunMasuk(e.target.value)}
            tanggal={true}
          />
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Alamat"}
              Placeholder={data.Alamat}
              changeHandler={(e) => setAlamat(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Nama Angkatan"}
                Placeholder={data.Nama_Angkatan}
                changeHandler={(e) => setAngkatan(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Tempat Lahir"}
              Placeholder={data.Tempat_lahir}
              changeHandler={(e) => setTempatLahir(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Tanggal Lahir"}
                Placeholder={data.Tanggal_Lahir}
                changeHandler={(e) => setTanggalLahir(e.target.value)}
                tanggal={true}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"TK Sebelum"}
              Placeholder={data.AsalTK}
              changeHandler={(e) => setTkSebelum(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"SD Sebelum"}
                Placeholder={data.Asal_SD}
                changeHandler={(e) => setSdSebelum(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Prestasi"}
              Placeholder={data.Prestasi}
              changeHandler={(e) => setPrestasi(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"File Prestasi"}
                Placeholder={data.LinkPrestasi}
                changeHandler={(e) => setFilePrestasi(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <button
              className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]"
              onClick={handleUbahSiswa}
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
