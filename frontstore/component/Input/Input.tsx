import React, { useState, useEffect, CSSProperties } from 'react';
import styles from './Input.module.scss';
import { Button } from '..';
import { type } from 'os';

export type InputProps = {
  value?: string;
  defaultValue?: any;
  onPressEnter?: (value: string) => void;
  onClick?: () => void;
  onChange?: ({ value, name }: any) => void;
  className?: string;
  classNameInput?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'file';
  shape?: 'standard' | 'default';
  disabled?: boolean;
  offBorder?: boolean;
  clear?: boolean;
  style?: CSSProperties;
  eyePassword?: boolean;
  iconClassName?: string;
  TextClassName?: string;
  key?: any;
  name?: string;
};

const Input = (InputProps: InputProps) => {
  //define constants
  const [props, setProps] = useState(InputProps);
  const [visible, setVisible] = useState(true);
  const [valueInput, setValueInput] = useState<string>(
    props.defaultValue ? props.defaultValue : props.value ? props.value : ''
  );
  //function to create

  //function to handle actions
  const handlerKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      props.onPressEnter && props.onPressEnter(valueInput);
    }
  };
  const handleChange = (e: any) => {
    setValueInput(e.target.value);
    props.onChange &&
      props.onChange({ name: e.target.name, value: e.target.value });
  };

  const handleVisible = () => {
    setVisible(!visible);
  };
  //function to hook
  useEffect(() => {
    setProps(InputProps);
  }, [InputProps]);

  useEffect(() => {
    props.value && setValueInput(props.value);
  }, [props.value]);
  //function to render
  const renderTextArea = () => {
    return (
      <textarea
        className={[styles.Text, props.classNameInput].join(' ')}
        value={valueInput}
        onChange={handleChange}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    );
  };
  const renderText = (type: string) => {
    return (
      <input
        type={type}
        name={props.name}
        className={[
          styles.Text,
          props.classNameInput,
          styles[`Text_${props.type}`],
          props.TextClassName,
        ].join(' ')}
        placeholder={props.placeholder}
        value={valueInput}
        onChange={handleChange}
        onKeyUp={(e) => {
          handlerKeyUp(e);
        }}
        disabled={props.disabled}
      />
    );
  };

  const renderInput = (type: any) => {
    switch (type) {
      case 'textarea':
        return renderTextArea();
      default:
        return renderText(type);
    }
  };
  //main render
  return (
    <div
      className={[
        'row align-center',
        styles.Input,
        props.className,
        props.shape && styles[`Shape_${props.shape}`],
      ].join(' ')}
      onClick={props.onClick}
      style={
        props.offBorder
          ? {
              border: 'none',
              padding: '0px',
              boxShadow: 'none',
              width: '100%',
              ...props.style,
            }
          : {
              width: '100%',
              ...props.style,
            }
      }
      key={props.key}
    >
      {props.prefix && (
        <i
          className={[props.prefix, styles.Icon, props.iconClassName].join(' ')}
        />
      )}
      {renderInput(
        props.type == 'password' ? (visible ? props.type : 'text') : props.type
      )}
      {props.type == 'password' && props.eyePassword && (
        <i
          className={[
            visible ? 'bi bi-eye-slash' : 'fbi bi-eye',
            styles.Clear,
          ].join(' ')}
          onClick={handleVisible}
        />
      )}
      {props.suffix && (
        <i
          className={[props.suffix, styles.Icon, props.iconClassName].join(' ')}
        />
      )}
    </div>
  );
};

export { Input };
Input.defaultProps = {
  shape: 'default',
  disabled: false,
  onChange: () => null,
};
