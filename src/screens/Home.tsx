import * as React from 'react';
import {useState} from 'react';
import {Button, Text, View} from 'react-native';

import GetLocation, {Location} from 'react-native-get-location';
import Card from '../components/Card';

type HomeProps = {
  setTabTimer: () => void;
};

const Home = ({setTabTimer}: HomeProps) => {
  const [locationNow, setLocationNow] = useState<Location>();
  GetLocation.getCurrentPosition({
    enableHighAccuracy: false,
    timeout: 60000,
  })
    .then(location => {
      setLocationNow(location);
    })
    .catch(error => {
      const {code, message} = error;
      // console.warn(code, message);
    });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{locationNow?.altitude}</Text>
      <Text>{locationNow?.latitude}</Text>
      <Text>{locationNow?.longitude}</Text>
      <Text>{locationNow?.accuracy}</Text>
      <Text>{locationNow?.bearing}</Text>
      <Text>{locationNow?.course}</Text>
      <Text>{locationNow?.provider}</Text>
      <Text>{locationNow?.speed}</Text>
      <Text>{locationNow?.time}</Text>
      <Text>{locationNow?.verticalAccuracy}</Text>
      <Button title="dada" onPress={setTabTimer} />
      <Card localName="Auto Escola" localNumber={1} />
      <Card localNumber={2} />
    </View>
  );
};

export default Home;
