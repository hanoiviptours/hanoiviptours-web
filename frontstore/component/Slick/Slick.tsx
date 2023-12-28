import { Key, ReactNode, useEffect, useState, useRef } from "react";
import React from "react";
import styles from "./Slick.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type SlickProps = {
  sizeArrow?: "small" | "normal"
  [props: string]: any;
};

export const Slick = (SlickProps: SlickProps) => {
  //Define constant
  const [props, setProps] = useState(SlickProps);
  const slider = useRef<any>();

  //Function hook
  useEffect(() => {
    setProps(SlickProps);
  }, [SlickProps]);

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
        style={props.sizeArrow=="small"?{width:"30px",height:"30px",top:"35%",fontSize:"25px"}:{}}
        onClick={() => handleArrowClick("next")}
      />
    );
  };
  const PrevArrow = () => {
    return (
      <i
        className={["bi bi-chevron-left", styles.prev].join(" ")}
        onClick={() => handleArrowClick("prev")}
        style={props.sizeArrow=="small"?{width:"30px",height:"30px",top:"35%",fontSize:"25px"}:{}}
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
    <Slider
      ref={slider}
      prevArrow={<CustomArrow direction="prev" />}
      nextArrow={<CustomArrow direction="next" />}
      {...props}
      className={[styles.Slider, props.className].join(" ")}
    />
  );
};
Slick.deafultProps = {};
