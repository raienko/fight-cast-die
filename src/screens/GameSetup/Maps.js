import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';

export default function Maps() {
  return (
    <View style={styles.wrapper}>
      <Text text="map" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
  },
});
