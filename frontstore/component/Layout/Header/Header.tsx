import { useState, useEffect, Key, useRef } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Logo } from "../../../public/images";
import { Button } from "../../Button";
import { useAuthContext } from "../../Provider/Provider";

interface navigation {
  title: string;
  link?: string;
  children?: any;
}
export type HeaderProps = {
  navigation: navigation[];
  className?: string;
  onClickDrawer?: () => void;
  openNavi?: () => void;
  style?: any;
};

const Header = (HeaderProps: HeaderProps) => {
  //Define constant
  const [props, setProps] = useState(HeaderProps);
  const Authen: boolean = false;
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false);
  const { handleOpenModal, changeTypeModal } = useAuthContext();

  //Funtion to action

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

  const renderSignIn = () => {
    return (
      <div className={["col-3", styles.SignIn].join(" ")}>
        <div
          className={["row align-center justify-end", styles.inSignIn].join(
            " "
          )}
        >
          <div className={[styles.linkSignUp].join(" ")}>Đăng ký</div>
          <Button
            className={[styles.buttonSignIn].join(" ")}
            children={"Đăng nhập"}
            color="fill"
            onClick={() => {
              handleOpenModal();
              changeTypeModal("signIn");
            }}
          />
        </div>
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
                  <div
                    className={[styles.WarpLink].join(" ")}
                    key={key}
                    onClick={() => {
                      item.children &&
                        item.children == "KeyDown" &&
                        props.openNavi &&
                        props.openNavi();
                    }}
                  >
                    <a href={item.link} className={styles.Parent}>
                      {item.title}
                      {item.children && item.children == "KeyDown" && (
                        <span className={styles.IconDown}>
                          <i className="bi bi-caret-down-fill"></i>
                        </span>
                      )}
                    </a>
                  </div>
                );
              })}
          </div>
          {/* SignIn/SignUp */}
          {renderSignIn()}
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
