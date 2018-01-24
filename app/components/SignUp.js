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
import axios from 'axios';


export default class SignUp extends Component {
// static navigationOptions = {
//     title: 'SignUp',
//   };
    state = {
        temp: "Sign up"
    }

    newUser() {
        if (this.state.password1 == this.state.password2 && this.state.fullName !== undefined) {
            this.props.navigation.navigate('LoggedIn', {})
            return axios.post('https://wheresmybike.glitch.me/user/', {
                fullName: this.state.fullName,
                password: this.state.password1,
                latitude: null,
                longitude: null
            })
                .then(res => res.data)
        } else {
            this.setState({ temp: "Passwords did not match or you are missing some of the fields" })
        }
    } 
    render() {
    //const { navigate } = this.props.navigation;
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
            onChangeText={(text) => this.setState({ fullName: text })}
            placeholderTextColor="#FFF"
            style={styles.input}
            />
        <TextInput
            placeholder="Password"
            onChangeText={(text) => this.setState({ password1: text })}
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#FFF"
            style={styles.input}
            />
            <TextInput
            placeholder="Repeat Password"
            onChangeText={(text) => this.setState({ password2: text })}
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#FFF"
            style={styles.input}
            />
        <TouchableOpacity onPress= { ()=> this.newUser()}
        
        >
        <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
 </View>

       );
  }
};               
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