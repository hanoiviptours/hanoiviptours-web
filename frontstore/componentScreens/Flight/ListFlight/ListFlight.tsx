import React, { Key, useEffect, useState } from "react";
import styles from "./ListFlight.module.scss";
import { Button } from "../../../component";
import { InputNavi } from "../../../component/InputNavi";

export type ListFlightProps = {
  className?: string;
  style?: any;
};

export const ListFlight = (ListFlightProps: ListFlightProps) => {

  //Main render
  return (
    <div
      className={["row align-center justify-center", styles.Search].join(" ")}
    >
      List flight
    </div>
  );
};
