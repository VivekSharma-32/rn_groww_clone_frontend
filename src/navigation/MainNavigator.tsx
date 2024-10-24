import React from 'react';
import HomeScreen from '../screens/dashboard/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import EmailScreen from '../screens/auth/EmailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mergedStacks} from './ScreenCollections';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName="AuthVerificationScreen">
      {mergedStacks?.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;
