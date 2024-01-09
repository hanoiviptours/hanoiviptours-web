import React, { Key, useEffect, useState } from "react";
import styles from "./FilterCommit.module.scss";
import { Button, Filter } from "../../../component";
import { InputNavi } from "../../../component/InputNavi";

export type FilterCommitProps = {
  className?: string;
  style?: any;
  onChange?: (value: any) => void;
};

export const FilterCommit = (FilterCommitProps: FilterCommitProps) => {
  const fakeData: any = [
    {
      nameField: "Giá phòng",
      title: "Price",
      type: "ranger",
      minLength: 0,
      maxLength: 30000000,
      defaultValue: [0, 30000000],
    },
    {
      nameField: "Xác nhận đặt phòng",
      title: "apceptRoom",
      type: "checkbox",
      options: [
        { label: "Xác nhận ngay", value: "Xác nhận ngay" },
        { label: "Xác nhận trong 2 giờ", value: "Xác nhận trong 2 giờ" },
      ],
    },
    {
      nameField: "Hạng sao",
      title: "voteStar",
      type: "voteStar",
    },
    {
      nameField: "Khu vực",
      title: "location",
      type: "checkbox",
      options: [
        { label: "Hà Nội", value: "Hà Nội" },
        { label: "Hồ Chí Minh", value: "Hồ Chí Minh" },
        { label: "Cần Thơ", value: "Cần Thơ" },
        { label: "Kiên Giang", value: "Kiên Giang" },
        { label: "Khánh Hòa", value: "Khánh Hòa" },
      ],
      state: false,
    },
    {
      nameField: "Hình thức",
      title: "form",
      type: "checkbox",
      options: [
        { label: "Khách sạn", value: "Khách sạn" },
        { label: "Khách sạn căn hộ", value: "Khách sạn căn hộ" },
        { label: "Khu nghỉ dưỡng", value: "Khu nghỉ dưỡng" },
      ],
    },
    {
      nameField: "Tiện ích nổi bật",
      title: "utilities",
      type: "checkbox",
      options: [
        { label: "Đưa/đón khách sân bay", value: 1 },
        { label: "Đưa/đón khách bến phà", value: 2 },
        { label: "Đưa/đón khách ga tàu", value: 3 },
      ],
    },
  ];

  //Main render
  return (
    <div
      className={["row", styles.outFilter, FilterCommitProps.className].join(
        " "
      )}
    >
      <Filter
        size={"big"}
        valuesFormOnChange={(e: any) => {
          FilterCommitProps.onChange && FilterCommitProps.onChange(e);
        }}
        data={fakeData}
      />
    </div>
  );
};
