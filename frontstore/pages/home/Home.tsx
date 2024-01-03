import React, { Key, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { SlickHeader } from "../../component";
import { BodyHome } from "../../componentScreens";

const Home = () => {
  //props component
  const ImageBanner = [
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FMZY3EDBIKR_%2Ftmp%2Fplaytemp6047801723132455615%2FmultipartBody2858985273188265786asTemporaryFile?generation=1700548739875377&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FYJWRFZHT95_%2Ftmp%2Fplaytemp8045686115915114583%2FmultipartBody1180973208259894894asTemporaryFile?generation=1702549341588397&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F5T11RA9G6P_%2Ftmp%2Fplaytemp8045686115915114583%2FmultipartBody6533778329331989289asTemporaryFile?generation=1702869024672204&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F6LL010MNY9_%2Ftmp%2Fplaytemp5537990395138644387%2FmultipartBody4791606623188355091asTemporaryFile?generation=1698717755628615&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FRLQR53KP02_%2Ftmp%2Fplaytemp6047801723132455615%2FmultipartBody7478112897507103355asTemporaryFile?generation=1700189104472333&alt=media",
      link: "#",
    },
    {
      image:
        "https://googleapis.tripi.vn/download/storage/v1/b/tourcdn/o/photos%2FTMC7JWU8X8_%2Ftmp%2Fplaytemp3020482904416490993%2FmultipartBody1623442798759456224asTemporaryFile?generation=1628050684740503&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FIDESFHBI0S_%2Ftmp%2Fplaytemp1967386972110067927%2FmultipartBody8210035283040075842asTemporaryFile?generation=1701915564645829&alt=media",
      link: "#",
    },
  ];

  //Main render
  return (
    <div className={[styles.Home].join(" ")}>
      <div
        className={["row align-center justify-center", styles.SlickHeader].join(
          " "
        )}
      >
        <SlickHeader Images={ImageBanner} />
      </div>
      <BodyHome className={[styles.bodyHome].join(" ")} />
    </div>
  );
};
export default Home;
