import React from 'react';
import {StyleSheet} from 'react-native';
import Touchable from 'rn-units/components/Touchable';
import {rem} from 'rn-units';
import Text from 'src/components/Text';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const {text, ...rest} = this.props;
    return (
      <Touchable style={styles.wrapper} {...rest}>
        <Text text={text} style={styles.text} />
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: rem(100),
    height: rem(30),
    marginVertical: rem(5),
    borderRadius: rem(3),
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
