import { Key, ReactNode, useEffect, useState, useRef } from "react";
import React from "react";
import styles from "./Card.module.scss";
import { Button } from "..";

export type CardProps = {
  image?: string;
  title?: string;
  vote?: number;
  valueVote?: number;
  soldOut?: boolean;
  price?: any;
  link?: string;
  onClick?: () => void;
  className?: string;
  type?: "Product" | "City";
};

export const Card = (CardProps: CardProps) => {
  //Define constant
  const [props, setProps] = useState(CardProps);
  const typeCss = props.type ? props.type : "Product";

  //Function hook
  useEffect(() => {
    setProps(CardProps);
  }, [CardProps]);

  //function to action
  const handleOnClick = () => {
    props.onClick && props.onClick();
  };

  const subVote = (point: number) => {
    if (point >= 4.5 && point < 5) {
      return "Xuất sắc";
    } else if (point < 4.5 && point >= 4.0) {
      return "Rất tốt";
    } else if (point < 4.0 && point >= 3.5) {
      return "Tốt";
    } else if (point < 3.5 && point >= 3.0) {
      return "Bình thường";
    } else if (point < 3.0 && point > 0) {
      return "Tệ";
    } else if (point == 0) {
      return "Chưa có đánh giá";
    }
  };
  //Function to render

  //Card City
  const renderVote = (rate: number) => {
    const voteLever = () => {
      const array: number[] = [];
      for (let i = 1; i <= 5; i += 1) {
        array.push(i);
      }
      return array;
    };
    const integerPart = Math.floor(rate);
    const decimalPart = rate - integerPart;
    const middleIcon = () => {
      if (decimalPart < 0.25) {
        return <i className="bi bi-star" style={{ color: "#ebb71e" }} />;
      } else if (decimalPart < 0.75) {
        return <i className="bi bi-star-half" style={{ color: "#ebb71e" }} />;
      } else {
        return <i className="bi bi-star-fill" style={{ color: "#ebb71e" }} />;
      }
    };
    return (
      <>
        {voteLever().map((item: any, key: Key) => {
          return (
            <p key={key}>
              {rate && item < integerPart + 1 && (
                <i className="bi bi-star-fill" style={{ color: "#ebb71e" }} />
              )}
            </p>
          );
        })}
        {decimalPart != 0 && middleIcon()}
        {decimalPart != 0
          ? voteLever().map((item: any, key: Key) => {
              return (
                <p key={key}>
                  {rate && item > integerPart + 1 && (
                    <i className="bi bi-star" style={{ color: "#ebb71e" }} />
                  )}
                </p>
              );
            })
          : voteLever().map((item: any, key: Key) => {
              return (
                <p key={key}>
                  {rate && item > integerPart && (
                    <i className="bi bi-star" style={{ color: "#ebb71e" }} />
                  )}
                </p>
              );
            })}
      </>
    );
  };

  const renderPrice = () => {
    return (
      <>
        {typeof window !== "undefined" && (
          <div
            className={["row justify-end align-end", styles.price].join(" ")}
          >
            {props.price.toLocaleString()} đ
          </div>
        )}
      </>
    );
  };

  const renderImage = () => {
    return (
      <div
        className={[
          "justify-center align-center",
          props.type == "City" ? styles.outImageCity : styles.outImageProduct,
        ].join(" ")}
      >
        <img className={styles.img} src={props.image} alt="Not Found" />
      </div>
    );
  };
  const renderBottom = () => {
    return (
      <div
        className={[
          props.type == "City"
            ? "row justify-start align-center"
            : "row-none-warp",
          props.type == "City" ? styles.bottomCity : styles.bottomProduct,
        ].join(" ")}
      >
        {props.type == "City" ? (
          <div className={[styles.title].join(" ")}>{props.title}</div>
        ) : (
          <div className={[styles.content].join(" ")}>
            <div className={[styles.Title].join(" ")}>{props.title}</div>
            <div
              className={["row justify-start align-center", styles.Vote].join(
                " "
              )}
            >
              {renderVote(props.vote ? props.vote : 0)}
            </div>
            <div
              className={[
                "row justify-start align-center",
                styles.SubVote,
              ].join(" ")}
            >
              <div className={[styles.Point].join(" ")}>{props.vote}</div>
              <div className={[styles.Sub].join(" ")}>
                {subVote(props.vote ? props.vote : 0)}
              </div>
              {props.valueVote && (
                <div className={[styles.valueVote].join(" ")}>
                  | {props.valueVote} đánh giá
                </div>
              )}
            </div>
            {renderPrice()}
          </div>
        )}
      </div>
    );
  };

  //Main render
  return (
    <div className={[styles.outCard].join(" ")}>
      <a
        href={props.link}
        onClick={() => {
          handleOnClick();
        }}
      >
        <div className={[styles.Card, props.className].join(" ")}>
          {renderImage()}
          {renderBottom()}
        </div>
      </a>
    </div>
  );
};
Card.deafultProps = {
  buttonEnd: false,
};