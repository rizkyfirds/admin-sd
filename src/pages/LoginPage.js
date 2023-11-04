import React from "react";
import Logo from "../assets/logoSD.svg";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function LoginPage() {
  return (
    <div className="h-screen bg-green-900">
      <div className="py-36 px-widthLoginForm grid h-full">
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
                  <FaUserAlt className="ml-4" />
                  <input
                    className="bg-transparent ml-6 w-full flex my-auto"
                    type="text"
                    placeholder="masukkan username "
                  />
                </div>
              </div>
              <div className="">
                <p className="text-xl font-['Segoe UI'] font-normal">
                  Password
                </p>
                <div className="pt-2 flex bg-[#D9D9D9] my-auto h-11">
                  <RiLockPasswordFill className="ml-4" />
                  <input
                    className="bg-transparent ml-6 w-full flex my-auto"
                    type="password"
                    placeholder="masukkan password "
                  />
                </div>
              </div>
              <div className="">
                <p className="text-xl font-['Segoe UI'] font-normal">Role</p>
                <select id="role" className="w-full bg-[#D9D9D9] h-11">
                  <option value="admin">Admin</option>
                  <option value="waliGuru">Wali Guru</option>
                </select>
              </div>
              <button className="h-14 mt-12 mx-auto w-full bg-[#004B23] font-bold text-xl font-['Segoe UI'] text-[#C4C0C0]">
                Masuk
              </button>
              <div className="w-full text-center">
                <p className="">Copyright c 2023. SD Islam Terpadu INSPIRATIF Bojongsari.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
