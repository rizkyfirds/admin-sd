import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserTie, FaUserCircle, FaUserCog } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";
import { BiSolidInjection } from "react-icons/bi";
import axios from "axios";

function SideBar({ showMenu, setShowMenu,setLoginStatus }) {
  const handleLogout = () => {
      axios({
        method: "GET",
        url: "http://localhost:3000/auth/logout",
      }).then((result) => {
        console.log("hasil", result);
        if (result.data.Status === "Success Logout") {
          setLoginStatus(false);
        }
      }); 
  };
  return (
    <div className="sticky top-0 min-h-screen max-h-full bg-[#004B23]">
      <div className="px-4 h-full">
              <div className="flex py-3.5 border-b-2">
                <p className="m-auto font-bold text-center text-xl font-['Segoe UI'] text-white h-fit">
                  SD Islam Terpadu Inspiratif
                </p>
              </div>
            <div className="flex py-3.5 border-b-2">
              <div className="w-full m-auto hover:bg-[#299948]">
                <button
                  className="flex"
                  onClick={() => setShowMenu("Dashboard")}
                >
                  <RiDashboardLine className="text-white text-xl mr-2 my-auto" />
                  <p
                    className={`my-auto ${
                      showMenu === "Dashboard" ? "font-bold " : "font-normal"
                    } text-lg font-['Segoe UI'] text-white`}
                  >
                    Dashboard
                  </p>
                </button>
              </div>
            </div>
          <div className="flex py-3.5 border-b-2">
            <div className="w-full grid place-self-center gap-y-4">
              <div className="w-full m-auto hover:bg-[#299948]">
                <button className="" onClick={() => setShowMenu("Data Siswa")}>
                  <div className="flex">
                    <HiUserGroup className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto ${
                        showMenu === "Data Siswa" ? "font-bold " : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Data Siswa
                    </p>
                  </div>
                </button>
              </div>
              <div className="hover:bg-[#299948]">
                <button className="" onClick={() => setShowMenu("Data Guru")}>
                  <div className="flex">
                    <FaUserTie className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto ${
                        showMenu === "Data Guru" ? "font-bold " : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Data Guru
                    </p>
                  </div>
                </button>
              </div>
              <div className="hover:bg-[#299948]">
                <button
                  className=""
                  onClick={() => setShowMenu("Data Keluarga Siswa")}
                >
                  <div className="flex">
                    <MdFamilyRestroom className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto text-left ${
                        showMenu === "Data Keluarga Siswa"
                          ? "font-bold "
                          : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Data Keluarga Siswa
                    </p>
                  </div>
                </button>
              </div>
              <div className="hover:bg-[#299948]">
                <button
                  className=""
                  onClick={() => setShowMenu("Data Kelas")}
                >
                  <div className="flex">
                    <GiTeacher className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto text-left ${
                        showMenu === "Data Kelas"
                          ? "font-bold "
                          : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Data Kelas
                    </p>
                  </div>
                </button>
              </div>
              <div className="hover:bg-[#299948]">
                <button
                  className=""
                  onClick={() => setShowMenu("Data Wali Kelas")}
                >
                  <div className="flex">
                    <FaUserTie className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto text-left ${
                        showMenu === "Data Wali Kelas"
                          ? "font-bold "
                          : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Data Wali Kelas
                    </p>
                  </div>
                </button>
              </div>
              <div className="hover:bg-[#299948]">
                <button
                  className=""
                  onClick={() => setShowMenu("Lomba Internal")}
                >
                  <div className="flex">
                    <PiCertificateBold className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto text-left ${
                        showMenu === "Lomba Internal"
                          ? "font-bold "
                          : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Lomba Internal
                    </p>
                  </div>
                </button>
              </div>
              <div className="hover:bg-[#299948]">
                <button
                  className=""
                  onClick={() => setShowMenu("Lomba External")}
                >
                  <div className="flex">
                    <PiCertificateBold className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto text-left ${
                        showMenu === "Lomba External"
                          ? "font-bold "
                          : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Lomba External
                    </p>
                  </div>
                </button>
              </div>
              <div className="hover:bg-[#299948]">
                <button
                  className=""
                  onClick={() => setShowMenu("Imunisasi")}
                >
                  <div className="flex">
                    <BiSolidInjection className="text-white text-xl mr-2 my-auto" />
                    <p
                      className={`my-auto text-left ${
                        showMenu === "Imunisasi"
                          ? "font-bold "
                          : "font-normal"
                      } text-lg font-['Segoe UI'] text-white`}
                    >
                      Imunisasi
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
            {/* <div className="flex py-3.5 w-full border-b-2">
              <div className="w-full grid place-self-center gap-y-4">
                <div className="hover:bg-[#299948]">
                  <button
                    className="w-full"
                    onClick={() => setShowMenu("Role")}
                  >
                    <div className="flex">
                      <FaUserCog className="text-white text-xl mr-2 my-auto" />
                      <p
                        className={`my-auto ${
                          showMenu === "Role" ? "font-bold " : "font-normal"
                        } text-lg font-['Segoe UI'] text-white`}
                      >
                        Role
                      </p>
                    </div>
                  </button>
                </div>
                <div className="hover:bg-[#299948]">
                  <button
                    className="w-full"
                    onClick={() => setShowMenu("Profile")}
                  >
                    <div className="flex">
                      <FaUserCircle className="text-white text-xl mr-2 my-auto" />
                      <p
                        className={`my-auto ${
                          showMenu === "Profile" ? "font-bold " : "font-normal"
                        } text-lg font-['Segoe UI'] text-white`}
                      >
                        Profile
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div> */}
          <div className="flex py-9">
            <div className="flex w-full h-1/4 px-5">
              <button onClick={handleLogout} className="w-full bg-[#ADB5BD] text-[#7E0303] text-xl font-['Segoe UI'] font-bold hover:bg-[#FFFFFF] hover:text-[#FF0404]">
                KELUAR
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SideBar;
