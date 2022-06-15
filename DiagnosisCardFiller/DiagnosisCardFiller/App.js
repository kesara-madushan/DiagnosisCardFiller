import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './src/header';
import Footer from './src/footer';
import PersonalDetails from './src/personal-details';
import Login from './src/login';
import HeaderLogin from './src/header-login';
import Page2 from './src/page2';

const Stack = createNativeStackNavigator();

const App = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Personal Details" component={PersonalDetails} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
