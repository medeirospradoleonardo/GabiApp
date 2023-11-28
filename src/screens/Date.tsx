import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateContainer from '../components/DateContainer';

const DateComponent = ({  }) => {
  const [datingDate, setDatingDate] = useState < Date | null >(null);
  const [differenceDate, setDifferenceDate] = useState<number | null>(null);

  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        // console.log('Valor encontrado ' + value);
        return new Date(value.replaceAll('\"', ''));
      }
      return null;
    } catch (e) {
      // error reading value
      return null;
    }
  };


  useEffect(() => {

      setInterval(async () => {
        const dDate = await getData('datingDate');
        dDate && setDifferenceDate(new Date().getTime() - dDate?.getTime());
        dDate && setDatingDate(dDate);
        // datingDate && console.log(new Date());
        // datingDate && console.log(new Date().getTime() - datingDate?.getTime());
        // datingDate && console.log((new Date().getTime() - datingDate?.getTime()) % 60);
      }, 1000);


  }, []);

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <DateContainer
        datingDate={datingDate}
        years={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60 * 24 * 365))) || 0}
        days={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60 * 24))) || 0}
        hours={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60)) % 24) || 0}
        minutes={differenceDate && Math.floor((differenceDate / (1000 * 60)) % 60) || 0}
        seconds={differenceDate && (Math.round(differenceDate / 1000)) % 60 || 0}
        />
    </View>
    );
};

export default DateComponent;
