import React from 'react';
import {StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import Text from 'src/components/Text';
import Icon from 'src/components/Icon';
import sizes from 'src/constants/sizes';

export default function Toggle({text, value, ...rest}) {
  return (
    <Touchable style={styles.wrapper} {...rest}>
      <Text text={text} style={styles.text} />
      <Icon name={value ? 'check' : 'times'} />
    </Touchable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.offset,
  },
  text: {
    marginRight: sizes.offset,
  },
});
