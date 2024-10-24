import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {FONTS} from '../../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../constants/Colors';

interface OtpTimerProps {
  type: string;
  style?: TextStyle;
  onPress: () => void;
}

const OtpTimer: FC<OtpTimerProps> = ({type, onPress, style}) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={timer === 0 ? handleResend : undefined}
      disabled={timer !== 0}>
      <Text style={[styles.forgotText, {color: Colors.themeColor}, style]}>
        {timer === 0 ? 'Resend OTP' : `Resend in ${timer}s`}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  forgotText: {
    fontFamily: FONTS.Medium,
    fontSize: RFValue(9),
  },
});

export default OtpTimer;
