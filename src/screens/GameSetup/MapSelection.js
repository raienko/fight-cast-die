import React from 'react';
import {StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import Text from 'src/components/Text';
import Icon from 'src/components/Icon';
import theme from 'src/constants/theme';
import sizes from 'src/constants/sizes';

export default function MapSelection() {
  return (
    <Touchable style={styles.wrapper}>
      <Text text="Jebus Cross" style={styles.title} />
      <Icon name="chevron-down" style={styles.icon} />
    </Touchable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.offset,
    backgroundColor: theme.primary,
    margin: sizes.offset,
    borderWidth: 1,
  },
  title: {
    flex: 1,
  },
  icon: {
    fontSize: rem(20),
  },
});
