import React from 'react';
import * as S from './styles';

import background from '../../assets/background.png';
import {Image} from 'react-native';
import {Icon} from 'react-native-elements';

const BACKGROUNDIMAGE = Image.resolveAssetSource(background).uri;

const Card = () => {
  return (
    <S.Container>
      <S.Cover>
        <S.Image source={{uri: BACKGROUNDIMAGE}} />
        <S.Title>Styled Components</S.Title>
      </S.Cover>
      <S.Content>
        <S.Logo source={{uri: BACKGROUNDIMAGE}} />
        <Icon name="ios-american-football" type="ionicon" color="#21ee21" />
        <S.Caption>Auto Escola</S.Caption>
        {/* <S.Subtitle>by Facebook</S.Subtitle> */}
      </S.Content>
    </S.Container>
  );
};

export default Card;
