import * as React from 'react';
import {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

import GetLocation, {Location} from 'react-native-get-location';
import Card from '../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeProps = {
  setTabTimer: () => void;
};

const Home = ({setTabTimer}: HomeProps) => {
  const [locationNow, setLocationNow] = useState<Location | null>(null);

  const getLocation = () => {
    return GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 60000,
    })
      .then(location => {
        return location;
      })
      .catch(error => {
        return null;
      });
  };


  const storeData = async (value: Date) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('datingDate', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000', fontSize: 20 }}>Altitude: {locationNow?.altitude}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Latitude: {locationNow?.latitude}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Longitude: {locationNow?.longitude}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Accuracy: {locationNow?.accuracy}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Bearing: {locationNow?.bearing}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Course: {locationNow?.course}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Provider: {locationNow?.provider}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Speed: {locationNow?.speed}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>Time: {locationNow?.time}</Text>
      <Text style={{color: '#000', fontSize: 20 }}>VerticalAccuracy: {locationNow?.verticalAccuracy}</Text>
      <Button title="Atualizar" color={'tomato'} onPress={async () => {
        const location = await getLocation();
        setLocationNow(location);
        // setTabTimer();
        // storeData(new Date('2023-11-27T00:28:51.940Z'));
      }} />
      {/* <Card localName="Auto Escola" localNumber={1} />
      <Card localNumber={2} /> */}
    </View>
  );
};

export default Home;
