import React from 'react';
import * as S from './styles';

import background from '../../assets/background.png';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BACKGROUND_IMAGE = Image.resolveAssetSource(background).uri;

const Card = () => {
  return (
    <S.Container>
      <S.Cover>
        <S.Image source={{uri: BACKGROUND_IMAGE}} />
        <S.Title>Local 1</S.Title>
      </S.Cover>
      <S.Content>
        {/* <S.Logo source={{uri: BACKGROUND_IMAGE}} /> */}
        <Icon name="check" size={30} color="#21ee21" />
        <S.Caption>Auto Escola</S.Caption>
        {/* <S.Subtitle>by Facebook</S.Subtitle> */}
      </S.Content>
    </S.Container>
  );
};

export default Card;
