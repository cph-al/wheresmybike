import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import {StackNavigator } from 'react-navigation';
import Login from './app/components/Login'
import LoggedIn from './app/components/LoggedIn';
import SignUp from './app/components/SignUp';
import maps from './app/components/maps';
import FindBike from './app/components/FindBike';
import { PermissionsAndroid } from 'react-native';


const Application = StackNavigator({
        Home: { screen: Login},
        LoggedIn: { screen: LoggedIn},
        SignUp: {screen: SignUp},
        maps: {screen: maps},
        findbike: {screen: FindBike}
        }, {
            navigationOptions: {
                header: false,
            }
    });
async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.ACCESS_FINE_LOCATION,
      {
        'title': "WHERE'S MY BIKE ",
        'message': "Where's my bike would like to use your location"
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Location enabled")
    } else {
      console.log("Location denied")
    }
  } catch (err) {
    console.warn(err)
  }
}
export default class App extends React.Component {
  render() {
    return (
        <Application />
  )}
}

