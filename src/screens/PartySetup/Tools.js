import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';

export default function Tools() {
  return (
    <View style={styles.wrapper}>
      <Text text="Tools" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
  },
});
