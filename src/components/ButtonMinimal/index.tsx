import React from 'react';
import * as S from './styles';
import { TouchableOpacity } from 'react-native';

type ButtonProps = {
  title: string
  onPress: () => void
}

const ButtonMinimal = ({ title, onPress }: ButtonProps) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <S.Title>{title}</S.Title>
      </TouchableOpacity>
    </>
  );
};

export default ButtonMinimal;
