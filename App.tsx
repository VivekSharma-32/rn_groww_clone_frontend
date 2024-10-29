import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import {toastConfig} from './ToastConfig';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './src/sheets/sheet';
GoogleSignin.configure({
  webClientId:
    '475270870178-k5b3fhau6g80v7fngg1r3jrecnd87ga2.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
      <Toast
        visibilityTime={3000}
        config={toastConfig}
        bottomOffset={0}
        swipeable={false}
        position="bottom"
      />
    </GestureHandlerRootView>
  );
};

export default App;
