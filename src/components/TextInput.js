import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {combineStyles} from 'rn-units';
import sizes from 'src/constants/sizes';
import localization, {updateOnLanguageChange} from 'localization';

export default updateOnLanguageChange(function CustomTextInput({ style, placeholder, ...rest}) {
  return (
    <TextInput
      {...rest}
      style={combineStyles(styles.input, style)}
      placeholder={placeholder ? localization.t(placeholder) : ''}
      allowFontScaling={false}
    />
  );
});

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
