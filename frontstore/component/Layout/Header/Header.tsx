import { useState, useEffect, Key } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Logo } from "../../../public/images";

interface navigation {
  title: string;
  link?: string;
  children?: navigation[];
}
export type HeaderProps = {
  navigation: navigation[];
  onClickDrawer?: () => void;
  className?: string;
  style?: any;
};

const Header = (HeaderProps: HeaderProps) => {
  //Define constant
  const [props, setProps] = useState(HeaderProps);
  const [size, setSize] = useState("large");

  const handleOpen = () => {
    props.onClickDrawer && props.onClickDrawer();
  };

  //Funtion to create
  //Funtion to render
  const renderDraw = () => {
    return (
      <div
        className={["col-1 align-center justify-center", styles.WarpDraw].join(
          " "
        )}
      >
        <i
          className={["bi bi-list", styles.iconDraw].join(" ")}
          onClick={() => {
            handleOpen();
          }}
        />
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <div className={["col-1 row align-center", styles.WarpImage].join(" ")}>
        <a href="/">
          <Image src={Logo} alt="" priority />
        </a>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className={["container", styles.Header_large].join(" ")}>
        <div
          className={[
            "row-none-warp align-center justify-center",
            styles.LargeBody,
          ].join(" ")}
        >
          {/* //Draw */}
          {renderDraw()}
          {/* Logo */}
          {renderLogo()}
          {/* Navigation */}
          <div className={["col-7 row-none-warp", styles.Navigation].join(" ")}>
            {props.navigation &&
              props.navigation.length > 0 &&
              props.navigation.map((item: navigation, key: Key) => {
                return (
                  <div className={[styles.WarpLink].join(" ")} key={key}>
                    <a href={item.link} className={styles.Parent}>
                      {item.title.toLocaleUpperCase()}
                      {item.children && item.children.length > 0 && (
                        <span className={styles.IconDown}>
                          <i className="bi bi-chevron-down"></i>
                        </span>
                      )}
                    </a>
                    {item.children && item.children.length > 0 && (
                      <div className={styles.Children}>
                        {item.children.map((el: navigation, reKey: Key) => {
                          return (
                            <div className={styles.LinkChildren} key={reKey}>
                              <a href={item.link}>{el.title}</a>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          {/* SignIn/SignUp */}
          <div className={["col-3"].join(" ")}>{/* <Bar /> */}</div>
        </div>
      </div>
    );
  };
  //Funtion to hook
  useEffect(() => {
    setProps(HeaderProps);
  }, [HeaderProps]);
  //Main render
  return (
    <div
      className={[styles.Header, props.className].join(" ")}
      style={props.style}
    >
      {renderHeader()}
    </div>
  );
};

export default Header;
