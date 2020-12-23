import React from 'react';
import {StyleSheet} from 'react-native';
import Text from 'src/components/Text';
import {rem} from 'rn-units';
import {combineStyles} from 'rn-units';
import sizes from 'src/constants/sizes';

export default function H1({style, ...rest}) {
  return <Text style={combineStyles(styles.text, style)} {...rest} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: rem(30),
    marginHorizontal: sizes.offset,
  },
});
