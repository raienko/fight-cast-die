import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';

export default function Players() {
  return (
    <View style={styles.wrapper}>
      <Text text="Players setup" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
  },
});
