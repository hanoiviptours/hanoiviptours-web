import { ReactNode, useEffect, useState, Key } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import styles from "./Layout.module.scss";
import { Dropdown, SideDrawer } from "..";
import Navigation from "../Navigation/Navigation";

type LayoutProps = {
  children: ReactNode;
};
const Layout = (LayoutProps: LayoutProps) => {
  const [props, setProps] = useState(LayoutProps);

  const [open, setOpen] = useState(false);

  const [valueScroll, setValueScroll] = useState(0);

  //function to action
  const printScrollY = () => {
    const currentScrollY = window.scrollY;
    setValueScroll(currentScrollY);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", printScrollY);
  }

  const navigation = [
    { title: "Trang Chủ", link: "home" },
    { title: "Về Chúng Tôi", link: "#" },
    {
      title: "Sản phẩm",
      children: "KeyDown",
    },
    { title: "Tin Tức", link: "#" },
    { title: "Liên Hệ", link: "#" },
  ];

  useEffect(() => {
    setProps(LayoutProps);
  }, [LayoutProps]);

  //Function to render

  const renderChildrenDrawer = () => {
    return (
      <div className={[styles.ChildrenDrawer].join(" ")}>
        {navigation.map((item: any, key: Key) => {
          return (
            <div
              className={["row", styles.rowChildrenDrawer].join(" ")}
              key={key}
            >
              {item.children&&item.children=="KeyD" ? (
                <div onClick={()=>{handleOpenNavi()}}>{item.title.toLocaleUpperCase()}</div>
              ) : (
                item.link && (
                  <a href={item.link}>{item.title.toLocaleUpperCase()}</a>
                )
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={[styles.Layout].join(" ")}
    >
      {
        <Header
          className={[
            styles.HeaderScroll,
            styles.openHeader,
          ].join(" ")}
          navigation={navigation}
          onClickDrawer={() => {
            handleOpen();
          }}
          style={
            open
              ? {
                  zIndex: "1",
                }
              : {
                  zIndex: "2",
                }
          }
        />
      }

      <div>{props.children}</div>
      <Footer />
      <SideDrawer
        className={[styles.SideDrawer].join(" ")}
        isOpen={open}
        onClose={() => {
          handleOpen();
        }}
      >
        {renderChildrenDrawer()}
      </SideDrawer>
    </div>
  );
};

export default Layout;
