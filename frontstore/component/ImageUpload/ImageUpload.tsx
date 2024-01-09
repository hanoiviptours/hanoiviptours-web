import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import styles from '../../pages/sign-up/SignUp.module.scss';
import { Icon } from '../Icon';

const ImageUpload = ({ onChangeImage, multiple }: any) => {
  const [image, setImage] = useState([]);

  const onChange = (image: any) => {
    onChangeImage(image);
    setImage(image);
  };
  return (
    <>
      <ImageUploading
        multiple={multiple}
        value={image}
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className={styles.IdentityCardProduct}>
            <div
              className={styles.IdentityAfter}
              onClick={() => onImageUpload()}
              {...dragProps}
            >
              {(image.length <= 0 || multiple) && (
                <>
                  <svg width="62" height="63" viewBox="0 0 62 63" fill="none">
                    <path
                      d="M11.0601 23.6578V14.0632C11.0601 12.9587 11.9555 12.0632 13.0601 12.0632H22.6547"
                      stroke="#757575"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M49.7085 23.6578V14.0632C49.7085 12.9587 48.8131 12.0632 47.7085 12.0632H38.1139"
                      stroke="#757575"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M11.0601 39.1173V48.7119C11.0601 49.8165 11.9555 50.7119 13.0601 50.7119H22.6547"
                      stroke="#757575"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M49.7085 39.1173V48.7119C49.7085 49.8165 48.8131 50.7119 47.7085 50.7119H38.1139"
                      stroke="#757575"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M30.3843 23.658V39.1174"
                      stroke="#757575"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M22.6543 31.3877L38.1138 31.3877"
                      stroke="#757575"
                      stroke-linecap="round"
                    ></path>
                  </svg>

                  <p className="">Kéo thả ảnh vào đây hoặc click</p>
                </>
              )}
              {!multiple && (
                <img
                  src={image?.[0]?.['data_url']}
                  alt=""
                  width="200"
                  height="200"
                  className={styles.Image}
                />
              )}
            </div>

            <div className={styles.ListImage}>
              {multiple &&
                imageList.map((image, index) => (
                  <div key={index} className={styles.ImageItem}>
                    <Icon
                      icon={'faX'}
                      className={styles.Icon}
                      style={{ cursor: 'pointer' }}
                      onClick={() => onImageRemove(index)}
                    />
                    <img
                      className={styles.Image}
                      src={image['data_url']}
                      alt=""
                      width="148"
                      height="148"
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default ImageUpload;
