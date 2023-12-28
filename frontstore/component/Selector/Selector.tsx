import { ReactNode, useEffect, useState, Key } from "react";
import styles from "./Selector.module.scss";

interface option {
  NameOption?: string;
  Children?: ReactNode;
}

export type SelectorProps = {
  options?: option[];
  onClick?: () => void;
  className?: string;
  classNameChildren?: string;
};

export const Selector = (SelectorProps: SelectorProps) => {
  //Define constant
  const [props, setProps] = useState(SelectorProps);
  const [keyOption, setKeyOption] = useState(
    props.options && props.options.length > 0 && props.options[0].NameOption
  );

  //Function hook
  useEffect(() => {
    setProps(SelectorProps);
  }, [SelectorProps]);

  //Function to action
  const handelOnclick = (key:any) => {
    setKeyOption(key);
    props.onClick && props.onClick();
  };

  //Function to render
  const renderOptions = (option: any) => {
    return (
      <>
        {option.map((item: any, key: Key) => {
          return (
            <div
              className={[
                "justify-center align-center",
                styles.selectOptions,
              ].join(" ")}
              onClick={() => {
                handelOnclick(item.NameOption);
              }}
              key={key}
              style={
                item.NameOption == keyOption
                  ? { borderBottom: "3px solid #f16a1c" }
                  : {}
              }
            >
              {key == 0 ? (
                <div className={["row", styles.NameOption].join(" ")}>
                  {item.NameOption}
                </div>
              ) : (
                <div
                  className={["row", styles.NameOption].join(" ")}
                  style={{ borderLeft: "1px solid black" }}
                >
                  {item.NameOption}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  const renderChildren = (option: any) => {
    return (
      <>{option.find((item: any) => item.NameOption == keyOption).Children}</>
    );
  };

  //Main render
  return (
    <div className={[, styles.Selector, props.className].join(" ")}>
      <div className={["row", styles.Options].join(" ")}>
        {renderOptions(props.options)}
      </div>
      <div className={[, styles.Children, props.classNameChildren].join(" ")}>
        {renderChildren(props.options)}
      </div>
    </div>
  );
};
Selector.deafultProps = {};
