import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default class CustomText extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    children: null,
    text: '',
    value: '',
  };

  render() {
    const {children, text, value, ...rest} = this.props;
    return (
      <Text {...rest} allowFontScaling={false}>
        {text}
        {value}
        {children}
      </Text>
    );
  }
}
