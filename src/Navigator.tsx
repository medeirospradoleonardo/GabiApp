import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer, ParamListBase, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Home from './screens/Home';

import Icon from 'react-native-vector-icons/Ionicons';
import Chat from './screens/Chat';

const mapperRouteIcon = (name: string) => {
  switch (name) {
    case 'Home':
      return 'home';
    case 'Calendar':
      return 'calendar';
    case 'Chat':
      return 'chatbubble-ellipses';
    default:
      return 'home';
  }
};

function Timer() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Timer!</Text>
    </View>
  );
}

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


function MyTabs() {
  const [tabTimer, setTabTimer] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => CustomIcon(color, size, route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        children={() => <Home setTabTimer={() => setTabTimer(!tabTimer)} />}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      {tabTimer && (
        <>
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={{
              tabBarLabel: 'Chat',
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Timer}
            options={{
              tabBarLabel: 'Calendar',
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
      <MyTabs />
    </NavigationContainer>
  );
}
