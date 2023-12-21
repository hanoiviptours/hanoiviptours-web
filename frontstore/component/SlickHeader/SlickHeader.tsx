import { Key, ReactNode, useEffect, useState, useRef } from "react";
import React from "react";
import styles from "./SlickHeader.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
  image?: string;
  link?: string;
}

export type SlickHeaderProps = {
  Images?: Image[];
  className?: string;
};

export const SlickHeader = (SlickHeaderProps: SlickHeaderProps) => {
  //Define constant
  const [props, setProps] = useState(SlickHeaderProps);
  const slider = useRef<any>();
  const [openModalSlick, setOpenModalSlick] = useState(false);
  const [keyModalSlick, setKeyModalSlick] = useState("");
  const DropDownHeader = [
    {
      icon: "bi bi-airplane-fill",
      title: "Vé máy bay",
      link: "#",
      color: "#0f8f03",
      mode: "modal",
      key: "keyModal1",
    },
    {
      icon: "bi bi-columns",
      title: "Khách sạn",
      link: "#",
      color: "#e60909",
      mode: "modal",
      key: "keyModal2",
    },
    {
      icon: "bi bi-house-heart",
      title: "Khách sạn commit",
      link: "#",
      color: "#16f251",
      mode: "link",
    },
    {
      icon: "bi bi-8-square-fill",
      title: "Top thương hiệu",
      link: "#",
      color: "#e7eb09",
      mode: "modal",
      key: "keyModal3",
    },
    {
      icon: "bi bi-train-front-fill",
      title: "Vé tàu",
      link: "#",
      color: "#cc063b",
      mode: "modal",
      key: "keyModal4",
    },
    {
      icon: "bi bi-ticket-perforated",
      title: "Săn vé",
      link: "#",
      color: "#8a02b0",
      mode: "modal",
      key: "keyModal5",
    },
  ];

  //Function hook
  useEffect(() => {
    setProps(SlickHeaderProps);
  }, [SlickHeaderProps]);

  //function to action

  const handleOpenModalSlick = () => {
    setOpenModalSlick(!openModalSlick);
  };

  const handleArrowClick = (direction: any) => {
    if (direction === "next") {
      slider.current?.slickNext();
    } else {
      slider.current?.slickPrev();
    }
  };
  //Function to render
  const NextArrow = () => {
    return (
      <i
        className={["bi bi-chevron-right", styles.next].join(" ")}
        onClick={() => handleArrowClick("next")}
      />
    );
  };
  const PrevArrow = () => {
    return (
      <i
        className={["bi bi-chevron-left", styles.prev].join(" ")}
        onClick={() => handleArrowClick("prev")}
      />
    );
  };

  interface CustomArrowProps {
    direction: "prev" | "next";
  }

  const CustomArrow: React.FC<CustomArrowProps> = ({ direction }) => {
    const arrowIcon = direction === "prev" ? PrevArrow() : NextArrow();
    return <div className={[styles.arrow].join(" ")}>{arrowIcon}</div>;
  };

  const renderModalSlick = (KeyModal:string) => {
    switch (KeyModal) {
      case "keyModal1":
        return(<>1</>);
      case "keyModal2":
        return(<>2</>);
      case "keyModal3":
        return(<>3</>);
      case "keyModal4":
        return(<>4</>);
      case "keyModal5":
        return(<>5</>);
    }
  }

  const renderNavigationSlick = () => {
    return (
      <div
        className={["row align-center justify-center", styles.Navigation].join(
          " "
        )}
      >
        {DropDownHeader &&
          DropDownHeader.length > 0 &&
          DropDownHeader.map((item: any, key: Key) => {
            return item.mode == "modal" ? (
              <div
                className={["col", styles.Drop].join(" ")}
                key={key}
                onClick={() => {
                  handleOpenModalSlick();
                  setKeyModalSlick(item.key);
                }}
              >
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
            ) : (
              <a
                className={["col", styles.Drop].join(" ")}
                key={key}
                href={`${item.link}`}
              >
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
              </a>
            );
          })}
      </div>
    );
  };
  //Main render
  return (
    <div className={[styles.SlickHeader].join(" ")}>
      <Slider
        ref={slider}
        slidesToShow={1}
        className={[styles.Slick, props.className].join(" ")}
        swipeToSlide={true}
        dots={true}
        prevArrow={<CustomArrow direction="prev" />}
        nextArrow={<CustomArrow direction="next" />}
      >
        {props.Images &&
          props.Images.length > 0 &&
          props.Images.map((item: any, key: Key) => {
            return (
              <a
                key={key}
                className={[styles.outImage].join(" ")}
                href={item.link}
              >
                <img
                  className={[styles.Image].join(" ")}
                  src={item.image}
                  alt="Not Found"
                />
              </a>
            );
          })}
      </Slider>
      <div className={["container", styles.ButtonLink].join(" ")}>
        {renderNavigationSlick()}
      </div>
    </div>
  );
};
SlickHeader.deafultProps = {};
