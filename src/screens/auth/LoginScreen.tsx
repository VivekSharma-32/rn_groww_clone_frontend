import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React, {FC} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {
  normalizeModerately,
  screenHeight,
  screenWidth,
} from '../../utils/Scaling';

import Icon from 'react-native-vector-icons/Ionicons';
import LoginImageDark from '../../assets/images/login_dark_animation.png';
import LoginImageLight from '../../assets/images/login_animation_light.png';
import TouchableText from '../../components/auth/TouchableText';
import BottomText from '../../components/auth/BottomText';
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import GoogleIcon from '../../assets/images/google.png';
import {signInWithGoogle} from '../../redux/SocialLogin';
import {navigate} from '../../utils/NavigationUtil';
import Toast from 'react-native-toast-message';

const LoginScreen: FC = () => {
  const theme = useColorScheme();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h3" fontFamily={FONTS.Medium}>
          Together We Groww
        </CustomText>
        <CustomText variant="h7" style={styles.subText} fontFamily={FONTS.Bold}>
          Invest ● Pay ● Loans
        </CustomText>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={theme === 'dark' ? LoginImageDark : LoginImageLight}
          />
        </View>
      </View>

      <SocialLoginButton
        icon={<Image source={GoogleIcon} style={styles.gimg} />}
        text="Continue with Google"
        onPress={() => signInWithGoogle()}
      />
      <SocialLoginButton
        icon={<Icon name="logo-apple" size={18} color="black" />}
        text="Continue with Apple"
        onPress={() => {}}
      />
      <TouchableText
        firstText="Use other email ID"
        // onPress={() => navigate('EmailScreen')}
        onPress={() => {
          Toast.show({
            type: 'normalToast',
            props: {
              msg: 'We are facing a temportary problem. Please try again after sometime',
            },
          });
          navigate('EmailScreen');
        }}
        style={{marginVertical: 30, marginTop: 15, textAlign: 'center'}}
      />
      <BottomText />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(30),
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  gimg: {
    height: 20,
    width: 20,
  },
});
export default LoginScreen;
