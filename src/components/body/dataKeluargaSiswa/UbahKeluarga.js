// Tambah.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";
import axios from "axios";

function Ubah({ setShowUbah, data, setActionType }) {
  // console.log("datattta ", data)

  const navigate = useNavigate();
  const [nama, setNama] = useState(data.siswa?.nama || "");
  const [namaKeluarga, setNamaKeluarga] = useState(data.nama || "");
  const [alamat, setAlamat] = useState(data.alamat || "");
  const [nik, setNIK] = useState(data.siswa?.ID || "");
  const [nikOrtu, setNIKOrtu] = useState(data.ID || "");
  const [lulusan, setLulusan] = useState(data.Pendidikan_Terakhir || "");
  const [keluarga, setKeluarga] = useState(data.Jenis || "");
  const [pendapatan, setPendapatan] = useState(data.pendapatan || "");
  const [pekerjaan, setPekerjaan] = useState(data.pekerjaan || "");
  const [noKontak, setNoKontak] = useState(data.Nomor_HP || "");
  const [email, setEmail] = useState(data.Email || "");

  // console.log("cekk ", namaKeluarga);
  // const handleGetSiswaByNIK = () => {
  //   const requestingData = {
  //     key: parseInt(nik, 10)
  //   };
  //   // console.log("data masuk ", requestingData);
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3000/cariSiswa/id/",
  //     data: requestingData,
  //   }).then((result) => {
  //     // console.log("hasil", result.data.Status );
  //     // console.log("hasil nih", result.data.Status === "Success ");
  //     if (result.data.Status === "Success ") {
  //       setNama(result.data.Isi[0].nama);
  //     } else {
  //       console.log("gagal menambahkan, ada yg salah");
  //     }
  //   });
  // };

  const handleUbahKeluarga = () => {
    const requestingData = {
      ID_Siswa: nik,
      Jenis: keluarga,
      nama: namaKeluarga,
      pekerjaan: pekerjaan,
      alamat: alamat,
      pendapatan: pendapatan,
      Pendidikan_Terakhir: lulusan,
      Email: email,
      Nomor_HP: noKontak,
    };
    console.log(requestingData);
    axios({
      method: "PATCH",
      url: `http://localhost:3000/ortu/${nikOrtu}`,
      data: requestingData,
    }).then((result) => {
      console.log("hasil", result);
      if (result.data.msg == "Ortu Updated") {
        console.log("Updated success");
        setActionType("update ortu");
        renderBack();
      } else {
        console.log("gagal Updated, ada yg salah");
      }
    });
  };

  // useEffect(() => {
  //   if (nik != "-") {
  //     handleGetSiswaByNIK();
  //   }
  // }, [nik]);

  const renderBack = () => {
    setShowUbah("-");
    navigate("/data-keluarga");
  };

  return (
    <div className="w-full h-full">
      <div className="flex">
        <button>
          <h1
            className="font-bold text-4xl font-['Segoe UI']"
            onClick={renderBack}
          >
            Data Keluarga Siswa /
          </h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Ubah</h1>
      </div>
      <div className="my-16 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Ubah Data Keluarga
          </div>
        </div>
        <div className="w-full px-20 pt-10">
          <div className="flex mt-4">
            <div className="flex w-24 h-11">
              <h1 className="font-SegoeUI my-auto">NIK Siswa</h1>
            </div>
            <div className="w-full p-2.5 italic border border-[#000000] border-solid">
              {nik}
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex w-24 h-11">
              <h1 className="font-SegoeUI my-auto">Nama</h1>
            </div>
            <div className="w-full p-2.5 italic border border-[#000000] border-solid">
              {nama}
            </div>
          </div>
          {/* <InputField
            Value={"Nama"}
            Placeholder={"auto dari BE"}
            changeHandler={(e) => setNama(e.target.value)}
          /> */}
          <InputField
            Value={"Keluarga"}
            Placeholder={keluarga}
            changeHandler={(e) => setKeluarga(e.target.value)}
            dropdown={true}
            ManyValue={["Ayah", "Ibu", "Wali Siswa"]}
          />
          <InputField
            Value={"NIK Keluarga"}
            Placeholder={nikOrtu}
            changeHandler={(e) => setNIKOrtu(e.target.value)}
          />
          <InputField
            Value={"Nama"}
            Placeholder={namaKeluarga}
            changeHandler={(e) => setNamaKeluarga(e.target.value)}
          />
          {/* <InputField
            Value={"Nama"}
            Placeholder={"isi nama keluarga siswa"}
            changeHandler={(e) => setNamaKeluarga(e.target.value)}
          /> */}
          <InputField
            Value={"Pekerjaan"}
            Placeholder={pekerjaan}
            changeHandler={(e) => setPekerjaan(e.target.value)}
          />
          <InputField
            Value={"Alamat"}
            Placeholder={alamat}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <InputField
            Value={"Pendapatan"}
            Placeholder={pendapatan}
            changeHandler={(e) => setPendapatan(e.target.value)}
            dropdown={true}
            ManyValue={["< 1 juta", "1 - 5 juta", "> 5 juta"]}
          />
          <InputField
            Value={"Pendidikan Terakhir"}
            Placeholder={lulusan}
            changeHandler={(e) => setLulusan(e.target.value)}
            dropdown={true}
            ManyValue={["SD", "SMP", "SMA", "S1", "S2", "S3", "lainnnya"]}
          />
          <InputField
            Value={"Nomor Kontak"}
            Placeholder={noKontak}
            changeHandler={(e) => setNoKontak(e.target.value)}
          />
          <InputField
            Value={"Email"}
            Placeholder={email}
            changeHandler={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-10">
          <div className="flex justify-center gap-x-5">
            <button
              className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]"
              onClick={handleUbahKeluarga}
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
