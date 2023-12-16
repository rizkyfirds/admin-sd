import React, { useState } from "react";
import Logo from "../assets/logoSD.svg";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import bgLogin from "../assets/bgLogin.svg";
import axios from "axios";

function LoginPage({ setLoginStatus }) {
  const [usernama, setUsernama] = useState(null);
  const [pass, setPass] = useState(null);
  console.log("user ", setLoginStatus);

  const handleLogin = () => {
    console.log("usernama type:", typeof usernama);
    console.log("pass type:", typeof pass);
    console.log("pass :", pass);

    const requestingData = {
      id: usernama,
      password: pass,
    };

    try {
      const jsonString = JSON.stringify(requestingData);
      console.log("JSON String:", jsonString);

      axios({
        method: "POST",
        url: "http://localhost:3000/auth/login",
        data: jsonString,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((result) => {
        console.log("hasil", result);
        if (result.data.Status === "Success ") {
          console.log("login success");
          setLoginStatus(true);
        } else {
          setLoginStatus(false);
          console.log("gagal login success");
        }
      });
    } catch (error) {
      console.error("JSON.stringify error:", error);
    }
  };

  return (
    <div className="h-screen bg-green-900 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgLogin})` }}
      ></div>
      <div className="flex justify-center">
        <div className="py-36 min-mx-widthLoginForm max-w-fit h-full relative z-10">
          <div className="bg-white">
            <div>
              <img className="mx-auto pt-8" src={Logo} alt="" />
              <div className="pt-3.5 text-center text-xl font-['Segoe UI']">
                <p className="font-normal">Administrasi Siswa dan Guru</p>
                <p className="font-bold">
                  SD Islam Terpadu INSPIRATIF Bojongsari
                </p>
              </div>
              <div className="mt-7 mx-10">
                <div className="">
                  <p className="text-xl font-['Segoe UI'] font-normal">
                    Username
                  </p>
                  <div className="pt-2 flex bg-[#D9D9D9] my-auto h-11">
                    <FaUserAlt className="ml-4 my-auto" />
                    <input
                      className="bg-transparent ml-6 w-full flex my-auto"
                      type="text"
                      placeholder="masukkan username "
                      onChange={(e) => setUsernama(e.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  <p className="text-xl font-['Segoe UI'] font-normal">
                    Password
                  </p>
                  <div className="pt-2 flex bg-[#D9D9D9] my-auto h-11">
                    <RiLockPasswordFill className="ml-4 my-auto" />
                    <input
                      className="bg-transparent ml-6 w-full flex my-auto"
                      type="password"
                      placeholder="masukkan password "
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-16">
                  <button
                    onClick={handleLogin}
                    className="h-14 mt-12 mx-auto w-full bg-[#004B23] hover:bg-[#299948] font-bold text-xl font-['Segoe UI'] text-white "
                  >
                    Masuk
                  </button>
                  <div className="w-full text-center mt-6">
                    <p className="pb-5">
                      Copyright c 2023. SD Islam Terpadu INSPIRATIF Bojongsari.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
