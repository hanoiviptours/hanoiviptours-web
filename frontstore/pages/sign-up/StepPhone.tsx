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
    <div className={styles.Container}>
      <h5 className={styles.Title}>Đăng ký</h5>
      <p className={styles.Description}>
        <span className={styles.Text}>
          Để truy cập vào Tripi Partner, vui lòng xác thực số điện thoại của
          bạn.
        </span>
        <br />
        <span className={styles.Text}>
          Bạn có thể tìm hiểu thêm về Tripi Partner{' '}
          <a href="#" className={styles.Link}>
            tại đây
          </a>
        </span>
        <br />
        <span className={styles.Text}>
          Vui lòng nhập số điện thoại vào ô bên dưới. Chúng tôi sẽ gửi mã OTP
          tới số điện thoại của bạn để kích hoạt.
        </span>
      </p>
      <div className={['col', styles.InputNavi].join(' ')}>
        <div className={['row', styles.TitleInput].join(' ')}>
          Số điện thoại <span className={styles.Require}>*</span>
        </div>
        <div className={styles.outInput}>
          <Input
            name="phone"
            className={styles.Input}
            placeholder="Ví dụ: 0901234567"
            type="text"
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
        <p className={styles.Login}>
          Bạn có thể sử dụng số điện thoại này để đăng nhập.
        </p>
      </div>
      <p className={styles.Account}>
        Bạn đã có tải khoản? <a className={styles.Link}>Đăng nhập</a>
      </p>
    </div>
  );
};

export default StepPhone;
