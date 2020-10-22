import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import {rem} from 'rn-units';
import Touchable from 'rn-units/components/Touchable';
import PropTypes from 'prop-types';

const Unit = () => {
  return (
    <Animated.View>
      <Touchable>
        {}
      </Touchable>
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
    flex: 1,
  },
});
