import React from 'react';
import TranslucentModal from 'react-native-translucent-modal';
import {doNothing} from 'rn-units';

const Modal = (params) => (
  <TranslucentModal onRequestClose={doNothing} {...params} />
);

export default Modal;
