import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Ubah from "./UbahProfile";
import Button from "../../button/Button";

function Profile() {
  const navigate = useNavigate();
  const [showTambah, setShowTambah] = useState(false);

  useEffect(() => {
    if (showTambah === true) {
      navigate("/profile/edit-profile");
    } else {
      navigate("../");
    }
  }, [showTambah]);

  const renderUbah = () => {
    setShowTambah(true);
  };

  return (
    <div className="w-full h-full">
      {/* <Tambah /> */}
      <h1 className="font-bold text-4xl font-['Segoe UI']">Profile User</h1>
      <div className="py-8 h-full">
        <div className="bg-white h-fit">
          <div className="pt-6 w-full text-center font-bold font-['Segoe UI']">
            Informasi Pengguna
          </div>
          <div className="flex h-full px-20 py-12 ">
            <div className="w-1/2 grid justify-center">
              <div className="h-photo w-photo  border border-[#000000] border-solid bg-slate-400"></div>
            </div>
            <div className="w-1/2">
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">Nama: </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">NIK: </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">
                  Tempat Lahir:{" "}
                </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">
                  Tanggal Lahir:{" "}
                </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">Alamat: </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">Lulusan: </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">
                  Perguruan Tinggi:{" "}
                </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
              <div className="flex mt-4 gap-x-0.5 w-full">
                <h1 className="my-auto w-24 font-['Segoe UI']">
                  Sertfikat Diperoleh:{" "}
                </h1>
                <div className="w-full border border-[#000000] border-solid mr"></div>
              </div>
            </div>
          </div>
          <div className="pb-6 w-full text-center font-bold font-['Segoe UI']">
            <Button color={"#03045E"} text={"Ubah"} className={"w-60"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
