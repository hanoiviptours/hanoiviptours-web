import { ReactNode, useEffect, useState, Key, useRef } from "react";
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

  const ref = useRef<any>(null);

  const [open, setOpen] = useState(false);

  const [openNavi, setOpenNavi] = useState(false);

  //function to action

  const handleOpen = () => {
    setOpen(!open);
    setOpenNavi(false);
  };

  const navigation = [
    { title: "Sản phẩm", children: "KeyDown" },
    { title: "Về chúng tôi", link: "#" },
    { title: "Trung tâm hỗ trợ", link: "#" },
    { title: "Tra cứu đại lý", link: "#" },
  ];

  useEffect(() => {
    setProps(LayoutProps);
  }, [LayoutProps]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNavi(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  //Function to render

  const renderChildrenDrawer = () => {
    return (
      <div className={[styles.ChildrenDrawer].join(" ")}>
        {navigation.map((item: any, key: Key) => {
          return (
            <div
              className={["row", styles.rowChildrenDrawer].join(" ")}
              key={key}
              onClick={() => {
                item.children && item.children == "KeyDown";
              }}
            >
              {item.children && item.children == "KeyDown" ? (
                <div>{item.title}</div>
              ) : (
                item.link && <a href={item.link}>{item.title}</a>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={[styles.Layout].join(" ")}>
      <div ref={ref} className={[styles.Header].join(" ")}>
        <Header
          className={[styles.HeaderScroll, styles.openHeader].join(" ")}
          navigation={navigation}
          openNavi={() => {
            setOpenNavi(!openNavi);
          }}
          onClickDrawer={() => {
            handleOpen();
          }}
          style={
            open
              ? {
                  zIndex: "1",
                }
              : {
                  zIndex: "4",
                }
          }
        />
        {openNavi && (
          <Navigation
            className={[styles.Navigation, openNavi && styles.openNavi].join(
              " "
            )}
          />
        )}
      </div>

      <div className={[styles.children].join(" ")}>{props.children}</div>

      <SideDrawer
        className={[styles.SideDrawer].join(" ")}
        isOpen={open}
        onClose={() => {
          handleOpen();
        }}
      >
        {renderChildrenDrawer()}
      </SideDrawer>
      <Footer />
    </div>
  );
};

export default Layout;
