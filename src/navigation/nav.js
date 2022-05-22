import React, {useEffect, useState} from 'react';

import PasswordResetScreen from '../screens/passwordResetScreen';
import RegisterScreen from '../screens/registerScreen';
import LoginScreen from '../screens/loginScreen';
import ChangePasswordScreen from '../screens/changePassword/changePasswordScreen';
import CheckIdentityScreen from '../screens/checkIdentity/checkIdentityScreen';
import PreloaderScreen from '../screens/preloaderScreen/preloaderScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Nav = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name='Preloader' component={PreloaderScreen} options={{animation: 'none'}} />
              <Stack.Screen name='Login' component={LoginScreen} options={{animation: 'none'}} />
              <Stack.Screen name='Register' component={RegisterScreen} options={{animation: 'none'}} />
              <Stack.Screen name='PasswordReset' component={PasswordResetScreen} options={{animation: 'none'}} />
              <Stack.Screen name='CheckIdentity' component={CheckIdentityScreen} options={{animation: 'none'}} />
              <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} options={{animation: 'none'}} />
            </Stack.Navigator>
          </NavigationContainer>
      )
}

export default Nav