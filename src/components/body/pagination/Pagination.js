import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="flex gap-7 pt-2">
            {currentPage > 1 && (
                <span
                    className="bg-[#D9D9D9] px-3 py-1"
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </span>
            )}

            {currentPage < totalPages && (
                <span
                    className="bg-[#D9D9D9] px-3 py-1"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </span>
            )}
        </div>
    );
};

export default Pagination;
