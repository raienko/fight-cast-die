import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {rem} from 'rn-units';
import PropTypes from 'prop-types';
import Modal from 'src/components/Modal';
import animation from './animation.json';

const LoadingOverlay = ({visible}) => {
  if (!visible) {
    return null;
  }

  return (
    <Modal visible>
      <View style={styles.wrapper}>
        <LottieView
          source={animation}
          style={styles.animation}
          autoPlay
          autoSize
          loop
        />
      </View>
    </Modal>
  );
};

const size = rem(150);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: size,
    height: size,
  },
});

LoadingOverlay.propTypes = {
  visible: PropTypes.bool,
};

LoadingOverlay.defaultTypes = {
  visible: false,
};

export default LoadingOverlay;
