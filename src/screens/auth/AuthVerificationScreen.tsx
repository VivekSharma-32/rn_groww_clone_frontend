import React, {useState} from 'react';
import ResetPin from './ResetPin';
import BiometricVerification from './BiometricVerification';

const AuthVerificationScreen = () => {
  const [authScreen, setAuthScreen] = useState('Biometric');
  return (
    <>
      {authScreen == 'Biometric' ? (
        <BiometricVerification onForgotPin={() => setAuthScreen('ResetPin')} />
      ) : (
        <ResetPin />
      )}
    </>
  );
};

export default AuthVerificationScreen;
