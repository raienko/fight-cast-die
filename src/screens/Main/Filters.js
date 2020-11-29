import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'src/components/Button';

export default function Filters({filters, updateFilters}) {
  return (
    <View style={styles.wrapper}>
      <Button text="Jebus" />
      <Button text="Rank game" />
      <Button text="2 players" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
