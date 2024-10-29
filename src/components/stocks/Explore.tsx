import {
  View,
  Text,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {FC, useState} from 'react';
import {Tabs} from 'react-native-collapsible-tab-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../constants/Colors';
import {useTheme} from '@react-navigation/native';
import CustomText from '../global/CustomText';
import {FONTS} from '../../constants/Fonts';
import DottedLine from '../../assets/images/dotted.png';
import StockCard from './StockCard';
import {mostBoughtData} from '../../utils/staticData';
import ProductAndTools from './ProductAndTools';
import GainerAndLoser from './GainerAndLoser';
import InfoText from '../global/InfoText';

interface SeparatorProps {
  label: string;
  seeMore?: boolean;
}

const Separator: FC<SeparatorProps> = ({label, seeMore}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.sectionContainer}>
      <CustomText fontFamily={FONTS.Medium} fontSize={RFValue(10)}>
        {label}
      </CustomText>
      {seeMore && (
        <TouchableOpacity style={styles.seeMore}>
          <CustomText fontFamily={FONTS.Medium} variant="h8">
            See more
          </CustomText>
          <Image
            source={DottedLine}
            style={{
              height: 2,
              marginTop: 2,
              width: '100%',
              tintColor: colors.text,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const Explore = () => {
  const [refreshing, setRefreshing] = useState(false);
  const refreshHandler = async () => {
    setRefreshing(false);
  };
  return (
    <Tabs.ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding: 15}}
      refreshControl={
        <RefreshControl
          onRefresh={refreshHandler}
          refreshing={refreshing}
          size={RFValue(10)}
          colors={[Colors.profit]}
          tintColor={Colors.profit}
        />
      }>
      <Separator label="Most bought on Groww" />
      <StockCard data={mostBoughtData} />

      <Separator label="Product & Tools" />
      <ProductAndTools />
      <GainerAndLoser />
      <Separator label="Top Intraday" seeMore />
      <StockCard data={mostBoughtData} />

      <Separator label="Stock in news" seeMore />
      <StockCard data={mostBoughtData} />

      <InfoText
        data={[
          'Groww Invest Tech Pvt. Ltd.',
          '(Former;y known as Nextbillion Technologoy Pvt. Ltd.)',
          'SEBI-Stock Broker -INZ000301838 | Member of NSE,BSE',
          'DP - IN-DP-417-2019',
        ]}
      />
    </Tabs.ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 15,
    marginTop: 16,
    paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeMore: {
    overflow: 'hidden',
    top: 2,
  },
});
export default Explore;
