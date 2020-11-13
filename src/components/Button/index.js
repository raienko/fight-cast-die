import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import {rem} from 'rn-units';
import Text from 'src/components/Text';
import PropTypes from 'prop-types';
import background from './background.png';

export default class Button extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  render() {
    const {text, value, ...rest} = this.props;
    return (
      <Touchable style={styles.wrapper} {...rest}>
        <Image source={background} style={styles.background} />
        <Text text={text} value={value} style={styles.text} />
      </Touchable>
    );
  }
}

const width = rem(80);
const height = width * 0.3;

const styles = StyleSheet.create({
  wrapper: {
    width,
    height,
    marginVertical: rem(5),
    borderRadius: rem(3),
    alignItems: 'center',
    justifyContent: 'center',
    padding: rem(5),
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'Times New Roman',
    textTransform: 'uppercase',
  },
});
