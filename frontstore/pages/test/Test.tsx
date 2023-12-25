import React, { Key, useEffect, useState } from "react";
import styles from "./Test.module.scss";
import { CartAtom, LoadingAtom } from "../../atom";
import { Button, Card, SlickHeader } from "../../component";
import { Slickimage } from "../../component/Slickimage";

const Test = () => {
  const [data1, setData1] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const Image = "https://gcs.tripi.vn/tripi-assets/mytour/images/bali.png";

  return (
    <div
      className={[
        "row align-center justify-center",
        styles.DropDownHeader,
      ].join(" ")}
    >
      <Card 
        className={[
          styles.Card,
        ].join(" ")}
        image={Image}
        title={"Khách sạn A5 Hà Nội"}
        vote={4.5}
        price={3000000}
        link={"#"}
        type={"Product"}
        valueVote={150}
        />
    </div>
  );
};
export default Test;
