import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);
    Alert.alert('Token');
  } catch (error) {
    console.log(error);
  }
};
