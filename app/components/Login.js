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
  Image,
  ActivityIndicator
} from 'react-native';
import {StackNavigator } from 'react-navigation';


export default class Login extends React.Component {
  state = {
    temp: 'Sign in',
    loading: null
  }

  Login() {
    this.setState({ loading: <ActivityIndicator size="large" color="blue" /> })
    fetch('https://wheresmybike.glitch.me/user')
        .then((res) => res.json())
        .then((data) => {
            if (data.username == this.state.username && data.password == this.state.password) {
                this.setState({ temp: "Access granted" })
                setTimeout(() => {
                    this.props.navigation.navigate('LoggedIn',{})
                    this.Unmount(), 1500
                })
            } else if (data.username == this.state.username) {
                this.setState({ temp: "Wrong password" })
                this.setState({ loading: null })
            }
        }
        ).catch((error) => {
            this.setState({ temp: "User does not exist" })
            this.setState({ loading: null })
        })
}

Unmount() {
    this.setState({ loading: null })
    this.setState({ temp: "Sign in" })
}
render() {
//    const { navigate } = this.props.navigation;
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
            autoCorrect={false}
            placeholderTextColor="#FFF"
            style={styles.input}
            onChangeText={(text) => this.setState({ username: text })}
            />
        <TextInput
            placeholder="Password"
            placeholderTextColor="#FFF"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => this.setState({ password: text })}
            />
        </View>
        <View>
        <TouchableOpacity onPress= { ()=> this.Login()}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= { ()=> this.props.navigation.navigate('SignUp')}>
        <Text style={styles.buttonTexto}>SIGN UP</Text>
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