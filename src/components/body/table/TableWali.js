import React, {useEffect, useState} from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const TableWali = ({
  headers,
  data,
  keyValues,
  startIndex,
  itemsPerPage,
  searchTerm,
  keluargaCek,
  kelas,
  walikelas,
  setUbah,
  setDeleteID,
}) => {
  console.log("lllop ", data);

  const [jumlahsiswa, setJumlahSiswa]=useState(null)
  useEffect(() => {
      axios({
        method: "GET",
        url: `http://localhost:3000/List/walikelas-siswa`,
      }).then((result) => {
        console.log("kelas ", result.data.Data);
        if (result.status !== 200) {
          setJumlahSiswa([]);
        } else {
          setJumlahSiswa(result.data.Data);
        }
      });
  }, []);


  const filteredData = Array.isArray(data)
    ? data.filter((item) => {
        const values = Object.values(item).join(" ").toLowerCase();
        return values.includes(searchTerm.toLowerCase());
      })
    : [];
  return (
    <div className="overflow-x-auto">
      <table className="mt-2 min-w-full">
          <>
            <thead className="bg-[#D9D9D9]">
              <tr>
                <th className="text-center py-1.5">No</th>
                {headers.map((header, index) => (
                  <th key={index} className="text-center py-1.5 w-fit">
                    {header}
                  </th>
                ))}
                <th className="text-center py-1.5 w-20">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-[#E5E3E3]">
              {filteredData.length > 0 ? (
                filteredData
                  .slice(startIndex, startIndex + itemsPerPage)
                  .map((row, rowIndex) => (
                    <tr key={startIndex + rowIndex}>
                      <td className="text-center py-1.5">
                        {String(startIndex + rowIndex + 1).padStart(2, "0")}
                      </td>
                      {console.log("roww", row)}
                      {keyValues &&
                        keyValues.map((value, keyIndex) => (
                          <td key={keyIndex} className="text-center py-1.5">
                            {value === "nama"
                              ? row["kelas"]["walikelas"][value] !== undefined
                                ? row["kelas"]["walikelas"][value]
                                : "-"
                              : value === "Alamat"
                              ? row["kelas"]["walikelas"][value] !== undefined
                                ? row["kelas"]["walikelas"][value]
                                : "-"
                               : value === "Siswa" ? (
                                  <>
                                    <p>belum ada</p>
                                    {console.log("siswa",jumlahsiswa)}
                                  </>
                                ) : row["kelas"][value] !== undefined
                                  ? row["kelas"][value]
                                  : "-"}
                          </td>
                        ))}
                      <td className="text-center Fpy-1.5">
                        <button
                          className="bg-[#805B10] hover:bg-[#FFB703] text-white mr-2 p-1"
                          onClick={() => setUbah(row)}
                        >
                          <FaRegEdit className="text-xl" />
                        </button>
                        <button
                          className="bg-[#7E0303] hover:bg-[#DE0404] text-white p-1"
                          onClick={() => setDeleteID(row)}
                        >
                          <MdDeleteForever className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td
                    colSpan={headers.length + 2}
                    className="text-center py-1.5"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </>
      </table>
    </div>
  );
};

export default TableWali;
