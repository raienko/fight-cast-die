import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {combineStyles} from 'rn-units';
import sizes from 'src/constants/sizes';

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
    height: sizes.buttonHeight,
    minWidth: sizes.buttonWidth,
    padding: 0,
    paddingHorizontal: sizes.offset,
    borderWidth: 1,
    borderRadius: sizes.radius,
    margin: sizes.offset,
  },
});
