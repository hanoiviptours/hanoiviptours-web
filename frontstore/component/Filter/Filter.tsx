import React, { Key, useState, useEffect } from "react";
import styles from "./Filter.module.scss";

interface list {
  title: string;
  link?: string;
}
export type FilterProps = {
  title?: string;
  list?: list[];
  className?: string;
  onChange?: (value: string) => void;
  currentPage?: string;
};
const Filter = (FilterProps: FilterProps) => {
  //define constants
  const [currentPage, setCurrentPage] = useState("");
  //function to create

  //function handle actions
  const handleClick = (value: string) => {
    setCurrentPage(value);
    FilterProps.onChange && FilterProps.onChange(value);
  };
  //function to hook
  useEffect(() => {
    FilterProps.currentPage && setCurrentPage(FilterProps.currentPage);
  }, [FilterProps.currentPage]);
  //function to render
  const renderList = (data: any) => {
    return (
      <>
        {data &&
          data.length > 0 &&
          data.map((item: any, key: Key) => (
            <a
              key={key}
              href={item.link}
              className={[
                item.title == currentPage ? styles.Focus : styles.List,
              ].join(" ")}
              onClick={() => handleClick(item.title)}
            >
              {item.title}
            </a>
          ))}
      </>
    );
  };
  //main render
  return (
    <div className={[FilterProps.className, styles.Filter].join(" ")}>
      <p className={[styles.Title].join(" ")}>{FilterProps.title}</p>
      <div className={[styles.Divider].join(" ")}></div>
      {renderList(FilterProps.list)}
    </div>
  );
};

export { Filter };
