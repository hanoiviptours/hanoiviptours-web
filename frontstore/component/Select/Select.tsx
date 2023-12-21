import React, { Key, useState, useEffect, CSSProperties } from "react";
import styles from "./Select.module.scss";

interface options {
  label?: string;
  value?: string;
}

export type SelectProps = {
  onChange?: (value: any) => void;
  options?: options[];
  value?: string;
  defaultValue?: string;
  className?: string;
  shapeRound?: "standard" | "round" | "default";
  style?: CSSProperties;
};

const Select = (SelectProps: SelectProps) => {
  //define constants
  const [selectedOption, setSelectedOption] = useState("");
  //function to create

  //function to handle action
  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
    SelectProps.onChange && SelectProps.onChange(e.target.value);
  };
  //function to hook
  useEffect(() => {
    SelectProps.value && setSelectedOption(SelectProps.value);
  }, [SelectProps.value]);
  //function to render

  //main render
  return (
    <select
      className={[
        styles.Select,
        SelectProps.className,
        styles[`Shape_${SelectProps.shapeRound}`],
      ].join(" ")}
      value={selectedOption}
      onChange={handleChange}
    >
      {SelectProps.options &&
        SelectProps.options.length > 0 &&
        SelectProps.options.map((item: any, key: Key) => (
          <option
            className={[styles.Option].join(" ")}
            value={item.value}
            key={key}
          >
            {item.label}
          </option>
        ))}
    </select>
  );
};

export { Select };
