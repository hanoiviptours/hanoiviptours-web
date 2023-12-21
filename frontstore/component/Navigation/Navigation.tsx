import React, { Key, useEffect, useState } from "react";
import styles from "./Navigation.module.scss";


export type NavigationProps = {
  className?: string;
  style?: any;
};
const Navigation = (NavigationProps: NavigationProps) => {
  const [props, setProps] = useState(NavigationProps);
  const DropDownHeader = [
    { icon: "bi bi-airplane-fill", title: "Vé máy bay", link: "#", color: "#0f8f03" },
    { icon: "bi bi-columns", title: "Khách sạn", link: "#", color: "#e60909" },
    {
      icon: "bi bi-house-heart",
      title: "Khách sạn commit",
      link: "#",
      color: "#16f251",
    },
    {
      icon: "bi bi-8-square-fill",
      title: "Top thương hiệu",
      link: "#",
      color: "#e7eb09",
    },
    { icon: "bi bi-train-front-fill", title: "Vé tàu", link: "#", color: "#cc063b" },
    { icon: "bi bi-ticket-perforated", title: "Săn vé", link: "#", color: "#8a02b0" },
    {
      icon: "bi bi-phone-flip",
      title: "Mua mã thẻ điện thoại",
      link: "#",
      color: "#07d9f5",
    },
    {
      icon: "bi bi-phone-vibrate-fill",
      title: "Nạp tiền điện thoại",
      link: "#",
      color: "#0063ed",
    },
  ];

  useEffect(() => {
    setProps(NavigationProps);
  }, [NavigationProps]);

  return (
    <div
      className={[
        "row align-center justify-center",
        styles.Navigation,
        props.className,
      ].join(" ")}
      style={props.style}
    >
      {DropDownHeader &&
        DropDownHeader.length > 0 &&
        DropDownHeader.map((item: any, key:Key) => {
          return (
            <div className={["col", styles.Drop].join(" ")} key={key}>
              <i
                className={[
                  "row align-center justify-center",
                  item.icon,
                  styles.icon,
                ].join(" ")}
                style={{ color: `${item.color}` }}
              />
              <div
                className={[
                  "row align-center justify-center",
                  styles.Title,
                ].join(" ")}
              >
                {item.title}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Navigation;
