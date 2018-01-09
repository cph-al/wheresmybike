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

const Application = StackNavigator({
        Home: { screen: Login},
        }, {
            navigationOptions: {
                header: false,
            }
    });
export default class App extends Component<{}> {
  render() {
    return (
        <Application />
  )}
}

