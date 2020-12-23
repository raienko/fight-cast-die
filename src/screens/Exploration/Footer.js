import React from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';

export default function Footer({children}) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    height: rem(40),
  },
});
