import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import {StackNavigator } from 'react-navigation';


export default class SignUp extends React.Component<> {
static navigationOptions = {
    title: 'SignUp',
  };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

  render() {
    const { navigate } = this.props.navigation;
     return (
      <View style={styles.outer}>
      <View style={styles.container}>
      <Image
            style={styles.backgroundImage}
            source={require('../Images/loogoo.png')}
      />
      <Text style={styles.logoText}> WHERE'S  MY BIKE </Text>
        <TextInput
            placeholder="Username"
            placeholderTextColor="#FFF"
            style={styles.input}
            />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#FFF"
            style={styles.input}
            />

        <TextInput
            placeholder="Password"
            placeholderTextColor="#FFF"
            secureTextEntry
            style={styles.input}
            />
          <TextInput
            placeholder="Repeat Password"
            placeholderTextColor="#FFF"
            secureTextEntry
            style={styles.input}
            />
            </View>
            <View>
        <TouchableOpacity onPress= { ()=> navigate('LoggedIn')}>
        <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
 </View>

       );
  }
}

const styles = StyleSheet.create({
    outer: {
      flex: 1,
      backgroundColor: '#8fad88',
      justifyContent: 'center',
      opacity: 0.8
    },
    container: {
        marginTop: 20,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
      alignItems: 'center',
      padding: 20,
      fontSize: 24,
      justifyContent: 'center',
      color: '#fff'
    },
    input: {
        width: 300,
        backgroundColor: '#3aa821',
        marginBottom: 5,
        color: '#FFF',
        paddingHorizontal: 10,
        textAlign: 'center',
        opacity: 0.5,
        
    },
    buttonContainer: {
        backgroundColor: '#3aa821',
        paddingVertical: 15,
        padding: 1,

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '800',
        color: '#FFF',
        padding: 20,
        fontSize: 18,
        //textDecorationLine: 'underline'
    },
    buttonTexto: {
        textAlign: 'center',
        fontWeight: '800',
        color: '#FFF',
        padding: 20,
        opacity: 0.5,
        fontSize: 12
    },
    backgroundImage: {
        flex: 0,
        width: 750,
        height: 100,
        resizeMode: 'cover'
    },
});