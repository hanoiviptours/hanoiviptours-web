import { Key, ReactNode, useEffect, useState, useRef } from "react";
import React from "react";
import styles from "./SlickHeader.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type SlickHeaderProps = {
  images?: string[];
  linkShip?: string;
  linkRestore?: string;
  linkGift?: string;
  linkSaving?: string;
  className?: string;
};

export const SlickHeader = (SlickHeaderProps: SlickHeaderProps) => {
  //Define constant
  const [props, setProps] = useState(SlickHeaderProps);
  const slider = useRef<any>();

  //Function hook
  useEffect(() => {
    setProps(SlickHeaderProps);
  }, [SlickHeaderProps]);

  const ButtonLink = [
    {
      index: 1,
      icon: <i className={["bi bi-truck", styles.icon].join(" ")} />,
      title: "Ship COD",
      subTitle: "Nhận hàng thanh toán",
      link: props.linkShip,
    },
    {
      icon: <i className={["bi bi-arrow-repeat", styles.icon].join(" ")} />,
      title: "Miễn phí đổi trả",
      subTitle: "Có thẻ bảo hành",
      link: props.linkRestore,
    },
    {
      icon: <i className={["bi bi-gift", styles.icon].join(" ")} />,
      title: "Ưu đãi thành viên",
      subTitle: "Đăng kí nhận Voucher",
      link: props.linkGift,
    },
    {
      icon: <i className={["bi bi-piggy-bank", styles.icon].join(" ")} />,
      title: "Ưu đãi combo",
      subTitle: "Càng mua càng rẻ",
      link: props.linkSaving,
    },
  ];

  //function to action

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
        {props.images &&
          props.images.length > 0 &&
          props.images.map((item: any, key: Key) => {
            return (
              <div key={key} className={[styles.outImage].join(" ")}>
                <img
                  className={[styles.Image].join(" ")}
                  src={item}
                  alt="Not Found"
                />
              </div>
            );
          })}
      </Slider>
      <div className={["container","row", styles.ButtonLink].join(" ")}>
        {ButtonLink &&
          ButtonLink.map((item: any, key: Key) => {
            return (
              <a
                className={["col-3 row", styles.Button].join(" ")}
                key={key}
                href={item.link}
              >
                {item.index && item.index == 1 ? (
                  <div className={["", styles.outIcon].join(" ")}>
                    {item.icon}
                  </div>
                ) : (
                  <div
                    className={["", styles.outIcon].join(" ")}
                    style={{ borderLeft: "1px solid white" }}
                  >
                    {item.icon}
                  </div>
                )}
                <div className={[styles.content].join(" ")}>
                  <div className={[styles.Title].join(" ")}>{item.title}</div>
                  <div className={[styles.subTitle].join(" ")}>
                    {item.subTitle}
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};
SlickHeader.deafultProps = {};