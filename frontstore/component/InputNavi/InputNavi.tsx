import React, {
  useState,
  useEffect,
  CSSProperties,
  ReactNode,
  Key,
  useRef,
} from "react";
import styles from "./InputNavi.module.scss";
import { Button, Dropdown, Icon } from "..";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Calendar } from "react-date-range";

interface Option {
  name: string;
  select: string[];
}

export type InputNaviProps = {
  optionInput?: Option[];
  onChange?: (value: string) => void;
  placeholder?: string;
  title?: ReactNode;
  icon?: string;
  type?: "option" | "date" | "unit";
  roundTrip?: boolean;
  style?: CSSProperties;
  className?: string;
  classNameInput?: string;
  iconClassName?: string;
  TextClassName?: string;
};

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  // Định dạng theo DD/MM/YYYY
  return `${formattedDay}/${formattedMonth}/${year}`;
};

const checkuantity = (arr: any, searchTerm: any) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === searchTerm) {
      return arr[i].quantity;
    }
  }
};

const valueUnit = [
  {
    name: "Hạng ghế",
    select: ["Phổ thông", "Thương gia", "Phổ thông đặc biệt", "Hạng nhất"],
  },
  {
    name: "Hành khách",
    selectValue: [
      { title: "Người lớn", subTitle: "> 12 tuổi" },
      { title: "Trẻ em", subTitle: "2-12 tuổi" },
      { title: "Em bé", subTitle: "< 24 tháng" },
    ],
  },
];

