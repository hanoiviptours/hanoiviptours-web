import { useState, useEffect, Key } from "react";
import { Icon } from "../Icon";
import styles from "./Checkbox.module.scss";

interface options {
  value: string;
  label: string;
  color?: string;
  image?: string;
}

export type CheckboxProps = {
  type?: "checkbox" | "color";
  defaultValue?: any;
  options?: options[];
  onChange?: (value: any) => void;
  direction?: "horizontal" | "vertical";
  maxLength?: number;
  value?: any;
};

//function to create

export const Checkbox = (CheckboxProps: CheckboxProps) => {
  //Define constants
  const [check, setCheck] = useState<options[]>(
    CheckboxProps.defaultValue
      ? CheckboxProps.defaultValue.map((option: options) =>
          CheckboxProps.options?.find((el: options) => el.value == option.value)
        )
      : []
  );

  //Function to handle action
  const handleActionCheck = (option: options) => {
    if (CheckboxProps.maxLength == 1) {
      setCheck([option]);
      CheckboxProps.onChange && CheckboxProps.onChange([option]);
    } else {
      CheckboxProps.onChange &&
        CheckboxProps.onChange(
          check.find((item: options) => item.value == option.value)
            ? check.filter((item: options) => item.value != option.value)
            : [...check, option]
        );
      setCheck(
        check.find((item: options) => item.value == option.value)
          ? check.filter((item: options) => item.value != option.value)
          : [...check, option]
      );
    }
  };

  //Function to create

  //Function to render
  const renderOptions = (options?: any) => {
    var icon: any =
      CheckboxProps.maxLength == 1 ? "faCircleDot" : "faSquareCheck";
    var iconNoneCheck = CheckboxProps.maxLength == 1 ? "faCircle" : "faSquare";
    return (
      <div className="row">
        {options &&
          options.length > 0 &&
          options.map((item: any, key: Key) => {
            return (
              <div
                className={[
                  styles.outOption,
                  CheckboxProps.direction == "vertical"
                    ? "col-12"
                    : "col-3 col-lg-4 col-md-6",
                  "row align-center",
                ].join(" ")}
                key={key}
                onClick={() => {
                  handleActionCheck(item);
                }}
              >
                <div
                  className={[
                    styles.CheckOption,
                    styles[`CheckOption_${CheckboxProps.type}`],
                    styles[
                      `CheckOption_${CheckboxProps.type}_${
                        CheckboxProps.maxLength == 1 ? "radio" : "checkbox"
                      }`
                    ],
                  ].join(" ")}
                  style={{
                    backgroundColor:
                      CheckboxProps.type == "color" && item.color
                        ? item.color
                        : "transparent",
                    border:
                      CheckboxProps.type == "color"
                        ? check.find(
                            (option: options) => option.value == item.value
                          )
                          ? "3px solid black"
                          : "3px solid transparent"
                        : "1px solid transparent",
                  }}
                >
                  {CheckboxProps.type == "checkbox" ? (
                    <Icon
                      type="regular"
                      icon={
                        check.find(
                          (option: options) => option?.value == item.value
                        )
                          ? icon
                          : iconNoneCheck
                      }
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className={styles.Option}>{item.label}</div>
              </div>
            );
          })}
      </div>
    );
  };

  //Function to hook
  useEffect(() => {
    CheckboxProps.value &&
      setCheck(
        CheckboxProps.value
          ? CheckboxProps.value.map((option: options) =>
              CheckboxProps.options?.find(
                (el: options) => el.value == option.value
              )
            )
          : []
      );
  }, [CheckboxProps.value]);

  //main render
  return (
    <div className={styles.CheckBox}>
      {renderOptions(CheckboxProps.options)}
    </div>
  );
};

Checkbox.defaultProps = {
  type: "checkbox",
  direction: "horizontal",
};
