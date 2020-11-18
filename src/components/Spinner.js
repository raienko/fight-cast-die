import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Modal from 'src/components/Modal';

export default function Spinner({visible}) {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.wrapper}>
        <ActivityIndicator />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
