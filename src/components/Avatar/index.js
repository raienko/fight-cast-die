import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {rem} from 'rn-units';

export default class Avatar extends React.PureComponent {
  render() {
    return (
      <Image {...this.props} style={styles.image} />
    );
  }
}

const size = rem(50);

const styles = StyleSheet.create({
  image: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
});
