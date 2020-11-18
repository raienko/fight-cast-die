import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {combineStyles} from 'rn-units';

export default class CustomText extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    style: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    children: null,
    text: '',
    style: null,
    value: '',
  };

  render() {
    const {children, text, style, value, ...rest} = this.props;
    return (
      <Text
        {...rest}
        style={combineStyles(styles.text, style)}
        allowFontScaling={false}>
        {text}
        {value}
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
  },
});
