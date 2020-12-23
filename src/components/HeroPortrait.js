import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import heroes from 'src/heroes';

export default function HeroPortrait({hero}) {
  const character = heroes.find((i) => i.id === hero);
  return <Image source={character.avatar} style={styles.portrait} />;
}

const styles = StyleSheet.create({
  portrait: {
    width: rem(58),
    height: rem(64),
  },
});
