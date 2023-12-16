import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Ubah from "./UbahProfile";
import InputField from "../../inputField/InputField";
import Button from "../../button/Button";

function Profile() {
  const navigate = useNavigate();
  const [showUbah, setShowUbah] = useState(false);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nik, setNIK] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [luluasan, setLuluasan] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [perguruanTinggi, setPerguruanTinggi] = useState("");
  const [linkSertifikat, setLinkSertifikat] = useState("");
  const [linkKK, setKK] = useState("");
  const [linkKTP, setKTP] = useState("");
  const [nomorKontak, setNomorKontak] = useState("");
  const [email, setEmail] = useState("");
  const [linkIjazah, setLinkIjazah] = useState("");

  useEffect(() => {
    if (showUbah === true) {
      navigate("/profile/edit-profile");
    } 
  }, [showUbah]);

  const renderUbah = () => {
    setShowUbah(true);
  };

  return (
    <div className="w-full h-full">
      {showUbah == false ? (
        <>
          <h1 className="font-bold text-4xl font-['Segoe UI']">Profile User</h1>
          <div className="py-8 h-full">
            <div className="bg-white h-fit">
              <div className="pt-6 w-full text-center font-bold font-['Segoe UI']">
                Informasi Pengguna
              </div>
              <div className="flex h-full px-20 py-12 ">
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
                tanggal= {true}
              />
            </div>
          </div>
          <InputField
            Value={"Alamat"}
            Placeholder={"isi alamat guru"}
            changeHandler={(e) => setAlamat(e.target.value)}
          />
          <div className="grid grid-flow-col justify-stretch">
          <InputField
            Value={"Lulusan"}
            Placeholder={"pilih lulusan"}
            changeHandler={(e) => setLuluasan(e.target.value)}
            dropdown={true}
            dropdownValue = {["s1", "s2", "s3"]}
          />
            <div className="ml-3">
              <InputField
                Value={"Isi Jurusan"}
                Placeholder={"isi jurusan"}
                changeHandler={(e) => setJurusan(e.target.value)}
              />
            </div>
          </div>
          <InputField
            Value={"Perguruan Tinggi"}
            Placeholder={"isi nama perguruan tinggi"}
            changeHandler={(e) => setPerguruanTinggi(e.target.value)}
          />
            <InputField
              Value={"Sertifikat diperoleh"}
              Placeholder={"isi link sertifikat guru"}
              changeHandler={(e) => setLinkSertifikat(e.target.value)}
            />
            
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
              </div>
              <div
                className="pb-6 w-full text-center font-bold font-['Segoe UI']"
                onClick={renderUbah}
              >
                <Button
                  color={"#03045E"}
                  text={"Ubah"}
                  className={"w-60"}
                  hoverBg="[#06F]"
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
      <Routes>
        <Route
          path="/profile/edit-profile"
          element={<Ubah setShowUbah={setShowUbah} />}
        />
      </Routes>
    </div>
  );
}

export default Profile;
