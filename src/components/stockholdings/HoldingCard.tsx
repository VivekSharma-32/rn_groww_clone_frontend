import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {useTheme} from '@react-navigation/native';
import {normalizeWidth} from '../../utils/Scaling';
import CustomText from '../global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {formatPaisaWithCommas, getSignPaisa} from '../../utils/NumberUtils';
import {holdingsData} from '../../utils/staticData';

const HoldingCard = () => {
  const {colors} = useTheme();

  const totalReturns = holdingsData.reduce(
    (total, {invested, current}) => total + (current - invested),
    0,
  );

  const dayReturns = holdingsData.reduce(
    (total, {dayReturn}) => total + dayReturn,
    0,
  );

  const totalInvested = holdingsData.reduce(
    (total, {invested}) => total + invested,
    0,
  );

  const totalCurrent = holdingsData.reduce(
    (total, {current}) => total + current,
    0,
  );

  const totalReturnsPercentageChange = Math.abs(
    (totalReturns / totalInvested) * 100,
  ).toFixed(2);

  const dayReturnsPercentageChange = Math.abs(
    (dayReturns / totalInvested) * 100,
  ).toFixed(2);

  return (
    <View
      style={[
        styles.holdingContainer,
        {
          borderColor: colors.border,
        },
      ]}>
      <View style={styles.flexRowCenter}>
        <View>
          <CustomText variant="h9" fontFamily={FONTS.Regular}>
            Current
          </CustomText>

          <CustomText
            variant="h8"
            style={{marginTop: 2}}
            fontFamily={FONTS.Regular}>
            {formatPaisaWithCommas(totalCurrent)}
          </CustomText>
        </View>

        <View>
          <CustomText
            variant="h9"
            fontFamily={FONTS.Regular}
            style={{textAlign: 'right'}}>
            Total Returns
          </CustomText>

          <CustomText
            variant="h8"
            style={{marginTop: 2, color: getSignPaisa(totalReturns).color}}
            fontFamily={FONTS.Regular}>
            {getSignPaisa(totalReturns).paisa} ({totalReturnsPercentageChange}%)
          </CustomText>
        </View>

        <View>
          <CustomText variant="h9" fontFamily={FONTS.Regular}>
            Current
          </CustomText>

          <CustomText
            variant="h8"
            style={{marginTop: 2}}
            fontFamily={FONTS.Regular}>
            {formatPaisaWithCommas(totalCurrent)}
          </CustomText>
        </View>
      </View>

      <View style={styles.flexRowCenter2}>
        <View>
          <CustomText variant="h9" fontFamily={FONTS.Regular}>
            Invested
          </CustomText>

          <CustomText
            variant="h8"
            style={{marginTop: 2}}
            fontFamily={FONTS.Regular}>
            {formatPaisaWithCommas(totalInvested)}
          </CustomText>
        </View>

        <View>
          <CustomText
            variant="h9"
            fontFamily={FONTS.Regular}
            style={{textAlign: 'right'}}>
            1D Returns
          </CustomText>

          <CustomText
            variant="h8"
            style={{marginTop: 2, color: getSignPaisa(dayReturns).color}}
            fontFamily={FONTS.Regular}>
            {getSignPaisa(dayReturns).paisa} ({dayReturnsPercentageChange}%)
          </CustomText>
        </View>

        <View>
          <CustomText variant="h9" fontFamily={FONTS.Regular}>
            Current
          </CustomText>

          <CustomText
            variant="h8"
            style={{marginTop: 2}}
            fontFamily={FONTS.Regular}>
            {formatPaisaWithCommas(totalCurrent)}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  holdingContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    height: normalizeWidth(120),
    borderWidth: Platform.OS === 'android' ? 1 : 1.5,
  },
  flexRowCenter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  flexRowCenter2: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
});

export default HoldingCard;
