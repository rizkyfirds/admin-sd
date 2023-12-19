// Tambah.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import SearchField from "../../inputField/SearchFiled";
import Button from "../../button/Button";
import axios from "axios";

function Tambah({ setShowTambah, data, setActionType }) {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [namaKeluarga, setNamaKeluarga] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nik, setNIK] = useState("-");
  const [nikOrtu, setNIKOrtu] = useState("-");
  const [lulusan, setLulusan] = useState("");
  const [keluarga, setKeluarga] = useState("");
  const [pendapatan, setPendapatan] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [noKontak, setNoKontak] = useState("");
  const [email, setEmail] = useState("");
  const [nikFiltered, setNikFiltered] = useState("");

  // console.log("cekk ", namaKeluarga);
  const handleGetSiswaByNIK = () => {
    const requestingData = {
      key: parseInt(nik, 10),
    };
    // console.log("data masuk ", requestingData);
    axios({
      method: "POST",
      url: "http://localhost:3000/cariSiswa/id/",
      data: requestingData,
    }).then((result) => {
      // console.log("hasil", result.data.Status );
      // console.log("hasil nih", result.data.Status === "Success ");
      if (result.data.Status === "Success ") {
        setNama(result.data.Isi[0].nama);
      } else {
        console.log("gagal menambahkan, ada yg salah");
      }
    });
  };

  const handleTambahKeluarga = () => {
    const requestingData = {
      id: nikOrtu,
      Jenis: keluarga,
      nama: namaKeluarga,
      pekerjaan: pekerjaan,
      alamat: alamat,
      pendapatan: pendapatan,
      Pendidikan_Terakhir: lulusan,
      Email: email,
      Nomor_HP: noKontak,
      ID_Siswa: nik,
    };
    console.log("juuuu ", pendapatan);
    console.log(requestingData);
    axios({
      method: "POST",
      url: "http://localhost:3000/ortu",
      data: requestingData,
    }).then((result) => {
      console.log("hasil", result);
      if (result.data.msg == "Ortu Created") {
        console.log("register success");
        setActionType("update ortu");
        renderBack();
      } else {
        console.log("gagal menambahkan, ada yg salah");
      }
    });
  };

  useEffect(() => {
    if (nik != "-") {
      handleGetSiswaByNIK();
    }
  }, [nik]);

  const renderBack = () => {
    setShowTambah(false);
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
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Tambah</h1>
      </div>
      <div className="my-16 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">
            Form Tambah Data Keluarga
          </div>
        </div>
        <div className="w-full px-20 pt-10">
          <SearchField
            Value={"NIK Siswa"}
            Placeholder={"pilih NIK siswa"}
            changeHandler={(e) => setNIK(e)} // Fix: Pass e.target.value instead of e.target
            datas={data}
            // nikFiltered={setNikFiltered}
          />
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
            Placeholder={"pilih keluarga"}
            changeHandler={(e) => setKeluarga(e.target.value)}
            dropdown={true}
            ManyValue={["Ayah", "Ibu", "Wali Siswa"]}
          />
          <InputField
            Value={"NIK Keluarga"}
            Placeholder={"isi NIK keluarga siswa"}
            changeHandler={(e) => setNIKOrtu(e.target.value)}
          />
          <InputField
            Value={"Nama"}
            Placeholder={"isi nama keluarga siswa"}
            changeHandler={(e) => setNamaKeluarga(e.target.value)}
          />
          {/* <InputField
            Value={"Nama"}
            Placeholder={"isi nama keluarga siswa"}
            changeHandler={(e) => setNamaKeluarga(e.target.value)}
          /> */}
          <InputField
            Value={"Pekerjaan"}
            Placeholder={"isi pekerjaan keluarga siswa"}
            changeHandler={(e) => setPekerjaan(e.target.value)}
          />
          <InputField
            Value={"Alamat"}
            Placeholder={"isi alamat keluarga siswa"}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <InputField
            Value={"Pendapatan"}
            Placeholder={"isi pendapatan keluarga siswa"}
            changeHandler={(e) => setPendapatan(e.target.value)}
            dropdown={true}
            ManyValue={["< 1 juta", "1 - 5 juta", "> 5 juta"]}
          />
          <InputField
            Value={"Pendidikan Terakhir"}
            Placeholder={"pilih lulusan"}
            changeHandler={(e) => setLulusan(e.target.value)}
            dropdown={true}
            ManyValue={["SD", "SMP", "SMA", "S1", "S2", "S3", "lainnnya"]}
          />
          <InputField
            Value={"Nomor Kontak"}
            Placeholder={"nomor kontak"}
            changeHandler={(e) => setNoKontak(e.target.value)}
          />
          <InputField
            Value={"Email"}
            Placeholder={"email"}
            changeHandler={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-10">
          <div className="flex justify-center gap-x-5">
            <button
              className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]"
              onClick={handleTambahKeluarga}
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
