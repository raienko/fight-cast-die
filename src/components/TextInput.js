import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {combineStyles, rem} from 'rn-units';

export default function CustomTextInput({style, ...rest}) {
  return (
    <TextInput
      {...rest}
      style={combineStyles(styles.input, style)}
      allowFontScaling={false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: rem(20),
    width: rem(120),
    padding: 0,
    paddingHorizontal: rem(5),
    borderWidth: 1,
    borderRadius: rem(5),
  },
});
