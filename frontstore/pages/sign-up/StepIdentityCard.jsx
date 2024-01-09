import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import { Button, Icon, Input } from '../../component';
import ImageUploading from 'react-images-uploading';
import { identityCard } from './constants';
import ImageUpload from '../../component/ImageUpload/ImageUpload';

const StepPhone = ({ onBackStep }) => {
  const handleChangeImage = (image) => {};
  return (
    <>
      <div className={styles.Container}>
        <h5 className={styles.Title}>Xác thực thông tin đại lý</h5>
        <p className={styles.PleaseConfirm}>
          Vui lòng cung cấp đầy đủ các thông tin dưới đây để hoàn tất quá trình
          đăng ký.
        </p>

        <h6 className={styles.identityCard}>
          1. Số chứng minh thư / Số hộ chiếu
        </h6>
        <div className={styles.FormIdentityCard}>
          <div className={['col', styles.InputNavi].join(' ')}>
            <div className={['row', styles.TitleInput].join(' ')}>
              CMT / Hộ chiếu<span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                name="userName"
                className={styles.Input}
                placeholder="Ví dụ: 1122334455"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className={['row', styles.Uploading].join(' ')}>
          <div className={'col-6'}>
            <p className={styles.identityTextAfter}>Ảnh mặt trước</p>
            <ImageUpload onChangeImage={handleChangeImage} />
          </div>
          <div className={'col-6'}>
            <p className={styles.identityTextAfter}>Ảnh mặt sau</p>
            <ImageUpload onChangeImage={handleChangeImage} />
          </div>
        </div>
        <h6 className={styles.identityCard}>2. Tài khoản ngân hàng</h6>
        <p className={styles.Note}>
          *Tên tài khoản ngân hàng cần trùng với tên trên CMT/Hộ chiếu
        </p>
        <div className={styles.FormIdentityCard}>
          <div
            className={['col', styles.InputConfirmOtp, styles.InputNavi].join(
              ' '
            )}
          >
            <div className={['row', styles.TitleInput].join(' ')}>
              Tên tài khoản<span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                name="userName"
                className={styles.Input}
                placeholder="NGUYEN VAN A"
                type="text"
              />
            </div>
          </div>
          <div
            className={['col', styles.InputConfirmOtp, styles.InputNavi].join(
              ' '
            )}
          >
            <div className={['row', styles.TitleInput].join(' ')}>
              Số tài khoản <span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                name="userName"
                className={styles.Input}
                placeholder="Ví dụ: 1122334455"
                type="text"
              />
            </div>
          </div>
          <div
            className={['col', styles.InputConfirmOtp, styles.InputNavi].join(
              ' '
            )}
          >
            <div className={['row', styles.TitleInput].join(' ')}>
              Ngân hàng<span className={styles.Require}>*</span>
            </div>
            <div className={['row', styles.outInput].join(' ')}>
              <Input
                name="userName"
                className={styles.Input}
                placeholder="Ví dụ: Vietcombank"
                type="text"
              />
            </div>
          </div>
        </div>
        <h6 className={styles.identityCard}>3. Hồ sơ kinh doanh</h6>
        <p className={styles.Information}>
          <p className={styles.InformationText}>
            Chúng tôi chấp nhận 1 trong 3 thông tin dưới đây
          </p>
          <p className={styles.InformationText}>
            1. Giấy phép kinh doanh vé máy/Có phòng vé (Ảnh biển hiệu có sđt
            trùng với sđt đăng ký)
          </p>
          <p className={styles.InformationText}>
            2. Có trang bán hàng online vé máy bay (4 tuần liên tiếp, mỗi tuần
            có ít nhất 1 bài đăng bán vé)
          </p>
          <p className={styles.InformationText}>
            3. Ảnh chụp màn hình thể hiện email đã đặt nhiều đơn hàng trong vòng
            6 tháng
          </p>
        </p>
        <div className={['row', styles.Uploading].join(' ')}>
          <div className={'col-6'}>
            <ImageUpload multiple={true} onChangeImage={handleChangeImage} />
          </div>
        </div>
      </div>
      <div className={styles.Action}>
        <Button
          borderRadius={'none'}
          color="none"
          className={[styles.Back].join(' ')}
          type="submit"
          colorText="#ffffff"
          onClick={onBackStep}
        >
          Quay lại
        </Button>
        <Button
          borderRadius={'none'}
          color="fill"
          className={[styles.Submit].join(' ')}
          type="submit"
          colorText="#ffffff"
        >
          Tiếp tục
        </Button>
      </div>
    </>
  );
};

export default StepPhone;
