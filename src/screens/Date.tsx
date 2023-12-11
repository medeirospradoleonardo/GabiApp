import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, Image } from 'react-native';
import DateContainer from '../components/DateContainer';
import { getData } from '../Navigator';

const background = require('../assets/background.jpg');
const BACKGROUND_IMAGE = Image.resolveAssetSource(background).uri;

const DateComponent = ({ }) => {
  const [datingDate, setDatingDate] = useState<Date | null>(null);
  const [differenceDate, setDifferenceDate] = useState<number | null>(null);




  useEffect(() => {

    setInterval(async () => {
      const dDateString = await getData('datingDate');
      let dDate = null;
      if (dDateString) {
        dDate = new Date(dDateString.replaceAll('\"', ''));
      }
      dDate && setDifferenceDate(new Date().setHours(new Date().getHours() - 3) - dDate?.getTime());
      dDate && setDatingDate(dDate);
    }, 1000);


  }, []);

  return (
      <ImageBackground source={{ uri: BACKGROUND_IMAGE }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {datingDate ? (<DateContainer
            datingDate={datingDate}
            years={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60 * 24 * 365))) || 0}
            days={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60 * 24))) || 0}
            hours={differenceDate && Math.floor((differenceDate / (1000 * 60 * 60)) % 24) || 0}
            minutes={differenceDate && Math.floor((differenceDate / (1000 * 60)) % 60) || 0}
            seconds={differenceDate && (Math.round(differenceDate / 1000)) % 60 || 0}
          />) : <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color="tomato" />}

      </ImageBackground>

  );
};

export default DateComponent;
