import React, { Key, useEffect, useState } from "react";
import styles from "./ListCommit.module.scss";
import { Button } from "../../../component";
import { InputNavi } from "../../../component/InputNavi";

export type ListCommitProps = {
  className?: string;
  style?: any;
};

export const ListCommit = (ListCommitProps: ListCommitProps) => {
  //Main render
  return (
    <div
      className={[
        "row align-center justify-center",
        styles.ListCommit,
        ListCommitProps.className,
      ].join(" ")}
    >
      List flight
    </div>
  );
};
