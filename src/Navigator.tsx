import * as React from 'react';
import {NavigationContainer, ParamListBase, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Home from './screens/Home';

import Icon from 'react-native-vector-icons/Ionicons';
import Chat from './screens/Chat';
import Date from './screens/Date';


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


function Tabs() {
  const [tabTimer, setTabTimer] = useState(true);

  return (
    <Tab.Navigator
      initialRouteName="Primeira conversa ❤️"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => CustomIcon(color, size, route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Locais 📍"
        children={() => <Home setTabTimer={() => setTabTimer(!tabTimer)} />}
        options={{
          tabBarLabel: 'Locais',
        }}
      />
      {tabTimer && (
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
            component={Date}
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
