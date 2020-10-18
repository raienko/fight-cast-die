import React from 'react';
import {View, StyleSheet} from 'react-native';
import {rem} from 'rn-units';
import Text from 'src/components/Text';

export default ({name, isMoving}) => {
  return (
    <View style={[styles.wrapper, isMoving && styles.moving]}>
      <Text value={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: rem(50),
    height: rem(50),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderWidth: 1,
    borderRadius: rem(15),
  },
  moving: {
    borderRadius: rem(25),
    backgroundColor: '#ccc',
  },
});
