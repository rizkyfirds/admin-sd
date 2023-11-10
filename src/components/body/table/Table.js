import React from "react";

const Table = ({ headers, data, startIndex, itemsPerPage, searchTerm }) => {
    const filteredData = data.filter(item => {
        const values = Object.values(item).join(" ").toLowerCase();
        return values.includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <table className="w-full mt-2">
                <thead className="bg-[#D9D9D9]">
                    <tr>
                        <th className="text-center py-1.5">No</th>
                        {headers.map((header, index) => (
                            <th key={index} className="text-center py-1.5">
                                {header}
                            </th>
                        ))}
                        <th className="text-center py-1.5">Aksi</th>
                    </tr>
                </thead>
                <tbody className="bg-[#E5E3E3]">
                    {filteredData.length > 0 ? (
                        filteredData.slice(startIndex, startIndex + itemsPerPage).map((row, rowIndex) => (
                            <tr key={startIndex + rowIndex}>
                                <td className="text-center py-1.5">
                                    {String(startIndex + rowIndex + 1).padStart(2, "0")}
                                </td>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td key={cellIndex} className="text-center py-1.5">
                                        {cell}
                                    </td>
                                ))}
                                <td className="text-center py-1.5">
                                    <button className="bg-blue-500 text-white mr-2">
                                        Ubah
                                    </button>
                                    <button className="bg-red-500 text-white">
                                        Delete
                                    </button>
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

export default Table;
