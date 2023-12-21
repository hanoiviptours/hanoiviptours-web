import React, { Key, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { CartAtom, LoadingAtom } from "../../atom";
import { useRecoilState, useSetRecoilState } from "recoil";

const convertToArr = (variant: string) => {
  return eval(variant);
};

const Home = () => {
  const [data1, setData1] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const setLoadingState = useSetRecoilState(LoadingAtom);
  const [quick, setQuick] = useState<any>();

  const [cart, setCart] = useRecoilState<any>(CartAtom);


  useEffect(() => {
  }, []);


  return (
    <div className={[styles.Home].join(" ")}>
      
    </div>
  );
};
export default Home;
