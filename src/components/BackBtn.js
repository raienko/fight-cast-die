import React from 'react';
import {StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import Icon from 'src/components/Icon';
import sizes from 'src/constants/sizes';

export default function BackBtn({disabled, ...rest}) {
  return (
    <Touchable disabled={disabled} {...rest} hitSlop={sizes.hitSlop}>
      <Icon name="chevron-left" style={styles.icon} />
    </Touchable>
  );
}

const styles = StyleSheet.create({
  icon: {
    margin: sizes.offset,
  },
});
