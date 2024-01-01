import React, { Key, useEffect, useState } from "react";
import styles from "./Flight.module.scss";
import { Button, SlickHeader } from "../../component";
import { InputNavi } from "../../component/InputNavi";

const Flight = () => {
  const search = [
    {
      component: "Input",
      title: "Chọn điểm đi",
      type: "option",
      icon:"faPlaneDeparture",
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
      icon:"faPlaneArrival",
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
      icon:"faCalendarDays",
      placeholder: "",
    },
    {
      component: "Input",
      title: "Số khách, hạng ghế",
      type: "unit",
      icon:"faUsers",
      placeholder: "",
    },
  ];

  //function to render

  const renderSearch = () => {
    return (
      <div
        className={["row align-center justify-center", styles.Search].join(" ")}
      >
        <>
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
        </>
      </div>
    );
  };

  const renderListSearch = () => {
    return <div className={["container",styles.ListSearch].join(" ")}>
      
    </div>;
  };

  //Main render
  return (
    <div className={[styles.Flight].join(" ")}>
      {renderSearch()}
      {renderListSearch()}
    </div>
  );
};
export default Flight;
