// Tambah.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";
import CheckBoxInputField from "../../inputField/CheckBoxInputField";
import axios from "axios";

function Tambah({ setShowTambah, setActionType }) {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nik, setNIK] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [lulusan, setLulusan] = useState("");
  const [linkSertifikat, setLinkSertifikat] = useState("");
  const [linkKK, setKK] = useState("");
  const [linkKTP, setKTP] = useState("");
  const [nomorKontak, setNomorKontak] = useState("");
  const [email, setEmail] = useState("");
  const [linkIjazah, setLinkIjazah] = useState("");
  const [filePublikasi, setFilePublikasi] = useState("");

  // console.log("lulusan ", nama)

  const renderBack = () => {
    setShowTambah(false);
    navigate("/data-guru");
  };

  const handleTambahGuru = () => {
    const requestingData = {
      id: nik,
      nama: nama,
      Email: email,
      Nomor_HP: nomorKontak,
      Tempat_Lahir: tempatLahir,
      Tanggal_Lahir: tanggalLahir,
      Alamat: alamat,
      Lulusan: lulusan,
      Sertifikat: linkSertifikat,
      Publikasi: filePublikasi,
      KK: linkKK,
      KTP: linkKTP,
    };
    console.log("data masuk ", requestingData);
    axios({
      method: "POST",
      url: "http://localhost:3000/guru",
      data: requestingData,
    }).then((result) => {
      console.log("hasil", result);
      if (result.data.msg == "Guru Created") {
        console.log("register success");
        setActionType("update guru");
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
            Data Guru /
          </h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="mt-8 mb-16 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">Form Tambah Data Guru</div>
        </div>
        <div className="w-full px-20 pt-8">
          <InputField
            Value={"Nama"}
            Placeholder={"isi nama guru"}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"NIK"}
            Placeholder={"isi NIK guru"}
            changeHandler={(e) => setNIK(e.target.value)}
          />
          <div className="flex w-full">
            <div className="w-1/2">
              <InputField
                Value={"Tempat Lahir"}
                Placeholder={"isi tempat lahir guru"}
                changeHandler={(e) => setTempatLahir(e.target.value)}
              />
            </div>
            <div className="w-1/2 ml-3">
              <InputField
                Value={"Tanggal Lahir"}
                Placeholder={"isi tanggal lahir guru"}
                changeHandler={(e) => setTanggalLahir(e.target.value)}
                tanggal={true}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Nomor Kontak"}
              Placeholder={"nomor kontak guru"}
              changeHandler={(e) => setNomorKontak(e.target.value)}
            />
            <div className="pl-3">
              <InputField
                Value={"Email"}
                Placeholder={"email guru"}
                changeHandler={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <InputField
            Value={"Alamat"}
            Placeholder={"isi alamat guru"}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <CheckBoxInputField
            Value={"Lulusan"}
            changeHandler={setLulusan} // lulusan belum masuk
            ManyValue={["S1", "S2", "S3"]}
          />
          <InputField
            Value={"File Publikasi"}
            Placeholder={"isi link file publikasi"}
            changeHandler={(e) => setFilePublikasi(e.target.value)}
          />
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"File Sertifikat"}
              Placeholder={"isi link sertifikat guru"}
              changeHandler={(e) => setLinkSertifikat(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Link KK"}
                Placeholder={"File KK guru"}
                changeHandler={(e) => setKK(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"File Ijazah"}
              Placeholder={"link file ijazah guru"}
              changeHandler={(e) => setLinkIjazah(e.target.value)}
            />
            <div className="pl-3">
              <InputField
                Value={"File KTP"}
                Placeholder={"link file KTP guru"}
                changeHandler={(e) => setKTP(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <button
              className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]"
              onClick={handleTambahGuru}
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

export default Tambah;
