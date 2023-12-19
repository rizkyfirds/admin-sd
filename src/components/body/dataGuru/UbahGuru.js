// Tambah.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";
import CheckBoxInputField from "../../inputField/CheckBoxInputField";
import axios from "axios";

function Ubah({ setShowUbah, setActionType, data }) {
  const navigate = useNavigate();
  const [nama, setNama] = useState(data.nama);
  const [alamat, setAlamat] = useState(data.Alamat);
  const [nik, setNIK] = useState(data.ID);
  const [tanggalLahir, setTanggalLahir] = useState(data.Tanggal_Lahir);
  const [tempatLahir, setTempatLahir] = useState(data.Tempat_Lahir);
  const [lulusan, setLulusan] = useState(data.lulusan);
  const [linkSertifikat, setLinkSertifikat] = useState(data.Sertifikat);
  const [linkKK, setKK] = useState(data.KK);
  const [linkKTP, setKTP] = useState(data.KTP);
  const [nomorKontak, setNomorKontak] = useState(data.Nomor_HP);
  const [email, setEmail] = useState(data.Email);
  const [linkIjazah, setLinkIjazah] = useState("");
  const [filePublikasi, setFilePublikasi] = useState(data.publikasi);

  // console.log("lulusan ", nama)

  const renderBack = () => {
    setShowUbah("-");
    navigate("/data-guru");
  };

  const handleUbahGuru = () => {
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
      ijazah: linkIjazah
    };
    // console.log(requestingData);
    axios({
      method: "PATCH",
      url: `http://localhost:3000/guru/${data.ID}`,
      data: requestingData,
    }).then((result) => {
      console.log("hasil", result);
      setActionType("update guru");
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
            Data Guru /
          </h1>
        </button>
        <h1 className="text-4xl font-['Segoe UI'] pl-2">Ubah</h1>
      </div>
      <div className="my-8 h-fit bg-white">
        <div className="flex pt-6 ml-8">
          <div className="font-bold mx-auto text-xl">Form Ubah Data Guru</div>
        </div>
        <div className="w-full px-20 pt-8">
          <InputField
            Value={"Nama"}
            Placeholder={nama}
            changeHandler={(e) => setNama(e.target.value)}
          />
          <InputField
            Value={"NIK"}
            Placeholder={nik}
            changeHandler={(e) => setNIK(e.target.value)}
          />
          <div className="flex w-full">
            <div className="w-1/2">
              <InputField
                Value={"Tempat Lahir"}
                Placeholder={tempatLahir}
                changeHandler={(e) => setTempatLahir(e.target.value)}
              />
            </div>
            <div className="w-1/2 ml-3">
              <InputField
                Value={"Tanggal Lahir"}
                Placeholder={tanggalLahir}
                changeHandler={(e) => setTanggalLahir(e.target.value)}
                tanggal={true}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"Nomor Kontak"}
              Placeholder={nomorKontak}
              changeHandler={(e) => setNomorKontak(e.target.value)}
            />
            <div className="pl-3">
              <InputField
                Value={"Email"}
                Placeholder={email}
                changeHandler={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <InputField
            Value={"Alamat"}
            Placeholder={alamat}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <CheckBoxInputField
            Value={"Lulusan"}
            changeHandler={setLulusan}
            ManyValue={["S1", "S2", "S3"]}
          />
          <InputField
            Value={"File Publikasi"}
            Placeholder={filePublikasi}
            changeHandler={(e) => setFilePublikasi(e.target.value)}
          />
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"File Sertifikat"}
              Placeholder={linkSertifikat}
              changeHandler={(e) => setLinkSertifikat(e.target.value)}
            />
            <div className="ml-3">
              <InputField
                Value={"Link KK"}
                Placeholder={linkKK}
                changeHandler={(e) => setKK(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <InputField
              Value={"File Ijazah"}
              Placeholder={linkIjazah}
              changeHandler={(e) => setLinkIjazah(e.target.value)}
            />
            <div className="pl-3">
              <InputField
                Value={"File KTP"}
                Placeholder={linkKTP}
                changeHandler={(e) => setKTP(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <div className="flex justify-center gap-x-5">
            <button
              className="w-32 h-10 bg-[#03045E] text-center text-white font-bold font-['Segoe UI'] hover:bg-[#06F]"
              onClick={handleUbahGuru}
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
