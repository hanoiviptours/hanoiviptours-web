import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SignUp.module.scss';
import { Button, Input } from '../../component';

const StepPhone = ({ onNextStep }: any) => {
  const [value, SetValue] = useState<{
    phone: string;
  }>({ phone: '' });

  const handleOnChange = (value: string) => {};

  return (
    <>
      <div className={styles.Container}>
        <h5 className={styles.Title}>Nhập thông tin</h5>
        <div className={styles.Forms}>
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>
              Họ và tên<span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                name="userName"
                className={styles.Input}
                placeholder="Nguyễn Văn A"
                type="text"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>
              Email address<span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                className={styles.Input}
                placeholder="example@gmail.com"
                name="email"
                type="email"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>
              Số điện thoại người giới thiệu{' '}
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                className={styles.Input}
                placeholder="Nhập số điện thoại"
                name="refer"
                type="text"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>
              Mật khẩu<span className={styles.Require}>*</span>
            </div>
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
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>
              Nhập lại mật khẩu<span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                className={styles.Input}
                placeholder="******"
                name="confirmPassword"
                type="password"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <h5 className={styles.Otp}>Nhập OTP</h5>
          <p className={styles.Accuracy}>
            Để truy cập vào Tripi Partner, vui lòng xác thực số điện thoại của
            bạn.
          </p>
          <p className={styles.Accuracy}>
            Chúng tôi đã gửi mã OTP của bạn qua tin nhắn tới số điện thoại:
            <span className={styles.Phone}> 0329834791</span>
          </p>
          <div
            className={['col', styles.InputNavi, styles.InputConfirmOtp].join(
              ' '
            )}
          >
            <div className={['row', styles.TitleInput].join(' ')}>
              Mã OTP<span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                className={styles.InputOtp}
                placeholder="Ví dụ: 123456"
                name="otp"
                type="password"
                onChange={handleOnChange}
              />
              <Button
                borderRadius={'none'}
                color="fill"
                className={styles.Button}
                type="submit"
                colorText="#ffffff"
                onClick={() => onNextStep(1)}
              >
                Gửi mã OTP
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ActionButton}>
        <Button
          borderRadius={'none'}
          color="fill"
          className={[styles.Submit].join(' ')}
          type="submit"
          colorText="#ffffff"
        >
          Xác thực thông tin đại lý
        </Button>
      </div>
    </>
  );
};

export default StepPhone;
