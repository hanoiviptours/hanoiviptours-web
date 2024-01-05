import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import styles from './ForgotPassword.module.scss';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { Input } from '../../Input';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

export type LoginProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  openModalRegister: () => void;
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
    width: '500px',
    height: '400px',
  },
  overlay: { zIndex: 5 },
};

const ForgotPassword = ({
  isOpen,
  onCloseModal,
  openModalRegister,
}: LoginProps) => {
  const modalContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState<{
    phone: string;
  }>({ phone: '' });

  //example

  const handleModalOpened = () => {
    if (modalContainerRef.current) disableBodyScroll(modalContainerRef.current);
  };

  const handleModalClosed = () => {
    clearAllBodyScrollLocks();
    onCloseModal();
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
        <div className={['row justify-end', styles.exitIcon].join(' ')}>
          <Icon
            icon={'faX'}
            style={{ cursor: 'pointer' }}
            onClick={handleModalClosed}
          />
        </div>
        <div className={styles.Forms}>
          <p className={styles.Title}>Quên mật khẩu</p>
          <p className={styles.subTitle}>
            Thay đổi mật khẩu bằng số điện thoại
          </p>
          <p className={styles.Description}>
            Vui lòng nhập số điện thoại khách hàng đã đăng kí. Chúng tôi sẽ gửi
            mã OTP tới điện thoại của khách hàng để tạo mật khẩu mới
          </p>
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
          <div className={styles.Action}>
            <Button
              borderRadius={'none'}
              color="fill"
              className={[styles.Button].join(' ')}
              type="submit"
              colorText="#ffffff"
            >
              Đăng ký
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

ForgotPassword.defaultProps = defaultProps;

export default ForgotPassword;
