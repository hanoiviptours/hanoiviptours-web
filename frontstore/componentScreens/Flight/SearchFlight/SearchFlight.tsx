import React, { Key, useEffect, useState } from "react";
import styles from "./SearchFlight.module.scss";
import { Button } from "../../../component";
import { InputNavi } from "../../../component/InputNavi";

export type SearchFlightProps = {
  className?: string;
  style?: any;
  onChange?: (value: any) => void;
};

export const SearchFlight = (SearchFlightProps: SearchFlightProps) => {
  const search = [
    {
      component: "Input",
      title: "Chọn điểm đi",
      type: "option",
      icon: "faPlaneDeparture",
      placeholder: "Chọn điểm đi",
      option: [
        { name: "Việt Nam", select: ["Hà Nội", "Hồ Chí Minh"] },
        { name: "Thái Lan", select: ["BangKoc", "Tiwlen"] },
      ],
    },
    {
      component: "Input",
      title: "Chọn điểm đến",
      type: "option",
      icon: "faPlaneArrival",
      placeholder: "Chọn điểm đến",
      option: [
        { name: "Việt Nam", select: ["Hà Nội", "Hồ Chí Minh"] },
        { name: "Thái Lan", select: ["BangKoc", "Tiwlen"] },
      ],
    },
    {
      component: "Input",
      title: "Thời gian",
      type: "date",
      icon: "faCalendarDays",
      placeholder: "",
    },
    {
      component: "Input",
      title: "Số khách, hạng ghế",
      type: "unit",
      icon: "faUsers",
      placeholder: "",
    },
  ];
  //Main render
  return (
    <div
      className={["row align-center justify-center", styles.Search].join(" ")}
    >
      <div
        className={[
          "container row align-center justify-center",
          styles.inSearch,
        ].join(" ")}
      >
        {search.map((item: any, key: Key) => {
          return (
            <div className={["col", styles.InputNavi].join(" ")} key={key}>
              <div className={["row", styles.outInput].join(" ")}>
                <InputNavi
                  className={[styles.Input].join(" ")}
                  classNameInput={[styles.Textbox].join(" ")}
                  placeholder={item.placeholder}
                  type={item.type}
                  title={item.title}
                  optionInput={item.option}
                  icon={item.icon}
                />
              </div>
            </div>
          );
        })}
        <div className={[styles.buttonSreachNavi].join(" ")}>
          <Button
            className={[styles.button].join(" ")}
            children={
              <i className={["bi bi-search", styles.iconButton].join(" ")} />
            }
            color="fill"
            borderRadius={"standard"}
          />
        </div>
      </div>
    </div>
  );
};
