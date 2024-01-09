import React, { Key, useEffect, useState } from "react";
import styles from "./Commit.module.scss";
import { FilterCommit, ListCommit } from "../../../componentScreens";

const Commit = () => {
  //Main render
  return (
    <div
      className={[
        "container row align-center justify-center",
        styles.Commit,
      ].join(" ")}
    >
      <div className={["col-3", styles.outFilter].join(" ")}>
        <div className={[styles.titleFilter].join(" ")}>
          Chọn lọc kết quả theo
        </div>
        <FilterCommit
          onChange={(e: any) => {
            console.log(e);
          }}
        />
      </div>
      <ListCommit className={["col-9", styles.ListCommit].join(" ")} />
    </div>
  );
};
export default Commit;
