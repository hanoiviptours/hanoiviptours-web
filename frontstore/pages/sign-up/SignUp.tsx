import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import { Button, Divider, Input } from '../../component';
import StepPhone from './StepPhone';
import StepInformation from './StepInformation';
import StepIdentityCard from './StepIdentityCard';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));

    console.log('currentStep', currentStep);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className={styles.SignUp}>
      <div className={styles.Progress}>
        <div className={styles.ProgressStep}>
          <div className={styles.TextProgress}>
            <span
              className={[
                currentStep >= 1 ? styles.completed : styles.NotCompleted,
                '',
              ].join(' ')}
            >
              1
            </span>
            <span className={styles.TitleProgress}>Số điện thoại</span>
          </div>
          <div className={styles.TextProgress}>
            <span
              className={[
                currentStep >= 2 ? styles.completed : styles.NotCompleted,
                ,
              ].join(' ')}
            >
              2
            </span>
            <span className={styles.TitleProgress}>Nhập thông tin </span>
          </div>

          <div className={styles.TextProgress}>
            <span
              className={[
                currentStep >= 3 ? styles.completed : styles.NotCompleted,
                ,
              ].join(' ')}
            >
              3
            </span>
            <span className={styles.TitleProgress}>Xác thực thông tin </span>
          </div>
        </div>
      </div>
      {currentStep === 1 && <StepPhone onNextStep={handleNextStep} />}
      {currentStep === 2 && <StepInformation onNextStep={handleNextStep} />}
      {currentStep === 3 && <StepIdentityCard onBackStep={handlePrevStep} />}
    </div>
  );
};

SignUp.defaultProps = {};

export default SignUp;
