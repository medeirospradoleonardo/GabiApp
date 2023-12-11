import React from 'react';
import { View, Text} from 'react-native';

import * as S from './styles';

type DateContainerProps = {
  datingDate: Date | null
  years: number
  days: number
  hours: number
  minutes: number
  seconds: number
}


const DateContainer = ({ datingDate, years, days, hours, minutes, seconds }: DateContainerProps) => {
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date: Date | null) {
    if (!date){
      return;
    }

    const d = new Date(date),
      year = d.getFullYear();
    let day = '' + d.getDate(),
      month = '' + (d.getMonth() + 1);

    if (month.length < 2) {month = '0' + month;}
    if (day.length < 2) {day = '0' + day;}

    return [day, month, year].join('/');
  }

    return (
      <>
      <S.Description><Text style={{color: '#FFF', fontSize: 20 }}>Data de namoro 📅</Text></S.Description>
      <S.Date><Text style={{color: '#FFF', fontSize: 30 }}>{formatDate(datingDate)}</Text></S.Date>
      <S.Description><Text style={{color: '#FFF', fontSize: 20 }}>Contagem 🕗</Text></S.Description>
      <S.Container>
        <S.CardContainer>
        <S.Card><Text style={{color: '#FFF', fontSize: 30 }}>{padTo2Digits(years)}</Text></S.Card>
        <S.CardLabel><Text style={{color: '#FFF', fontSize: 15 }}>Anos</Text></S.CardLabel>
        </S.CardContainer>

        <S.CardContainer>
        <S.Card><Text style={{color: '#FFF', fontSize: 30 }}>{padTo2Digits(days)}</Text></S.Card>
        <S.CardLabel><Text style={{color: '#FFF', fontSize: 15 }}>Dias</Text></S.CardLabel>
        </S.CardContainer>

        <S.CardContainer>
        <S.Card><Text style={{color: '#FFF', fontSize: 30 }}>{padTo2Digits(hours)}</Text></S.Card>
        <S.CardLabel><Text style={{color: '#FFF', fontSize: 15 }}>Horas</Text></S.CardLabel>
        </S.CardContainer>

        <S.CardContainer>
        <S.Card><Text style={{color: '#FFF', fontSize: 30 }}>{padTo2Digits(minutes)}</Text></S.Card>
        <S.CardLabel><Text style={{color: '#FFF', fontSize: 15 }}>Minutos</Text></S.CardLabel>
        </S.CardContainer>
        <S.CardContainer>

        <S.Card><Text style={{color: '#FFF', fontSize: 30 }}>{padTo2Digits(seconds)}</Text></S.Card>
        <S.CardLabel><Text style={{color: '#FFF', fontSize: 15 }}>Segundos</Text></S.CardLabel>
        </S.CardContainer>
    </S.Container>
    </>
    );
};

export default DateContainer;
