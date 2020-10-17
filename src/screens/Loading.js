import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <Text text="loading..." />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
