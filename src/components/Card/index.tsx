import React from 'react';
import * as S from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

const toVerify = require('../../assets/background2.png');
const TOVERIFY_IMAGE = Image.resolveAssetSource(toVerify).uri;

type CardProps = {
  localName?: string;
  uri: string
  toVerified: boolean
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

const Card = ({ localName, uri, toVerified }: CardProps) => {
  return (<>
    <S.Title>{getLocalNumber(localName)}</S.Title>
    <S.Container>
      <S.Cover>
        <S.Image source={{ uri: toVerified ? TOVERIFY_IMAGE : uri }} />
      </S.Cover>
      <S.Content>
        {getLocalNumber(localName) !== localName ? (
          <>
            <Icon name="check" size={30} color="#21ee21" />
            <S.Caption>{localName}</S.Caption>
          </>
        ) : toVerified ? (
          <>
            <Icon name="map-marker" size={30} color="#9b9b9b" />
            <S.Caption>Verificar local</S.Caption>
          </>
        ) : (
          <>
            <Icon name="lock" size={30} color="#9b9b9b" />
            <S.Caption>Bloqueado</S.Caption>
          </>
        )}
      </S.Content>
    </S.Container>
  </>
  );
};

export default Card;
