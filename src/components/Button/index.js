import React from 'react';
import {StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import {combineStyles} from 'rn-units';
import PropTypes from 'prop-types';
import Text from 'src/components/Text';
import sizes from 'src/constants/sizes';
import theme from 'src/constants/theme';

export default class Button extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.any,
  };

  render() {
    const {text, value, style, disabled, ...rest} = this.props;
    const genericStyle = combineStyles(
      styles.wrapper,
      disabled && styles.disabled,
      style,
    );
    return (
      <Touchable style={genericStyle} disabled={disabled} {...rest}>
        <Text text={text} value={value} style={styles.text} />
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    minWidth: sizes.buttonWidth,
    height: sizes.buttonHeight,
    backgroundColor: theme.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.offset,
    margin: sizes.offset,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: theme.white,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
