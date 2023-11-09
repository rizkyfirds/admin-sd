import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { FaUserTie, FaUserCircle, FaUserCog } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

function SideBar({ showMenu, setShowMenu }) {
  return (
    <div className="sticky top-0 h-screen bg-[#004B23]">
      <div className="px-4 h-full">
        <div className="h-1/2">
          <div className="h-1/3">
            <div className="flex h-1/2 border-b-2">
              <div className="flex h-full ">
                <p className="m-auto font-bold text-center text-xl font-['Segoe UI'] text-white h-fit">
                  SD Islam Terpadu Inspiratif
                </p>
              </div>
            </div>
            <div className="flex h-1/2 border-b-2">
              <div className="flex h-full ">
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
          </div>
          <div className="flex h-1/3 border-b-2">
            <div className="grid place-content-center gap-y-4">
              <div className="">
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
              <div className="">
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
              <div className="">
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
            </div>
          </div>
          <div className="flex h-1/3">
            <div className="flex h-1/2 w-full border-b-2">
              <div className="h-full grid place-content-center gap-y-4">
                <div className="">
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
                <div className="">
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
            </div>
          </div>
        </div>
        <div className="h-1/2">
          <div className="flex h-2/6">
            <div className="flex w-full h-1/4 px-5">
              <button className="w-full bg-[#ADB5BD] text-[#7E0303] text-xl font-['Segoe UI'] font-bold">
                KELUAR
              </button>
            </div>
          </div>
          <div className="4/6"></div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
