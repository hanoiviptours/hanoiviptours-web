import React, { useEffect, useState, Key } from "react";
import styles from "./Filter.module.scss";
import { Dropdown } from "../Dropdown";
import { Checkbox, Icon, Input, Button, Divider } from "../index";
import Modal from "react-modal";

interface data {
  title?: string;
  type?: "checkbox" | "color";
  options?: any;
  maxLength?: number;
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
                  classNameTitle={styles.Title}
                  title={<h1>{item.title}</h1>}
                  onClick={handleOpen}
                  classNameChildren={styles.Children}
                  animationIcon={(value: boolean) => (
                    <Icon icon={value ? "faChevronUp" : "faChevronDown"} />
                  )}
                  children={
                    <>
                      {item.options && item.options.length > 10 && (
                        <Input
                          onChange={(value: any) => {
                            handleSearch(value, item.title);
                          }}
                        />
                      )}
                      <Checkbox
                        options={
                          direction == "vertical"
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
    <div className={styles.ComponentFilter}>
      {renderFilter("vertical")}
    </div>
  );
};
