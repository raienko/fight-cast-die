import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import PropTypes from 'prop-types';
import AnimatedPosition from 'src/models/AnimatedPosition';

const Unit = ({children}) => {
  const position = new AnimatedPosition(0, 0);
  const offset = {transform: position.offset.getTranslateTransform()};
  return (
    <Animated.View style={[styles.wrapper, offset]}>
      {children}
    </Animated.View>
  );
};

Unit.propTypes = {
  children: PropTypes.node,
};

Unit.defaultProps = {
  children: null,
};

export default Unit;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
