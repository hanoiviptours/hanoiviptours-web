import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import styles from './Login.module.scss';
import { Input } from '../../Input';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { Button } from '../../Button';
import { useRecoilCallback } from 'recoil';
import { loginSelector } from '../../../atom/login/selector';
import { Icon } from '../../Icon';

export type LoginProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  openModalRegister: () => void;
  openModalForgotPassword: () => void;
};

const defaultProps = {
  isOpen: false,
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '7px',
    transition: 'opacity 2000ms ease-in-out',
    width: '640px',
    height: '450px',
  },
  overlay: { zIndex: 5 },
};

const Login = ({
  isOpen,
  onCloseModal,
  openModalRegister,
  openModalForgotPassword,
}: LoginProps) => {
  const modalContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState<{
    userName: string;
    password: string;
  }>({ userName: '', password: '' });

  //example

  const login = useRecoilCallback((callbackHelpers) => async () => {
    return await callbackHelpers.snapshot.getPromise(
      loginSelector({ url: 'https://api.example.com/post', data: inputValue })
    );
  });

  const handleModalOpened = () => {
    if (modalContainerRef.current) disableBodyScroll(modalContainerRef.current);
  };

  const handleModalClosed = () => {
    clearAllBodyScrollLocks();
  };

  const handleOnChange = ({ value, name }: any) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmitForm = () => {
    login();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onAfterOpen={handleModalOpened}
      onAfterClose={handleModalClosed}
    >
      <div className={styles.FormsLogin} ref={modalContainerRef}>
        <div className={['row justify-end', styles.exitIcon].join(' ')}>
          <Icon
            icon={'faX'}
            style={{ cursor: 'pointer' }}
            onClick={handleModalClosed}
          />
        </div>
        <div className={styles.Forms}>
          <p className={styles.Title}>Đăng nhập HN Partner qua</p>
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>
              Số điện thoại
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                name="userName"
                className={styles.Input}
                placeholder="Ví dụ: 0901234567"
                type="text"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>Mật khẩu</div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                className={styles.Input}
                placeholder="******"
                name="password"
                type="password"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={styles.Policy}>
            <p className={styles.Text}>
              Khi đăng ký, tôi đồng ý với các{' '}
              <a href="#" className={styles.Link}>
                Điều khoản sử dụng
              </a>{' '}
              và{' '}
              <a href="#" className={styles.Link}>
                Chính sách bảo mật thông tin
              </a>{' '}
              của Partner.
            </p>
          </div>
          <div className={styles.Forgot}>
            <a
              href="#"
              className={styles.Link}
              onClick={openModalForgotPassword}
            >
              Quên mật khẩu
            </a>
          </div>
          <div className={styles.Action}>
            <Button
              borderRadius={'none'}
              color="fill"
              className={[styles.button].join(' ')}
              type="submit"
              colorText="#ffffff"
              onClick={handleSubmitForm}
            >
              Đăng nhập
            </Button>
          </div>
          <div className={styles.Register}>
            <p className={styles.Text}>
              Bạn chưa có tài khoản?{' '}
              <a href="#" className={styles.Label} onClick={openModalRegister}>
                Đăng ký
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

Login.defaultProps = defaultProps;

export default Login;
