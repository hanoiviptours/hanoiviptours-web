import { ReactNode, useEffect, useState, Key } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import styles from "./Layout.module.scss";
import { Dropdown, SideDrawer } from "..";

type LayoutProps = {
  children: ReactNode;
};
const Layout = (LayoutProps: LayoutProps) => {
  const [props, setProps] = useState(LayoutProps);

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const filterLink = router.asPath.replace("/", "");

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
      children: [
        { title: "Đặc sản Tây Bắc", link: "1" },
        { title: "Đặc sản Tây Bắc", link: "2" },
        { title: "Đặc sản Tây Bắc", link: "3" },
        { title: "Đặc sản Tây Bắc", link: "4" },
      ],
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
              {item.children ? (
                <Dropdown
                  className={styles.Dropdown}
                  classNameTitle={styles.Title}
                  title={item.title.toLocaleUpperCase()}
                  classNameChildren={styles.children}
                  children={
                    <>
                      {item.children.map((el: any, reKey: Key) => {
                        return (
                          <div
                            className={["row", styles.optionChildren].join(" ")}
                            key={reKey}
                          >
                            <a href={el.link}>{el.title}</a>
                          </div>
                        );
                      })}
                    </>
                  }
                  mode={"drop"}
                />
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
      style={{
        overflow: "hidden",
        backgroundColor:
          filterLink == "home" || filterLink == "" ? "#ffedd9" : "",
      }}
    >
      {
        <Header
          navigation={navigation}
          onClickDrawer={() => {
            handleOpen();
          }}
        />
      }
      {
        <Header
          className={[
            styles.HeaderScroll,
            valueScroll > 148 ? styles.openHeader : styles.clossHeader,
          ].join(" ")}
          navigation={navigation}
          onClickDrawer={() => {
            handleOpen();
          }}
          style={
            open
              ? {
                  zIndex: "1",
                  backgroundColor:
                    filterLink == "home" || filterLink == "" ? "white" : "",
                }
              : {
                  zIndex: "2",
                  backgroundColor:
                    filterLink == "home" || filterLink == "" ? "white" : "",
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
