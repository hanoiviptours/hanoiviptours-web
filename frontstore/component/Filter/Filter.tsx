import React, { useEffect, useState, Key } from "react";
import styles from "./Filter.module.scss";
import { Dropdown } from "../Dropdown";
import { Checkbox, Icon, Input, Button, Divider, SliderFilter } from "../index";
import Modal from "react-modal";

interface data {
  nameField?: string;
  title?: string;
  type?: "checkbox" | "color" | "ranger" | "voteStar";
  options?: any;
  maxLength?: number;
  minLength?: number;
  state?: boolean;
}

export type FilterProps = {
  onClick?: () => void;
  data?: data[];
  valuesFormOnChange?: (value: any) => void;
  size?: "small" | "big";
  className?: string;
  value?: any;
  maxLength?: number;
};

const initValueForm = (fields: any) => {
  var newAr: any = {};

  fields &&
    fields.length > 0 &&
    fields.map((item: any) => {
      newAr = {
        ...newAr,
        [item.title]: item.defaultValue ? item.defaultValue : [],
      };
    });
  return newAr;
};

const initInput = (fields: any) => {
  var newAr: any = {};
  fields &&
    fields.length > 0 &&
    fields.map((item: any) => {
      newAr = {
        ...newAr,
        [item.title]: "",
      };
    });
  return newAr;
};

export const Filter = (FilterProps: FilterProps) => {
  //define constants
  const [props, setProps] = useState(FilterProps);
  const [open, setOpen] = useState(false);
  const [valueForm, setValueForm] = useState(initValueForm(props.data));
  const [searchTerm, setSearchTerm] = useState<any>(initInput(props.data));
  const star: number[] = [1, 2, 3, 4, 5];
  //function to create
  //function to action
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleChangeForm = (input: string, value: any) => {
    props.valuesFormOnChange &&
      props.valuesFormOnChange({ ...valueForm, [input]: value });
    setValueForm((oldValues: any) => ({
      ...oldValues,
      [input]: value,
    }));
  };

  const handleSearch = (value: string, option: string) => {
    setSearchTerm((el: any) => ({ ...el, [option]: value }));
  };

  //function to hook
  useEffect(() => {
    setProps(FilterProps);
  }, [FilterProps]);

  useEffect(() => {
    props.value && setValueForm(props.value);
  }, [props.value]);

  //function to render

  const renderFilter = (direction: "horizontal" | "vertical") => {
    return (
      <div>
        {direction == "horizontal" && <Divider />}
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item: any, key: Key) => {
            return (
              <div key={key}>
                <Dropdown
                  className={styles.Filter}
                  classNameTitle={[
                    "row align-center justify-between",
                    styles.Title,
                  ].join(" ")}
                  state={item.state ? item.state : true}
                  offOutsite={true}
                  title={
                    item.type == "ranger" ? (
                      <>
                        {item.nameField}
                        <div className={[styles.valueRanger].join(" ")}>
                          {valueForm[`${item.title}`] &&
                          valueForm[`${item.title}`].length > 0
                            ? `${valueForm[
                                `${item.title}`
                              ][0].toLocaleString()} đ - ${valueForm[
                                `${item.title}`
                              ][1].toLocaleString()} đ`
                            : item.defaultValue
                            ? `${item.defaultValue[0].toLocaleString()} đ - ${item.defaultValue[1].toLocaleString()} đ`
                            : `${item.minLength.toLocaleString()} đ - ${item.maxLength.toLocaleString()} đ`}
                        </div>
                      </>
                    ) : (
                      <h1>{item.nameField}</h1>
                    )
                  }
                  onClick={handleOpen}
                  classNameChildren={styles.Children}
                  animationIcon={(value: boolean) => (
                    <Icon icon={value ? "faChevronUp" : "faChevronDown"} />
                  )}
                  children={
                    <>
                      {item.options && item.options.length > 10 && (
                        <div
                          className={["row align-center", styles.outinput].join(
                            " "
                          )}
                        >
                          <Input
                            className={[styles.input].join(" ")}
                            onChange={(value: any) => {
                              handleSearch(value, item.title);
                            }}
                            type="text"
                            placeholder="Nhập mục cần tìm"
                          />
                        </div>
                      )}
                      {item.type == "ranger" ? (
                        <div
                          className={[
                            "row align-center justify-center",
                            styles.outranger,
                          ].join(" ")}
                        >
                          <SliderFilter
                            className={[styles.ranger].join(" ")}
                            min={item.minLength}
                            max={item.maxLength}
                            step={1000}
                            value={
                              valueForm[item.title] &&
                              valueForm[item.title].length > 0
                                ? valueForm[item.title]
                                : item.defaultValue
                                ? item.defaultValue
                                : [item.minLength, item.maxLength]
                            }
                            onChange={(value: any) => {
                              handleChangeForm(item.title, value);
                            }}
                          />
                        </div>
                      ) : item.type == "voteStar" ? (
                        <div
                          className={[
                            "row align-center justify-center",
                            styles.outVote,
                          ].join(" ")}
                        >
                          {star.map((el: any, reKey: Key) => {
                            return (
                              <div
                                className={[
                                  "col row align-center justify-center",
                                  styles.vote,
                                  valueForm[item.title].includes(el)
                                    ? styles.chose
                                    : styles.unchose,
                                ].join(" ")}
                                key={reKey}
                                onClick={() => {
                                  if (!valueForm[item.title].includes(el)) {
                                    handleChangeForm(item.title, [
                                      ...valueForm[item.title],
                                      el,
                                    ]);
                                  } else {
                                    handleChangeForm(
                                      item.title,
                                      valueForm[item.title].filter(
                                        (number: any) => number != el
                                      )
                                    );
                                  }
                                }}
                              >
                                {el}
                                <Icon
                                  className={[styles.iconStar].join(" ")}
                                  icon={"faStar"}
                                />
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <Checkbox
                          options={
                            direction == "vertical" && item.options
                              ? item.options
                                  .filter((el: any) =>
                                    el.label
                                      .toLowerCase()
                                      .includes(searchTerm[item.title])
                                  )
                                  .slice(0, 10)
                              : item.options.filter((el: any) =>
                                  el.label
                                    .toLowerCase()
                                    .includes(searchTerm[item.title])
                                )
                          }
                          type={item.type}
                          maxLength={item.maxLength}
                          onChange={(value: any) => {
                            handleChangeForm(item.title, value);
                          }}
                          value={valueForm[item.title]}
                          direction={direction}
                        />
                      )}
                      {direction == "vertical" &&
                        item.options &&
                        item.options.length > 10 && (
                          <p onClick={handleOpen} className={styles.ShowMore}>
                            Show more
                          </p>
                        )}
                    </>
                  }
                  mode={"drop"}
                />
                <Divider
                  style={{
                    margin: direction == "horizontal" ? "1.5rem 0" : "1rem 0",
                  }}
                />
              </div>
            );
          })}
      </div>
    );
  };
  //main render

  return (
    <div className={styles.ComponentFilter}>{renderFilter("vertical")}</div>
  );
};
