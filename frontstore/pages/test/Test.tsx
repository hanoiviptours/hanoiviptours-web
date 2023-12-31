import React, { Key, useEffect, useState } from "react";
import styles from "./Test.module.scss";
import { CartAtom, LoadingAtom } from "../../atom";
import { Button, Card, Dropdown, SlickHeader } from "../../component";
import { Slickimage } from "../../component/Slickimage";
import { InputNavi } from "../../component/InputNavi";

const Test = () => {
  const [data1, setData1] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const Image = "https://gcs.tripi.vn/tripi-assets/mytour/images/bali.png";

  const Option = [
    { name: "Việt Nam", select: ["Hà Nội", "Hồ Chí Minh"] },
    { name: "Thái Lan", select: ["BangKoc", "Tiwlen"] },
  ];

  return (
    <div
      className={[
        "row align-center justify-center",
        styles.DropDownHeader,
      ].join(" ")}
    >
      <InputNavi icon={"faUser"} title={"vị trí"} optionInput={Option} type={"date"}/>
    </div>
  );
};
export default Test;
