import React, { Key, useEffect, useState } from "react";
import styles from "./Test.module.scss";
import { CartAtom, LoadingAtom } from "../../atom";
import { Button, SlickHeader } from "../../component";


const Test = () => {
  const [data1, setData1] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);


  return (
    <div
      className={[
        "row align-center justify-center",
        styles.DropDownHeader,
      ].join(" ")}
    >
    </div>
  );
};
export default Test;
