import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Table = ({
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
  // console.log("lll ", data);

  const filteredData = data.filter((item) => {
    const values = Object.values(item).join(" ").toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });
  return (
    <div className="overflow-x-auto">
      <table className="mt-2 min-w-full">
        {walikelas == true ? (
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
                              : row["kelas"][value] !== undefined
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
        ) : kelas == true ? (
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
                  .map((row, rowIndex) => {
                    return (
                      <tr key={startIndex + rowIndex}>
                        <td className="text-center py-1.5">
                          {String(startIndex + rowIndex + 1).padStart(2, "0")}
                        </td>
                        {keyValues &&
                          keyValues.map((value, keyIndex) => (
                            <td key={keyIndex} className="text-center py-1.5">
                              {row["kelas"][value] !== undefined
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
                    );
                  })
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
        ) : keluargaCek == false || keluargaCek == undefined ? (
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
                      {keyValues &&
                        keyValues.map((value, keyIndex) => (
                          <td key={keyIndex} className="text-center py-1.5">
                            {row[value] !== undefined ? row[value] : "-"}
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
        ) : (
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
                      {keyValues &&
                        keyValues.map((value, keyIndex) => (
                          <td key={keyIndex} className="text-center py-1.5">
                            {value === "namaSiswa"
                              ? row["siswa"]?.["nama"] || "-"
                              : row[value] !== undefined
                              ? row[value]
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
        )}
      </table>
    </div>
  );
};

export default Table;
