import { useState, useEffect, Key, useRef } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { Logo } from '../../../public/images';
import { Button } from '../../Button';
import Login from '../../Authen/Login/Login';
import Register from '../../Authen/Register/Register';
import ForgotPassword from '../../Authen/ForgotPassword/ForgotPassword';
import useBoolean from '../../../hooks/useBoolean';

interface navigation {
  title: string;
  link?: string;
  children?: any;
}
export type HeaderProps = {
  navigation: navigation[];
  className?: string;
  onClickDrawer?: () => void;
  openNavi?: () => void;
  style?: any;
};

const Header = (HeaderProps: HeaderProps) => {
  //Define constant
  const [props, setProps] = useState(HeaderProps);
  const {
    state: isModalLogin,
    setToTrue: setToTrueLogin,
    setToFalse: setToFalseLogin,
  } = useBoolean(false);
  const {
    state: isModalRegister,
    setToTrue: setToTrueRegister,
    setToFalse: setToFalseRegister,
  } = useBoolean(false);
  const {
    state: isModalForgotPassword,
    setToTrue: setToTrueForgotPassword,
    setToFalse: setToFalseForgotPassword,
  } = useBoolean(false);

  const Authen: boolean = false;

  const handleOpen = () => {
    props.onClickDrawer && props.onClickDrawer();
  };

  const handleShowModalLogin = () => {
    setToTrueLogin();
    setToFalseRegister();
  };

  const handleShowModalRegister = () => {
    setToTrueRegister();
    setToFalseLogin();
    setToFalseForgotPassword();
  };

  const handleShowModalForgotPassword = () => {
    setToTrueForgotPassword();
    setToFalseLogin();
  };

  const renderDraw = () => {
    return (
      <div
        className={['col-1 align-center justify-center', styles.WarpDraw].join(
          ' '
        )}
      >
        <i
          className={['bi bi-list', styles.iconDraw].join(' ')}
          onClick={() => {
            handleOpen();
          }}
        />
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <div className={['col-1 row align-center', styles.WarpImage].join(' ')}>
        <a href="/">
          <Image src={Logo} alt="" priority />
        </a>
      </div>
    );
  };

  const renderSignIn = () => {
    return (
      <div className={['col-3', styles.SignIn].join(' ')}>
        <div
          className={['row align-center justify-end', styles.inSignIn].join(
            ' '
          )}
        >
          <div
            className={[styles.linkSignUp].join(' ')}
            onClick={setToTrueRegister}
          >
            Đăng ký
          </div>
          <Button
            className={[styles.buttonSignIn].join(' ')}
            children={'Đăng nhập'}
            color="fill"
            onClick={setToTrueLogin}
          />
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className={['container', styles.Header_large].join(' ')}>
        <div
          className={[
            'row-none-warp align-center justify-center',
            styles.LargeBody,
          ].join(' ')}
        >
          {/* //Draw */}
          {renderDraw()}
          {/* Logo */}
          {renderLogo()}
          {/* Navigation */}
          <div className={['col-7 row-none-warp', styles.Navigation].join(' ')}>
            {props.navigation &&
              props.navigation.length > 0 &&
              props.navigation.map((item: navigation, key: Key) => {
                return (
                  <div
                    className={[styles.WarpLink].join(' ')}
                    key={key}
                    onClick={() => {
                      item.children &&
                        item.children == 'KeyDown' &&
                        props.openNavi &&
                        props.openNavi();
                    }}
                  >
                    <a href={item.link} className={styles.Parent}>
                      {item.title}
                      {item.children && item.children == 'KeyDown' && (
                        <span className={styles.IconDown}>
                          <i className="bi bi-caret-down-fill"></i>
                        </span>
                      )}
                    </a>
                  </div>
                );
              })}
          </div>
          {/* SignIn/SignUp */}
          {renderSignIn()}
        </div>
      </div>
    );
  };
  //Funtion to hook
  useEffect(() => {
    setProps(HeaderProps);
  }, [HeaderProps]);
  //Main render
  return (
    <div
      className={[styles.Header, props.className].join(' ')}
      style={props.style}
    >
      {renderHeader()}
      <Login
        isOpen={isModalLogin}
        onCloseModal={setToFalseLogin}
        openModalRegister={handleShowModalRegister}
        openModalForgotPassword={handleShowModalForgotPassword}
      />
      <Register
        isOpen={isModalRegister}
        onCloseModal={setToFalseRegister}
        openModalLogin={handleShowModalLogin}
      />
      <ForgotPassword
        isOpen={isModalForgotPassword}
        onCloseModal={setToFalseForgotPassword}
        openModalRegister={handleShowModalRegister}
      />
    </div>
  );
};

export default Header;
