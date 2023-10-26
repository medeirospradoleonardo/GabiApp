import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Home from './screens/Home';

import Icon from 'react-native-vector-icons/Ionicons';

const mapperRouteIcon = {
  Home: 'home',
  Timer: 'alarm',
};

function Timer() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Timer!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [tabTimer, setTabTimer] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Icon
              name={mapperRouteIcon[route.name]}
              size={size}
              color={color}
            />
          );
        },
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
        <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            tabBarLabel: 'Timer',
          }}
        />
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
