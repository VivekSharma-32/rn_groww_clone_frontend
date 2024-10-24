import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import {toastConfig} from './ToastConfig';

GoogleSignin.configure({
  webClientId:
    '475270870178-k5b3fhau6g80v7fngg1r3jrecnd87ga2.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});

const App = () => {
  return (
    <>
      <Navigation />
      <Toast
        visibilityTime={3000}
        config={toastConfig}
        bottomOffset={0}
        swipeable={false}
        position="bottom"
      />
    </>
  );
};

export default App;
