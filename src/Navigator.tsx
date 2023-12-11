process.env.TZ = 'America/Sao_Paulo';

import * as React from 'react';
import {NavigationContainer, ParamListBase, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect, useState} from 'react';
import Home, { storeData } from './screens/Home';

import Icon from 'react-native-vector-icons/Ionicons';
import Chat from './screens/Chat';
import DateScreen from './screens/Date';
import AsyncStorage from '@react-native-async-storage/async-storage';


const mapperRouteIcon = (name: string) => {
  switch (name) {
    case 'Locais 📍':
      return 'location';
    case 'Data de namoro ❤️':
      return 'calendar';
    case 'Primeira conversa ❤️':
      return 'chatbubble-ellipses';
    default:
      return 'location';
  }
};

const Tab = createBottomTabNavigator();

function CustomIcon(color: string, size: number, route: RouteProp<ParamListBase, string>) {
  return (
    <Icon
      name={mapperRouteIcon(route.name)}
      size={size}
      color={color}
    />
  );
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    return null;
  }
};


function Tabs() {
  const [othersTabs, setOtherTabs] = useState(false);

  useEffect(() => {

    const asyncFunction = async () => {
      const localAutoEscola = await getData('autoEscola');
      const localDbb = await getData('dbb');
      const localPraca = await getData('praca');
      const localJeronimo = await getData('jeronimo');
      let localApartamento = await getData('apartamento');
      const datingDate = await getData('datingDate');

      !localAutoEscola && await storeData('autoEscola', true);
      !localDbb && await storeData('dbb', true);
      !localPraca && await storeData('praca', true);
      !localJeronimo && await storeData('jeronimo', true);
      !localApartamento && await storeData('apartamento', true);
      !datingDate && await storeData('datingDate', new Date('2023-12-09T16:50:00.000Z')); // eh 17:50, mas deixei pro calculo

      localApartamento = await getData('apartamento');

      localApartamento === 'true' && setOtherTabs(true);
    };

    asyncFunction();


  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Locais 📍"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => CustomIcon(color, size, route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Locais 📍"
        children={() => <Home setOtherTabs={() => setOtherTabs(true)} />}
        options={{
          tabBarLabel: 'Locais',
        }}
      />
      {othersTabs && (
        <>
          <Tab.Screen
            name="Primeira conversa ❤️"
            component={Chat}
            options={{
              tabBarLabel: 'Primeira conversa',
            }}
          />
          <Tab.Screen
            name="Data de namoro ❤️"
            component={DateScreen}
            options={{
              tabBarLabel: 'Data de namoro',
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
