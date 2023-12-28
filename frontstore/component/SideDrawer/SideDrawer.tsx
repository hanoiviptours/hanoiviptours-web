import React, { ReactNode, useState } from "react";
import styles from "./SideDrawer.module.scss";

export type SideDrawerProps = {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  width?: number;
};

const SideDrawer = (SideDrawerProps: SideDrawerProps) => {
  //define constants

  //function to create

  //function to handle actions

  //function to hook

  //function to render
  const renderCloseIcon = () => {
    return (
      <div
        className={[styles.CloseIcon].join(" ")}
        onClick={SideDrawerProps.onClose}
      >
        <i className="bi bi-x-lg"></i>
      </div>
    );
  };
  //main render
  return (
    <>
      <div
        className={[
          SideDrawerProps.isOpen ? styles.ShowSideBar : "",
          styles.SideBar,
          SideDrawerProps.className,
        ].join(" ")}
        style={{
          width: SideDrawerProps.width ? `${SideDrawerProps.width}px` : `260px`,
        }}
      >
        {renderCloseIcon()}
        {SideDrawerProps.children}
      </div>
      <div
        className={[
          styles.SidebarOverlay,
          `${SideDrawerProps.isOpen == true ? styles.Active : ""}`,
        ].join(" ")}
        onClick={SideDrawerProps.onClose}
      ></div>
    </>
  );
};

export { SideDrawer };
