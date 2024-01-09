import React, { useRef, useState } from "react";
import styles from "./Login.module.scss";
import { Input } from "../../Input";
import { Button } from "../../Button";

export type LoginProps = {
  onChange?: (value: any) => void;
};

const Login = (LoginProps: LoginProps) => {
  const modalContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState<{
    userName: string;
    password: string;
  }>({ userName: "", password: "" });

  const handleOnChange = ({ value, name }: any) => {
    setInputValue({ ...inputValue, [name]: value });
    LoginProps.onChange &&
      LoginProps.onChange({ ...inputValue, [name]: value });
  };

  return (
    <div className={styles.FormsLogin} ref={modalContainerRef}>
      <div className={styles.Forms}>
        <p className={styles.Title}>Đăng nhập HN Partner qua</p>
        <div className={["col", styles.InputNavi].join(" ")}>
          <div className={["row", styles.TitleInput].join(" ")}>
            Số điện thoại
          </div>
          <div className={["row", styles.outInput].join(" ")}>
            <Input
              name="userName"
              className={styles.Input}
              placeholder="Ví dụ: 0901234567"
              type="text"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={["col", styles.InputNavi].join(" ")}>
          <div className={["row", styles.TitleInput].join(" ")}>Mật khẩu</div>
          <div className={["row", styles.outInput].join(" ")}>
            <Input
              className={styles.Input}
              placeholder="******"
              name="password"
              type="password"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className={styles.Policy}>
          <p className={styles.Text}>
            Khi đăng ký, tôi đồng ý với các{" "}
            <a href="#" className={styles.Link}>
              Điều khoản sử dụng
            </a>{" "}
            và{" "}
            <a href="#" className={styles.Link}>
              Chính sách bảo mật thông tin
            </a>{" "}
            của Partner.
          </p>
        </div>
        <div className={styles.Forgot}>
          <a href="#" className={styles.Link}>
            Quên mật khẩu
          </a>
        </div>
        <div className={styles.Action}>
          <Button
            borderRadius={"none"}
            color="fill"
            className={[styles.button].join(" ")}
            type="submit"
            colorText="#ffffff"
          >
            Đăng nhập
          </Button>
        </div>
        <div className={styles.Register}>
          <p className={styles.Text}>
            Bạn chưa có tài khoản?{" "}
            <a href="#" className={styles.Label}>
              Đăng ký
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
