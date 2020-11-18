import React from 'react';
import TranslucentModal from 'react-native-translucent-modal';
import {doNothing} from 'rn-units';

export default function Modal(params) {
  return (
    <TranslucentModal
      onRequestClose={doNothing}
      supportedOrientations={['portrait', 'landscape']}
      {...params}
    />
  );
}
