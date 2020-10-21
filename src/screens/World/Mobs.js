import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {rem} from 'rn-units';

export default function Mobs({children}) {
  return (
    <View style={styles.wrapper}>

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: rem(960),
    height: rem(960),
  },
});