const InputNavi = (InputNaviProps: InputNaviProps) => {
  //define constants
  const [props, setProps] = useState(InputNaviProps);

  const [roundTrip, setRoundTrip] = useState<any>(
    props.roundTrip ? props.roundTrip : false
  );

  const [open, setOpen] = useState<boolean>(false);

  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [valueInput, setValueInput] = useState<string>(
    props.type == "date"
      ? roundTrip == true
        ? `${formatDate(selectedDateRange.startDate)} - ${formatDate(
            selectedDateRange.endDate
          )}`
        : `${formatDate(selectedDate)}`
      : ""
  );

  //test
  const [Unit, setUnit] = useState<any>({
    passenger: [
      { title: "Người lớn", quantity: 1 },
      { title: "Trẻ em", quantity: 0 },
      { title: "Em bé", quantity: 0 },
    ],
    class: [],
  });

  const updateQuantity = (title: string, increment: number) => {
    setUnit((prevValue: any) => {
      const updatedPassenger = prevValue.passenger.map((passenger: any) =>
        passenger.title === title
          ? { ...passenger, quantity: passenger.quantity + increment }
          : passenger
      );

      return { ...prevValue, passenger: updatedPassenger };
    });
  };

  //function to create

  //function to handle actions

  const handleSelect = (ranges: any, mode: string) => {
    if (mode == "range") {
      setSelectedDateRange(ranges.selection);
    } else {
      setSelectedDate(ranges);
    }

    if (props.type == "date") {
      if (mode == "range") {
        setValueInput(
          `${formatDate(ranges.selection.startDate)} - ${formatDate(
            ranges.selection.endDate
          )}`
        );
        props.onChange &&
          props.onChange(
            `${formatDate(ranges.selection.startDate)} - ${formatDate(
              ranges.selection.endDate
            )}`
          );
      } else {
        setValueInput(`${formatDate(ranges)}`);
        props.onChange && props.onChange(`${formatDate(ranges)}`);
      }
    }
  };

  const onClickClearDate = () => {
    if (roundTrip == true) {
      setSelectedDateRange({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      });
      setValueInput(`${formatDate(new Date())} - ${formatDate(new Date())}`);
      props.onChange &&
        props.onChange(`${formatDate(new Date())} - ${formatDate(new Date())}`);
    } else {
      setSelectedDate(new Date());
      setValueInput(`${formatDate(new Date())}`);
      props.onChange && props.onChange(`${formatDate(new Date())}`);
    }
  };

  const handleChange = (e: any) => {
    setValueInput(e.target.value);
    props.onChange && props.onChange(e.target.value);
  };

  //function to hook
  useEffect(() => {
    setProps(InputNaviProps);
  }, [InputNaviProps]);

  useEffect(() => {
    if (props.type == "date") {
      setValueInput(
        roundTrip == true
          ? `${formatDate(selectedDateRange.startDate)} - ${formatDate(
              selectedDateRange.endDate
            )}`
          : `${formatDate(selectedDate)}`
      );
    }
  }, [roundTrip]);

  useEffect(() => {
    if (props.type == "unit") {
      setValueInput(
        `${Unit.passenger.map((item: any) => ` ${item.quantity} ${item.title}`)}
        ${
          Unit.class.length > 0
            ? `| Ghế: ` + Unit.class.map((item: any) => ` ${item}`)
            : ``
        }`
      );
      props.onChange && props.onChange(Unit);
    }
  }, [Unit]);

  //function to render
  //render input
  const InputOption = () => {
    return (
      <input
        className={["row align-center", styles.Text, props.classNameInput].join(
          " "
        )}
        value={valueInput}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    );
  };
  const InputDate = () => {
    return (
      <div
        className={["row align-center", styles.Text, props.classNameInput].join(
          " "
        )}
        onChange={handleChange}
      >
        {valueInput}
      </div>
    );
  };
  const InputUnit = () => {
    return (
      <div
        className={["row align-center", styles.Text, props.classNameInput].join(
          " "
        )}
        onChange={handleChange}
      >
        {valueInput}
      </div>
    );
  };

  //renderChildren
  const childrenOption = () => {
    return (
      props.optionInput &&
      props.optionInput.map((item: any, key: Key) => {
        return (
          <div className={[styles.option].join(" ")} key={key}>
            <div className={["row", styles.name].join(" ")}>{item.name}</div>
            {item.select &&
              item.select.map((el: any, reKey: Key) => {
                return (
                  <div
                    className={["row", styles.select].join(" ")}
                    key={reKey}
                    onClick={() => {
                      setValueInput(el);
                      setOpen(!open);
                    }}
                  >
                    {el}
                  </div>
                );
              })}
          </div>
        );
      })
    );
  };

  const childrenDate = () => {
    return (
      <div className={[styles.outDate].join(" ")}>
        {roundTrip ? (
          <DateRangePicker
            onChange={(e: any) => {
              roundTrip == true && handleSelect(e, "range");
            }}
            moveRangeOnFirstSelection={true}
            months={2}
            ranges={[selectedDateRange]}
            direction="horizontal"
          />
        ) : (
          <Calendar
            date={selectedDate}
            onChange={(e: any) => {
              handleSelect(e, "date");
            }}
          />
        )}
        <div className={[styles.button].join(" ")}>
          <Button
            className={[styles.submit].join(" ")}
            color={"fill"}
            type={"button"}
            children={"Submit"}
            onClick={() => {
              setOpen(false);
            }}
          />
          <Button
            className={[styles.clear].join(" ")}
            color={"fill"}
            type={"button"}
            children={"Clear"}
            onClick={() => {
              onClickClearDate();
            }}
          />
        </div>
      </div>
    );
  };

  const childrenUnit = () => {
    return valueUnit.map((item: any, key: Key) => {
      return (
        <div className={[styles.option].join(" ")} key={key}>
          <div className={["row", styles.name].join(" ")}>{item.name}</div>
          {item.select &&
            item.select.map((el: any, reKey: Key) => {
              return (
                <div
                  className={["row", styles.select].join(" ")}
                  key={reKey}
                  onClick={() => {
                    if (Unit.class.includes(el)) {
                      setUnit({
                        ...Unit,
                        class: Unit.class.filter((gl: any) => gl !== el),
                      });
                    } else {
                      setUnit({
                        ...Unit,
                        class: [...Unit.class, el],
                      });
                    }
                  }}
                >
                  <input
                    className={[styles.radio].join(" ")}
                    type={"radio"}
                    checked={Unit.class.includes(el)}
                  />
                  {el}
                </div>
              );
            })}

          {item.selectValue &&
            item.selectValue.map((el: any, reKey: Key) => {
              return (
                <div
                  className={[
                    "row align-center justify-between",
                    styles.selectValue,
                  ].join(" ")}
                  key={reKey}
                >
                  <div className={[styles.selectName].join(" ")}>
                    <div className={[styles.titleSelect].join(" ")}>
                      {el.title}
                    </div>
                    <div className={[styles.subTitleSelect].join(" ")}>
                      {el.subTitle}
                    </div>
                  </div>

                  <div className={["row", styles.value].join(" ")}>
                    <Icon
                      className={[, styles.icon].join(" ")}
                      icon={"faCircleMinus"}
                      onClick={() => {
                        if (checkuantity(Unit.passenger, el.title) > 0) {
                          updateQuantity(el.title, -1);
                        }
                      }}
                    />
                    {checkuantity(Unit.passenger, el.title)}
                    <Icon
                      className={[, styles.icon].join(" ")}
                      icon={"faCirclePlus"}
                      onClick={() => {
                        if (checkuantity(Unit.passenger, el.title) < 6) {
                          updateQuantity(el.title, 1);
                        }
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      );
    });
  };

  //swtichCase

  const renderInputNavi = (type: any) => {
    switch (type) {
      case "option":
        return InputOption();
      case "date":
        return InputDate();
      case "unit":
        return InputUnit();
    }
  };

  const renderChildren = (type: any) => {
    switch (type) {
      case "option":
        return childrenOption();
      case "date":
        return childrenDate();
      case "unit":
        return childrenUnit();
    }
  };

  //main render
  return (
    <Dropdown
      className={[styles.outComponent, props.className].join(" ")}
      classNameTitle={["row align-center", styles.Title].join(" ")}
      classNameChildren={[styles.Children].join(" ")}
      title={
        <div className={[styles.outInput].join(" ")}>
          <div
            className={["row justify-between", styles.outTitleInput].join(" ")}
          >
            <div className={[styles.TitleInput].join(" ")}>{props.title}</div>
            {props.type == "date" && (
              <div
                className={[styles.Check].join(" ")}
                onClick={() => {
                  setRoundTrip(!roundTrip);
                }}
              >
                Khứ hồi{" "}
                <input
                  className={[styles.CheckBox].join(" ")}
                  type={"checkbox"}
                  checked={roundTrip}
                />
              </div>
            )}
          </div>
          <div className={["row align-center", styles.InputNavi].join(" ")}>
            {props.icon && (
              <Icon
                className={[styles.icon, props.iconClassName].join(" ")}
                icon={props.icon}
              />
            )}
            {renderInputNavi(props.type ? props.type : "option")}
          </div>
        </div>
      }
      mode="bubbleClick"
      bubblePosition="start"
      children={renderChildren(props.type)}
      onClick={(e: boolean) => {
        setOpen(e);
      }}
      state={open}
    />
  );
};

export { InputNavi };
InputNavi.defaultProps = {
  shape: "default",
  disabled: false,
};