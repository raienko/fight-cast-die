import React from 'react';
import {rem} from 'rn-units';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

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
  size: rem(30),
  font: Icon.fonts.FontAwesome,
};
