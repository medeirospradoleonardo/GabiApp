import React from 'react';
import * as S from './styles';

const background = require('../../assets/background.png');
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type CardProps = {
  localName?: string;
  uri: string
};

const getLocalNumber = (localName: string | undefined) => {
  switch (localName) {
    case 'Autoescola':
      return 'Local 1';
    case 'DBB':
      return 'Local 2';
    case 'Praça':
      return 'Local 3';
    case 'Jeronimo':
      return 'Local 4';
    case 'Apartamento':
      return 'Local 5';
    default:
      return localName;
  }
};

const Card = ({ localName, uri }: CardProps) => {
  return (<>
    <S.Title>{getLocalNumber(localName)}</S.Title>
    <S.Container>
      <S.Cover>
        <S.Image source={{ uri: uri }} />
      </S.Cover>
      <S.Content>
        {getLocalNumber(localName) != localName ? (
          <>
            <Icon name="check" size={30} color="#21ee21" />
            <S.Caption>{localName}</S.Caption>
          </>
        ) : (
          <>
            <Icon name="lock" size={30} color="#000000" />
            <S.Caption>Bloqueado</S.Caption>
          </>
        )}
      </S.Content>
    </S.Container>
  </>
  );
};

export default Card;
