import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';

export default function Terrain({children}) {
  return (
    <View style={styles.wrapper}>
      <Text value="[ terrain ]" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#c7ddc7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
