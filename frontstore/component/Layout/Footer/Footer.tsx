import { useState, useEffect, Key } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import { Logo } from "../../../public/images";
import { useRouter } from "next/router";
import { render } from "react-dom";
import { useWidth } from "../../GlobalFunc";

const Footer = (FooterProps: FooterProps) => {
  //Define constant
  const [props, setProps] = useState(FooterProps);
  const router = useRouter();
  const filterLink = router.asPath.replace("/", "");

  //ChildrenContent

  const renderAbUs = () => {
    return (
      <>
        <div className={["row", styles.titlebAbUs].join(" ")}>
          Chuyện của Huyền
        </div>
        <div className={[styles.contentAbUs].join(" ")}>
          Ký ức tuổi thơ của Huyền khắc sâu với những miếng thịt trâu gác bếp
          trên bếp lửa dậy mùi thơm của lửa, được làm bằng các loại gia vị tự
          nhiên, hái từ cây rừng giữa lòng Bản Tây Bắc. Những cọng rau xanh
          mướt, mang đến vị ngọt tự nhiên, đậm đà và khó quên. Thế hệ từ bà, mẹ
          cho tới con cháu ở Tây Bắc, tất cả đều vay mượn nguồn nước từ dòng
          suối chảy róc rách quanh năm. Máy lọc nước, máy lọc không khí đối với
          họ chỉ là những thứ xa lạ. Bởi vì môi trường tự nhiên xung quanh họ
          chính là món quà vô giá từ thiên nhiên. Họ đang tận hưởng cuộc sống
          xanh, sạch và hòa mình với tự nhiên một cách tuyệt vời nhất.
        </div>
      </>
    );
  };

  const renderPolicy = () => {
    const option = [
      { name: "Chính sách bảo mật", link: "policy" },
      { name: "Chính sách thanh toán", link: "policy" },
      { name: "Chính sách vận chuyển", link: "policy" },
      { name: "Chính sách đổi trả", link: "policy" },
      { name: "Chính sách bán hàng", link: "policy" },
    ];
    return (
      <>
        {option.map((item: any, key: Key) => {
          return (
            <a href={item.link} key={key}>
              <div className={["row", styles.optionPolicy].join(" ")}>
                {item.name}
              </div>
            </a>
          );
        })}
      </>
    );
  };

  const renderInfor = () => {
    const option = [
      {
        icon: "bi bi-geo-alt-fill",
        name: "Số 9 đường Thụy Phương, Phường Đức Thắng, Quận Bắc Từ Liêm, Hà Nội",
        link: "#",
      },
      { icon: "bi bi-telephone-fill", name: "0828783333", link: "#" },
      { icon: "bi bi-globe-asia-australia", name: "www.langfood", link: "#" },
    ];
    return (
      <>
        {option.map((item: any, key: Key) => {
          return (
            <a
              className={["row", styles.optionInfor].join(" ")}
              href={item.link}
              key={key}
            >
              <i className={[item.icon, styles.iconInfor].join(" ")} />
              <span
                className={["row align-center", styles.textInfor].join(" ")}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </>
    );
  };
  //Funtion to create

  const Content = [
    {
      col: "col-5 col-md-12",
      Title: "Về chúng tôi",
      content: renderAbUs(),
    },
    {
      col: "col-3 col-md-12",
      Title: "Chính sách",
      content: renderPolicy(),
    },
    {
      col: "col-4 col-md-12",
      Title: "Thông tin liên hệ",
      content: renderInfor(),
    },
  ];

  //Funtion to render
  const renderContent = () => {
    return (
      <>
        {Content.map((item: any, key: Key) => {
          return (
            <div className={[item.col, styles.Content].join(" ")} key={key}>
              <div className={[styles.Title].join(" ")}>{item.Title}</div>
              <div className={[styles.ChildrenContent].join(" ")}>
                {item.content}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const renderSocialMedia = () => {
    const optionMedia = [
      {
        image:
          "https://png.pngtree.com/png-clipart/20181008/ourmid/pngtree-facebook-logo-icon-design-vector-free-logo-design-template-png-image_3652951.png",
        link: "https://www.facebook.com/LangFood.vn",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmahyXIsWtnQzCtLGjPyXgCT45dMh7TKMhA&usqp=CAU",
        link: "https://www.tiktok.com/@langfood",
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/previews/024/555/081/original/shopee-logo-transparent-free-png.png",
        link: "https://shopee.vn/langfood_official",
      },
    ];
    return (
      <>
        <div
          className={[
            "col-4 col-lg-2 col-md-8 row align-center",
            styles.logo,
          ].join(" ")}
        >
          <a href="/">
            <Image src={Logo} alt="" priority />
          </a>
          <div className={[styles.contentLogo].join(" ")}>
            <div className={[styles.titleLogo].join(" ")}>Làng Food</div>
            <div className={[styles.contentLogo].join(" ")}>
              Thương hiệu ẩm thực độc quyền
            </div>
          </div>
        </div>

        <div
          className={["col-8 col-lg-10 col-md-4 row", styles.media].join(" ")}
        >
          {optionMedia.map((item: any, key: Key) => {
            return (
              <a
                href={item.link}
                className={[
                  "col-4 col-md-12 col-sm-4 row justify-end",
                  styles.outLinkMedia,
                ].join(" ")}
                key={key}
              >
                <div
                  className={["justify-center", styles.outImageMedia].join(" ")}
                >
                  <img
                    className={styles.imgMedia}
                    src={item.image}
                    alt="Not Found"
                  />
                </div>
                <div
                  className={[
                    "justify-center align-center",
                    styles.textLink,
                  ].join(" ")}
                >
                  {item.link}
                </div>
              </a>
            );
          })}
        </div>
      </>
    );
  };

  //Funtion to hook
  useEffect(() => {
    setProps(FooterProps);
  }, [FooterProps]);
  //Main render
  return (
    <div
      className={[styles.Footer, props.className].join(" ")}
      style={{
        paddingBottom:
          filterLink == "product" && useWidth() < 1201 ? "100px" : "",
      }}
    >
      <div className={["container", styles.inFooter].join(" ")}>
        <div className={["row", styles.outContent].join(" ")}>
          {renderContent()}
        </div>
        <div className={["row align-center", styles.socialMedia].join(" ")}>
          {renderSocialMedia()}
        </div>
      </div>
    </div>
  );
};
export type FooterProps = {
  className?: string;
};
export default Footer;
