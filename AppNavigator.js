import React, { Component } from 'react';
import LoginPage from './src/screens/login';
import HomePage from './src/screens/home'
import DescriptionPage from './src/screens/description';
import RequestPage from './src/screens/request';
import CalendarPage from './src/screens/calendar'



import {
    createStackNavigator,
    createAppContainer

  } from 'react-navigation';



  const AppNavigator = createStackNavigator({

    Login: {
        screen: LoginPage
      
    },
      Home: {
        screen: HomePage
      },
      Description: {
        screen: DescriptionPage
      },
      Calendar: {
        screen: CalendarPage
      },
      Request: {
        screen: RequestPage
      }
     
   
}




);
const Container = createAppContainer(AppNavigator);



export default Container;