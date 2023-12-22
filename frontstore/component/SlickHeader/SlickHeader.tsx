import { Key, ReactNode, useEffect, useState, useRef, Children } from "react";
import React from "react";
import styles from "./SlickHeader.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Input } from "../Input";
import { Button } from "../Button";

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
      children: [
        {
          component: "Input",
          title: "Chọn điểm đi",
          type: "text",
          placeholder: "Chọn điểm đi",
        },
        {
          component: "Input",
          title: "Chọn điểm đến",
          type: "text",
          placeholder: "Chọn điểm đến",
        },
        {
          component: "Input",
          title: "Thời gian",
          type: "date",
          placeholder: "",
        },
        {
          component: "Input",
          title: "Số khách, hạng ghế",
          type: "dropdownOption",
          placeholder: "",
        },
      ],
    },
    {
      icon: "bi bi-columns",
      title: "Khách sạn",
      link: "#",
      color: "#e60909",
      mode: "modal",
      key: "keyModal2",
      children: [
        {
          component: "Input",
          title: "Chọn địa điểm",
          type: "text",
          placeholder: "Chọn địa điểm",
        },
        {
          component: "Input",
          title: "Thời gian lưu trú",
          type: "date",
          placeholder: "",
        },
        {
          component: "Input",
          title: "Số khách, số lượng phòng",
          type: "dropdownOption",
          placeholder: "",
        },
      ],
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
      children: [
        {
          component: "Input",
          title: "Chọn thương hiệu",
          type: "text",
          placeholder: "Nhập thương hiệu",
        },
        {
          component: "Input",
          title: "Thời gian lưu trú",
          type: "date",
          placeholder: "",
        },
        {
          component: "Input",
          title: "Số khách, số lượng phòng",
          type: "dropdownOption",
          placeholder: "",
        },
      ],
    },
    {
      icon: "bi bi-train-front-fill",
      title: "Vé tàu",
      link: "#",
      color: "#cc063b",
      mode: "modal",
      key: "keyModal4",
      children: [
        {
          component: "Input",
          title: "Chọn điểm đi",
          type: "text",
          placeholder: "Chọn điểm đi",
        },
        {
          component: "Input",
          title: "Chọn điểm đến",
          type: "text",
          placeholder: "Chọn điểm đến",
        },
        {
          component: "Input",
          title: "Thời gian",
          type: "date",
          placeholder: "",
        },
        {
          component: "Input",
          title: "Số lượng khách và loại ghế",
          type: "dropdownOption",
          placeholder: "",
        },
      ],
    },
    {
      icon: "bi bi-ticket-perforated",
      title: "Săn vé",
      link: "#",
      color: "#8a02b0",
      mode: "modal",
      key: "keyModal5",
      children: [
        {
          component: "Input",
          title: "Chọn điểm đi",
          type: "text",
          placeholder: "Chọn điểm đi",
        },
        {
          component: "Input",
          title: "Chọn điểm đến",
          type: "text",
          placeholder: "Chọn điểm đến",
        },
        {
          component: "Input",
          title: "Số khách",
          type: "dropdownOption",
          placeholder: "",
        },
      ],
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

  const renderChildrenNavi = (Children: any) => {
    return (
      <>
        {Children &&
          Children.length > 0 &&
          Children.map((item: any, key: Key) => {
            return (
              <div className={["col", styles.InputNavi].join(" ")} key={key}>
                <div className={["row", styles.TitleInput].join(" ")}>
                  {item.title}
                </div>
                <div className={["row", styles.outInput].join(" ")}>
                  <Input
                    className={[styles.Input].join(" ")}
                    placeholder={item.placeholder}
                    type="text"
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
    );
  };

  const renderModalSlick = (KeyModal: string) => {
    switch (KeyModal) {
      case "keyModal1":
        return renderChildrenNavi(DropDownHeader[0].children);
      case "keyModal2":
        return renderChildrenNavi(DropDownHeader[1].children);
      case "keyModal3":
        return renderChildrenNavi(DropDownHeader[3].children);
      case "keyModal4":
        return renderChildrenNavi(DropDownHeader[4].children);
      case "keyModal5":
        return renderChildrenNavi(DropDownHeader[5].children);
    }
  };

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
                  if (item.key == keyModalSlick) {
                    setKeyModalSlick("");
                  } else {
                    setKeyModalSlick(item.key);
                  }
                }}
                style={
                  item.key == keyModalSlick
                    ? { borderBottom: "3px solid green" }
                    : {}
                }
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
                onClick={() => {
                  setKeyModalSlick("");
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
        <div
          className={[
            "row align-center justify-center",
            styles.modalSlick,
          ].join(" ")}
        >
          {keyModalSlick != "" && renderModalSlick(keyModalSlick)}
        </div>
      </div>
      <div
        className={[
          styles.SidebarOverlay,
          `${keyModalSlick != "" ? styles.Active : ""}`,
        ].join(" ")}
        onClick={() => {
          setKeyModalSlick("");
          handleOpenModalSlick();
        }}
      ></div>
    </div>
  );
};
SlickHeader.deafultProps = {};