import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import styles from './Login.module.scss';
import { Input } from '../../Input';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { Button } from '../../Button';

export type LoginProps = {
  isOpen: boolean;
  onCloseModal: () => void;
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
  overlay: { zIndex: 1000 },
};

const Login = ({ isOpen, onCloseModal }: LoginProps) => {
  const modalContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState<{
    userName: string;
    password: string;
  }>({ userName: '', password: '' });

  const handleModalOpened = () => {
    if (modalContainerRef.current) disableBodyScroll(modalContainerRef.current);
  };

  const handleModalClosed = () => {
    clearAllBodyScrollLocks();
  };

  const handleOnChange = ({ value, name }: any) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onAfterOpen={handleModalOpened}
      onAfterClose={handleModalClosed}
    >
      <div className={styles.FormsLogin} ref={modalContainerRef}>
        <div className={styles.btnClosed} onClick={onCloseModal}>
          <i className={['bi bi-x-lg', styles.closed].join(' ')}></i>
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
            <a href="#" className={styles.Link}>
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
            >
              Đăng nhập
            </Button>
          </div>
          <div className={styles.Register}>
            <p className={styles.Text}>
              Bạn chưa có tài khoản?{' '}
              <a href="#" className={styles.Label}>
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
