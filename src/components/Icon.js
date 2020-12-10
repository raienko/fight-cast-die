import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import theme from 'src/constants/theme';
import sizes from 'src/constants/sizes';

export default function Icon({font, ...rest}) {
  const Font = font;
  return <Font {...rest} />;
}

Icon.fonts = {
  FontAwesome,
  Ionicons,
  Feather,
};

Icon.defaultProps = {
  size: sizes.icon,
  font: Icon.fonts.FontAwesome,
  color: theme.secondary,
};
