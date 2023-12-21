import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.scss";

export type PaginationProps = {
  currentPage?: number;
  className?: string;
  disable?: boolean;
  maxItemsPerPage?: number;
  onChange?: (value: any) => void;
  totalItems?: number;
  rangeButton?: number;
  onClick?: () => void;
  selectTotal?: boolean;
  step?: boolean; //page to go
  numberItemSuggest?: number[];
  buttonClassName?: string;
};

const Pagination = (PaginationProps: PaginationProps) => {
  //define constants
  const [props, setProps] = useState(PaginationProps);
  const totalPages = Math.ceil(
    (props.totalItems ? props.totalItems : 10) /
      (props.maxItemsPerPage ? props.maxItemsPerPage : 2)
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  //function to handle actions
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    props.onChange && props.onChange(newPage);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, 5);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2
        );
      }
    }
    return pageNumbers;
  };
  //function to hook
  useEffect(() => {
    setProps(PaginationProps);
  }, [PaginationProps]);
  useEffect(() => {
    props.currentPage && setCurrentPage(props.currentPage);
  }, [props.currentPage]);
  //function to render

  //main render
  return (
    <div
      className={[
        styles.PaginationButton,
        "row-none-warp",
        props.className,
      ].join(" ")}
    >
      <div className={[""].join(" ")}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={[styles.Button, props.buttonClassName].join(" ")}
        >
          {"‹"}
        </button>
        {currentPage > 3 && totalPages > 5 && (
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1 || props.disable == true}
            className={[styles.Button, props.buttonClassName].join(" ")}
          >
            1
          </button>
        )}
        {currentPage > 4 && totalPages > 6 && (
          <span className={[styles.Dot].join(" ")}>...</span>
        )}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => {
              if (typeof page === "number") {
                handlePageChange(page);
              }
            }}
            className={[
              currentPage === page ? styles.ActiveButton : "",
              styles.Button,
              props.buttonClassName,
            ].join(" ")}
            disabled={props.disable}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages - 3 && totalPages > 6 && (
          <span className={[styles.Dot].join(" ")}>...</span>
        )}
        {currentPage < totalPages - 2 && totalPages > 5 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages || props.disable}
            className={[styles.Button].join(" ")}
          >
            {totalPages}
          </button>
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages == 1}
          className={[styles.Button, props.buttonClassName].join(" ")}
        >
          {"›"}
        </button>
      </div>
    </div>
  );
};

export { Pagination };
Pagination.defaultProps = {
  totalItems: 10,
  maxItemsPerPage: 10,
  currentPage: 1,
};
