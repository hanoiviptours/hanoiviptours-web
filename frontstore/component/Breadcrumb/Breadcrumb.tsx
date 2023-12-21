import React, { CSSProperties, Key, ReactNode } from "react";
import styles from "./Breadcrumb.module.scss";

interface data {
  title: string;
  link?: string;
}

export type BreadcrumbProps = {
  className?: string;
  style?: CSSProperties;
  //   home: string;
  //   homepageLink: string;
  title?: string;
  data?: data[];
};

const Breadcrumb = (BreadcrumbProps: BreadcrumbProps) => {
  return (
    <span
      className={["row", styles.Breadcrumb, BreadcrumbProps.className].join(
        " "
      )}
    >
      {BreadcrumbProps.data &&
        BreadcrumbProps.data.length > 0 &&
        BreadcrumbProps.data.map((item: data, key: number) => {
          return (
            <div key={key}>
              <a href={item.link} className={styles.Link}>
                {item.title}
              </a>
              {BreadcrumbProps.data?.length != key + 1 && (
                <span className={[styles.Divider].join(" ")}>»</span>
              )}
            </div>
          );
        })}
    </span>
  );
};

export { Breadcrumb };
