import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'src/components/Text';
import Button from 'src/components/Button';

export default function CurrentGame() {
  const proceed = () => {};
  const leave = () => {};
  return (
    <View style={styles.wrapper}>
      <Text text="Current game" />
      <Button text="Leave" onPress={leave} />
      <Button text="Resume" onPress={proceed} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
