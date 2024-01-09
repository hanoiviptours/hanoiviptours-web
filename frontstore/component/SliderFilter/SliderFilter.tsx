import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import styles from "./SliderFilter.module.scss";

export type SliderFilterProps = {
  onChange?: (value: any) => void;
  onClick?: () => void;
  value?: number | number[];
  className?: string;
  thumpClassName?: string;
  defaultValue?: number | number[];
  min?: number;
  max?: number;
  step?: number;
  distance?: number; //distance between 2 thumps
  pearling?: boolean; //pushing another thump or not
  thumps?: number;
  highlightSelection?: "minToEnd" | "startToEnd";
};
const handleThump = (thump: number, min: number, max: number) => {
  var distance: number = Math.floor((max - min) / thump);
  var value: number[] = [];
  for (var i = min; i < max; i = i + distance) {
    value = [...value, i];
    if (value.length == thump) {
      break;
    }
  }
  return value;
};

const SliderFilter = (SliderFilterProps: SliderFilterProps) => {
  //define constants
  const [sliderValue, setSliderValue] = useState<any>(
    SliderFilterProps.value ||
      handleThump(
        SliderFilterProps.thumps ? SliderFilterProps.thumps : 1,
        SliderFilterProps.min ? SliderFilterProps.min : 0,
        SliderFilterProps.max ? SliderFilterProps.max : 100
      )
  );

  //functions to create

  //function handle actions
  const handleChange = (value: any) => {
    setSliderValue(value);
    SliderFilterProps.onChange && SliderFilterProps.onChange(value);
  };
  //function to render
  useEffect(() => {
    SliderFilterProps.value && setSliderValue(SliderFilterProps.value);
  }, [SliderFilterProps.value]);
  //main render
  return (
    <div className={["row align-center justify-center",styles.outSlider, SliderFilterProps.className].join(" ")}>
      <ReactSlider
        min={SliderFilterProps.min}
        max={SliderFilterProps.max}
        onSliderClick={SliderFilterProps.onClick}
        className={[styles["horizontal-slider"]].join(" ")}
        thumbClassName={[
          styles["example-thumb"],
          SliderFilterProps.thumpClassName,
        ].join(" ")}
        trackClassName={[`${SliderFilterProps.highlightSelection}`].join(" ")}
        value={
          Array.isArray(sliderValue)
            ? sliderValue.sort((a: any, b: any) => a - b)
            : sliderValue
        }
        minDistance={SliderFilterProps.distance}
        onChange={(value) => handleChange(value)}
        step={SliderFilterProps.step}
        pearling={SliderFilterProps.pearling}
      />
    </div>
  );
};

export { SliderFilter };
SliderFilter.defaultProps = {
  min: 0,
  max: 100,
  distance: 1,
  thumps: 1,
  highlightSelection: "startToEnd",
};
