import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {rem} from 'rn-units';

export default function ListOfCharacters({characters}) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={characters}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: rem(100),
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'yellow',
  },
});
