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

const Application = StackNavigator({
        Home: { screen: Login},
        LoggedIn: { screen: LoggedIn},
        SignUp: {screen: SignUp}
        }, {
            navigationOptions: {
                header: false,
            }
    });
export default class App extends React.Component<{}> {
  render() {
    return (
        <Application />
  )}
}

