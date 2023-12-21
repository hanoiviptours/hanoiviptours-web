import { useState, useEffect, Key } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWidth } from "../../GlobalFunc";

const Footer = (FooterProps: FooterProps) => {
  //Define constant
  const [props, setProps] = useState(FooterProps);
  const router = useRouter();

  //ChildrenContent

  //Funtion to create

  //Funtion to hook
  useEffect(() => {
    setProps(FooterProps);
  }, [FooterProps]);
  //Main render
  return (
    <div className={[styles.Footer, props.className].join(" ")}>
      <div
        className={["row align-center justify-center", styles.Text1].join(" ")}
      >
        Copyright © 2020 - CÔNG TY CỔ PHẦN DU LỊCH VIỆT NAM VNTRAVEL
      </div>
      <div
        className={["row align-center justify-center", styles.Text2].join(" ")}
      >
        Đăng ký kinh doanh số 0108886908 - do Sở Kế hoạch và Đầu tư thành phố Hà
        Nội cấp lần đầu ngày 04 tháng 09 năm 2019
      </div>
    </div>
  );
};
export type FooterProps = {
  className?: string;
};
export default Footer;
