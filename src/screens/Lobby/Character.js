import React from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';

export default function Character({character}) {
  return (
    <View style={styles.wrapper}>
      <Text value={character.name} />
      <Text value={character.id} />
      <Text value={character.type} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: rem(90),
    height: rem(120),
  },
});
