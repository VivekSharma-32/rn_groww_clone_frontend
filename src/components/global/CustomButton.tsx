import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import CustomText from './CustomText';
import {FONTS} from '../../constants/Fonts';

interface CustomButtonProps {
  text: string;
  loading: boolean;
  disabled: boolean;
  onPress: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  loading,
  disabled,
  onPress,
}) => {
  const {colors} = useTheme();
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    if (loading) {
      animatedValue.setValue(0);
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      animatedValue.stopAnimation();
    }
  }, [loading, animatedValue]);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.btn,
        {backgroundColor: loading || disabled ? colors.card : colors.primary},
      ]}>
      <CustomText fontFamily={FONTS.Medium} variant="h5">
        {text}
      </CustomText>
      {loading && (
        <Animated.View
          style={[
            styles.loadingIndicator,
            {
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-500, 500],
                  }),
                },
              ],
            },
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 5,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  loadingIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'red',
    width: '100%',
  },
});

export default CustomButton;
