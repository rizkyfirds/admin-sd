import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TableReport = ({
  headers,
  data,
  keyValues,
  startIndex,
  itemsPerPage,
  searchTerm,
  conditionButton,
  setConditionButton,
}) => {
  // console.log("lll ", data);

  const handleButton = (e) => {
    // console.log("huyyy ",e)
    setConditionButton(e);
  };

  const filteredData = data.filter((item) => {
    const values = Object.values(item).join(" ").toLowerCase();
    return values.includes(searchTerm.toLowerCase());
  });
  return (
    <div className="overflow-x-auto">
      <table className="mt-2 min-w-full">
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
                        {value === "NamaAngkatan"
                          ? // console.log("first", row),
                            row["kelas"] &&
                            row["kelas"]["Nama_Angkatan"] !== undefined
                            ? row["kelas"]["Nama_Angkatan"]
                            : "-"
                          : // console.log("other", row),
                          row[value] !== undefined
                          ? row[value]
                          : "-"}
                      </td>
                    ))}

                  <td className="text-center Fpy-1.5">
                    {conditionButton === "tambah" ? (
                      <button
                        className="bg-[#03045E] hover:bg-[#0066FF] m-4 text-white mr-2 p-1 text-base font-bold"
                        onClick={() => handleButton(row)}
                      >
                        Pilih
                      </button>
                    ) : (
                      <button
                        className="bg-[#7E0303] hover:bg-[#DE0404] m-4 text-white p-1 text-base font-bold"
                        onClick={() => handleButton(row)}
                      >
                        Hapus
                      </button>
                    )}
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={headers.length + 2} className="text-center py-1.5">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableReport;
