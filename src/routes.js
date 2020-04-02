import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpConfirm from './pages/SignUpConfirm';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmForgotPassword from './pages/ConfirmForgotPassword';

import Dashboard from './pages/Dashboard';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
          SignUpConfirm,
          ForgotPassword,
          ConfirmForgotPassword,
        }),
        App: createStackNavigator(
          {
            Dashboard,
          },
          {
            headerMode: 'none',
          }
        ),
      },

      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
