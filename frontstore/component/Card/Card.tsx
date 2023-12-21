import { Key, ReactNode, useEffect, useState, useRef } from "react";
import React from "react";
import styles from "./Card.module.scss";
import { Button } from "..";

export type CardProps = {
  image?: string;
  tagSale?: string;
  title?: string;
  content?: string;
  vote?: number;
  soldOut?: boolean;
  price?: any;
  discountPrice?: any;
  link?: string;
  onClick?: () => void;
  className?: string;
  buttonEnd?: boolean;
  type?: "Product" | "Image" | "Docs" | "News";
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
  //Function to render
  const renderImage = () => {
    return (
      <>
        <div
          className={["row justify-center align-center", styles.outImage].join(
            " "
          )}
        >
          <img className={styles.img} src={props.image} alt="Not Found" />
        </div>
        {props.type == "News" && (
          <div
            className={[
              "justify-center align-center",
              styles.backgroundImg,
            ].join(" ")}
          />
        )}
      </>
    );
  };

  const renderTagSale = () => {
    return (
      <div
        className={["justify-center align-center", styles.tagSale].join(" ")}
      >
        <div className={[styles.inTagSale].join(" ")}>{props.tagSale}</div>
      </div>
    );
  };

  const renderSoldOut = () => {
    return (
      <div
        className={["row justify-center align-center", styles.soldOut].join(
          " "
        )}
      >
        HẾT HÀNG
      </div>
    );
  };
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
            className={["row justify-center align-center", styles.price].join(
              " "
            )}
          >
            {props.discountPrice && (
              <span className={[styles.defaultPrice].join(" ")}>
                {props.price.toLocaleString()}₫
              </span>
            )}
            <span className={[styles.discountPrice].join(" ")}>
              {props.discountPrice
                ? props.discountPrice.toLocaleString()
                : props.price?.toLocaleString()}
              ₫
            </span>
          </div>
        )}
      </>
    );
  };

  //Main render
  return (
    <div className={[styles.outCard].join(" ")}>
      {props.tagSale && typeCss == "Product" && renderTagSale()}
      <a
        href={props.link}
        onClick={() => {
          handleOnClick();
        }}
      >
        <div
          className={[
            props.type ? styles[props.type] : styles.Product,
            props.className,
          ].join(" ")}
        >
          <div className={[styles.FameImage].join(" ")}>
            {renderImage()}
            {props.soldOut && renderSoldOut()}
          </div>
          <div
            className={["justify-center align-center", styles.FameContent].join(
              " "
            )}
          >
            <div className={[styles.nameCard].join(" ")}>{props.title}</div>
            {props.type == "Docs" && (
              <div className={[, styles.outLineDocs].join(" ")}>
                <hr className={[styles.lineDocs].join(" ")} />
              </div>
            )}
            {props.content && (
              <div className={[, styles.Content].join(" ")}>
                {props.content}
              </div>
            )}
            <div
              className={[
                "row justify-center align-center",
                styles.voteCard,
              ].join(" ")}
            >
              {props.vote && renderVote(props.vote)}
            </div>
            {renderPrice()}
          </div>
          {props.type == "Docs" && props.buttonEnd && (
            <div className={["row", styles.ButtonMoreCard].join(" ")}>
              <Button
                className={[styles.inButtonMoreCard].join(" ")}
                children={"ĐỌC THÊM"}
                color={"fill"}
                borderRadius={"none"}
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
Card.deafultProps = {
  buttonEnd:false
};
