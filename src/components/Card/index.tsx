import React from 'react';
import * as S from './styles';

const background = require('../../assets/background.png');
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BACKGROUND_IMAGE = Image.resolveAssetSource(background).uri;

type CardProps = {
  localNumber?: number;
  localName?: string;
};

const Card = ({localName, localNumber}: CardProps) => {
  return (
    <S.Container>
      <S.Cover>
        <S.Image source={{uri: BACKGROUND_IMAGE}} />
        <S.Title>{`Local ${localNumber}`}</S.Title>
      </S.Cover>
      <S.Content>
        {localName ? (
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
  );
};

export default Card;
