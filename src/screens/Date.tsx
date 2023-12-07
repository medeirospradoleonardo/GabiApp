import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateContainer from '../components/DateContainer';
import { getData } from '../Navigator';

const DateComponent = ({  }) => {
  const [datingDate, setDatingDate] = useState < Date | null >(null);
  const [differenceDate, setDifferenceDate] = useState<number | null>(null);




  useEffect(() => {

      setInterval(async () => {
        const dDateString = await getData('datingDate');
        let dDate = null;
        if (dDateString){
          dDate = new Date(dDateString.replaceAll('\"', ''));
        }
        dDate && setDifferenceDate(new Date().getTime() - dDate?.getTime());
        dDate && setDatingDate(dDate);
      }, 1000);


  }, []);

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {datingDate ? (<DateContainer
        datingDate={datingDate}
        years={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60 * 24 * 365))) || 0}
        days={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60 * 24))) || 0}
        hours={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60)) % 24) || 0}
        minutes={differenceDate && Math.floor((differenceDate / (1000 * 60)) % 60) || 0}
        seconds={differenceDate && (Math.round(differenceDate / 1000)) % 60 || 0}
        />) : <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color="tomato" />}

    </View>
    );
};

export default DateComponent;
