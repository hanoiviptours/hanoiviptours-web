import React, { Key, useEffect, useState } from "react";
import styles from "./Test.module.scss";
import { CartAtom, LoadingAtom } from "../../atom";
import {
  Button,
  Card,
  Dropdown,
  Filter,
  SlickHeader,
  SliderFilter,
} from "../../component";
import { Slickimage } from "../../component/Slickimage";
import { InputNavi } from "../../component/InputNavi";

const Test = () => {
  const [data1, setData1] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);

  const [slider, setSlider] = useState([0, 10000]);

  const onChangeSlider = (value: any) => {
    setSlider(value);
  };

  const fakeData: any = [
    {
      title: "checkbox",
      type: "checkbox",
      options: [
        { label: "hoangvu", value: "hoangvu" },
        { label: "hoan", value: "hoan" },
        { label: "ska", value: "ska" },
        { label: "cloud", value: "cloud" },
        { label: "phone", value: "phone" },
        { label: "checked", value: "checked" },
        { label: "radio", value: "radio" },
        { label: "red", value: "red" },
        { label: "yellow", value: "yellow" },
        { label: "blue", value: "blue" },
        { label: "apple", value: "apple" },
        { label: "drop", value: "drop" },
        { label: "dmc", value: "dmc" },
      ],
    },
    {
      title: "Price",
      type: "checkbox",
      maxLength: 1,
      options: [
        { label: "Under 100000", value: "0 to 100000" },
        { label: "100000 to 300000", value: "100000 to 300000" },
        { label: "300000 to 500000", value: "300000 to 500000" },
        { label: "500000 and above", value: "500000 and above" },
      ],
    },
    {
      title: "color",
      type: "color",
      options: [
        { label: "red", value: "red", color: "red" },
        { label: "yellow", value: "yellow", color: "yellow" },
        { label: "blue", value: "blue", color: "blue" },
      ],
    },
  ];

  return (
    <div
      className={[
        "row align-center justify-center",
        styles.DropDownHeader,
      ].join(" ")}
    >
      <Filter
        size={"big"}
        valuesFormOnChange={(e: any) => {
          console.log(e);
        }}
        data={fakeData}
      />

      <SliderFilter
        min={0}
        max={10000}
        value={slider}
        onChange={(value) => {onChangeSlider(value)}}
      />
    </div>
  );
};
export default Test;
