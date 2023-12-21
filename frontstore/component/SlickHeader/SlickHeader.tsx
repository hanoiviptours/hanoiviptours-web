import { Key, ReactNode, useEffect, useState, useRef } from "react";
import React from "react";
import styles from "./SlickHeader.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navigation from "../Navigation/Navigation";

export type SlickHeaderProps = {
  images?: string[];
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
        <Navigation/>
      </div>
    </div>
  );
};
SlickHeader.deafultProps = {};