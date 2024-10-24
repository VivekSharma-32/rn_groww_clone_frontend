import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/logo_text.png';
import {normalizeHeight} from '../../utils/Scaling';
const CenteredLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={Logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    marginBottom: 5,
  },
  imgContainer: {
    width: normalizeHeight(110),
    height: normalizeHeight(28),
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CenteredLogo;
