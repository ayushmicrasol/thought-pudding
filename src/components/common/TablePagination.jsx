// components/Pagination.js
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

const TablePagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-between items-center py-[11px] px-5 mt-5 shadow-[0px_-2px_5px_0px_#2A5F610D]">
      <button
        className={`w-10 h-10 flex items-center justify-center border  rounded-full transition-all duration-500 ${
          currentPage === 1
            ? "border-primary/25 text-primary/25"
            : "border-primary text-primary hover:border-green-600 hover:text-green-600"
        }`}
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <CaretLeft size={18} />
      </button>

      <div className="flex items-center gap-2.5 text-base/5 font-medium">
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) =>
          page === 2 ||
          page === totalPages ||
          page === 1 ||
          page === currentPage ? (
            <button
              key={page}
              className={`w-11 h-11 flex items-center justify-center rounded-full ${
                page === currentPage
                  ? "text-green-600 bg-green-600/10"
                  : "text-primary/50"
              }`}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          ) : (
            page === 3 && (
              <button
                key={page}
                className="w-11 h-11 flex items-center justify-center rounded-full text-primary/50"
              >
                ...
              </button>
            )
          )
        )}
      </div>

      <button
        className={`py-2.5 px-3 border border-primary rounded-full flex items-center gap-1 text-sm/5 text-primary font-medium nwxtbtn transition-all duration-500 ${
          currentPage === 10
            ? "border-primary/25 text-primary/25"
            : "border-primary text-primary hover:bg-green-600 hover:border-green-600 hover:text-white"
        }`}
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <CaretRight size={20} className="next-arrow" />
      </button>
    </div>
  );
};

export default TablePagination;
