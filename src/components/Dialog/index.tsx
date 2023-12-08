import React from 'react';
import * as S from './styles';
import Modal from 'react-native-modal';

type DialogProps = {
  type: 'success' | 'error'
  isVisible: boolean
}

const Dialog = ({ type, isVisible }: DialogProps) => {
  return (
    <>
      <Modal isVisible={isVisible} />
    </>
  );
};

export default Dialog;
