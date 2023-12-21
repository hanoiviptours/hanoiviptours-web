import { ReactNode, useEffect, useState } from "react";
import styles from "./Authen.module.scss";
import { Button } from "..";

export type AuthenProps = {
  className?: string;
};

export const Authen = (AuthenProps: AuthenProps) => {
  //Define constant
  const [props, setProps] = useState(AuthenProps);

  const link = "login"

  //Function hook
  useEffect(() => {
    setProps(AuthenProps);
  }, [AuthenProps]);

  //Function to render

  //Main render
  return (
    <div className={[styles.Authen, props.className].join(" ")}>
      <div
        className={["row justify-center align-center", styles.hintLogin].join(
          " "
        )}
      >
        Đăng nhâp để xem thêm
      </div>
      <div
        className={[
          "row justify-center align-center",
          styles.outButtonLogin,
        ].join(" ")}
      >
        <Button
          className={[styles.buttonLogin].join(" ")}
          children={
            <span className={[styles.childrenButton].join(" ")}>Đăng nhập</span>
          }
          color={"fill"}
          link={link}
        />
      </div>
      <div
        className={[
          "row justify-center align-center",
          styles.hintRegister,
        ].join(" ")}
      >
        <span className={[styles.hintRegister1].join(" ")}>
          Bạn chưa có tài khoản?{" "}
        </span>
        <a href={link}>
          <span className={[styles.hintRegister2].join(" ")}>
            Đăng kí tại đây.
          </span>
        </a>
      </div>
    </div>
  );
};
Authen.defaultProps = {
  borderRadius: "round",
  type: "Authen",
  color: "outline",
};
