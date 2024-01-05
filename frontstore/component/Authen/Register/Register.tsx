import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import styles from './Register.module.scss';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { Icon } from '../../Icon';
import IconUser from '../../../svg/icon-user.svg';
import IconUserGroup from '../../../svg/icon-user-group.svg';
import { Button } from '../../Button';

export type RegisterProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  openModalLogin: () => void;
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
    width: '510px',
  },
  overlay: { zIndex: 5 },
};

const Register = ({ isOpen, onCloseModal, openModalLogin }: RegisterProps) => {
  const modalContainerRef = useRef(null);

  const handleModalOpened = () => {
    if (modalContainerRef.current) disableBodyScroll(modalContainerRef.current);
  };

  const handleModalClosed = () => {
    onCloseModal();
    clearAllBodyScrollLocks();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onAfterOpen={handleModalOpened}
      onAfterClose={handleModalClosed}
    >
      <div className={styles.Register} ref={modalContainerRef}>
        <div className={['row justify-end', styles.exitIcon].join(' ')}>
          <Icon
            icon={'faX'}
            style={{ cursor: 'pointer' }}
            onClick={handleModalClosed}
          />
        </div>
        <p className={styles.Title}>Đăng ký</p>
        <div className={styles.homeAgents}>
          <div className={styles.User}>
            <div className={styles.Icon}>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
                <path
                  d="M22.5 24.375C12.7702 24.375 4.614 29.8874 2.44214 37.3033C1.82125 39.4234 3.66586 41.25 5.875 41.25H39.125C41.3341 41.25 43.1787 39.4234 42.5579 37.3033C40.386 29.8874 32.2298 24.375 22.5 24.375Z"
                  fill="currentColor"
                ></path>
                <circle
                  cx="22.5"
                  cy="13.125"
                  r="9.375"
                  fill="currentColor"
                ></circle>
              </svg>
            </div>
            <p className={styles.Text}>Chủ đại lý</p>
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
          <div className={styles.User}>
            <div className={styles.Icon}>
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
                <path
                  d="M22.5 22.5C15.9287 22.5 10.4853 27.3292 9.52529 33.6323C9.35897 34.7243 10.2704 35.625 11.375 35.625H33.625C34.7296 35.625 35.641 34.7243 35.4747 33.6323C34.5147 27.3292 29.0713 22.5 22.5 22.5Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.6597 35.625H42.9999C44.1045 35.625 45.0185 34.7219 44.8244 33.6346C43.8846 28.3708 39.2839 24.375 33.7499 24.375C32.9039 24.375 32.0797 24.4684 31.2871 24.6454C33.5063 26.4239 35.1746 28.8613 35.9956 31.6607C36.3885 33.0002 35.9901 34.2592 35.1723 35.1529C35.0159 35.3239 34.8442 35.4817 34.6597 35.625Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7129 24.6454C11.4937 26.4239 9.82541 28.8613 9.00436 31.6607C8.61145 33.0002 9.00985 34.2592 9.82766 35.1529C9.98412 35.3239 10.1558 35.4817 10.3403 35.625H2.00004C0.895469 35.625 -0.0185581 34.7219 0.175573 33.6346C1.11533 28.3708 5.71606 24.375 11.25 24.375C12.096 24.375 12.9202 24.4684 13.7129 24.6454Z"
                  fill="currentColor"
                ></path>
                <circle
                  cx="11.25"
                  cy="18.75"
                  r="3.75"
                  fill="currentColor"
                ></circle>
                <circle
                  cx="33.75"
                  cy="18.75"
                  r="3.75"
                  fill="currentColor"
                ></circle>
                <circle
                  cx="22.5"
                  cy="15"
                  r="5.625"
                  fill="currentColor"
                ></circle>
              </svg>
            </div>
            <p className={styles.Text}>Nhân viên đại lý</p>
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
        </div>
        <p className={styles.Action}>
          Bạn đã có tài khoản?{'  '}
          <a className={styles.Link} onClick={openModalLogin}>
            Đăng nhập
          </a>
        </p>
      </div>
    </ReactModal>
  );
};

Register.defaultProps = defaultProps;

export default Register;
