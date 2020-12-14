import React from 'react';
import {View, StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import Icon from 'src/components/Icon';
import Text from 'src/components/Text';
import sizes from 'src/constants/sizes';
import {rem} from 'rn-units';

export default function FriendsOnline(params) {
  const total = 100;
  const online = 50;
  const status = `${online}/${total}`;
  return (
    <Touchable style={styles.wrapper} {...params}>
      <Icon name="users" style={styles.icon} />
      <Text text="Friends online: " style={styles.title} />
      <Text value={status} style={styles.value} />
    </Touchable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.offset,
  },
  title: {
    marginHorizontal: sizes.offset,
  },
  icon: {
    color: '#000',
  },
  value: {
    fontSize: rem(20),
  },
});
