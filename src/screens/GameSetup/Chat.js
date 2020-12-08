import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';

export default function Chat() {
  return (
    <View style={styles.wrapper}>
      <Text text="Chat" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
  },
});
