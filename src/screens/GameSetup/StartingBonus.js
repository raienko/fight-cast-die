import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Text from 'src/components/Text';
import {rem} from 'rn-units';

export default function StartingBonus({bonus}) {
  return (
    <Text value="StartingBonus" />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
