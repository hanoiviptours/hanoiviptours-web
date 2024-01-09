import React, { Key, useEffect, useState } from "react";
import styles from "./Flight.module.scss";
import { ListFlight, SearchFlight } from "../../componentScreens";

const Flight = () => {

  //Main render
  return (
    <div className={[styles.Flight].join(" ")}>
      <SearchFlight/>
      <ListFlight/>
    </div>
  );
};
export default Flight;
