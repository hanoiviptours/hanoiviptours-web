import React, { Key, useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.scss";
import { Icon } from "../Icon";

export type NavigationProps = {
  className?: string;
  type?: "normal" | "slick";
  style?: any;
  clickOutside?: () => void;
};

const Navigation = (NavigationProps: NavigationProps) => {
  const [props, setProps] = useState(NavigationProps);
  const ref = useRef<any>(null);
  const DropDownHeader = [
    {
      icon: "faPlaneUp",
      title: "Vé máy bay",
      link: "#",
      color: "#0f8f03",
    },
    { icon: "faHotel", title: "Khách sạn", link: "#", color: "#e60909" },
    {
      icon: "faBuilding",
      title: "Khách sạn commit",
      link: "#",
      color: "#16f251",
    },
    {
      icon: "faStar",
      title: "Top thương hiệu",
      link: "#",
      color: "#e7eb09",
    },
    {
      icon: "faTrain",
      title: "Vé tàu",
      link: "#",
      color: "#cc063b",
    },
    {
      icon: "faTicket",
      title: "Săn vé",
      link: "#",
      color: "#8a02b0",
    },
    {
      icon: "faMobile",
      title: "Mua mã thẻ điện thoại",
      link: "#",
      color: "#07d9f5",
    },
    {
      icon: "faPhone",
      title: "Nạp tiền điện thoại",
      link: "#",
      color: "#0063ed",
    },
  ];

  useEffect(() => {
    setProps(NavigationProps);
  }, [NavigationProps]);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.clickOutside&&props.clickOutside()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      className={[
        "row align-center justify-center",
        styles.Navigation,
        props.className,
      ].join(" ")}
      style={props.style}
      ref={ref}
    >
      {DropDownHeader &&
        DropDownHeader.length > 0 &&
        (props.type == "slick"
          ? DropDownHeader.slice(0, 6)
          : DropDownHeader
        ).map((item: any, key: Key) => {
          return (
            <div className={["col", styles.Drop].join(" ")} key={key}>
              <Icon
                className={[
                  "row align-center justify-center",
                  styles.icon,
                ].join(" ")}
                icon={item.icon}
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
