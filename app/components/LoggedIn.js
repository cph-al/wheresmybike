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


export default class LoggedIn extends React.Component<> {
static navigationOptions = {
    title: 'LoggedIn',
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
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}> Placér din cykel</Text>
              </TouchableOpacity>
             </View>
             
            <View style={styles.container}> 
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}> Hvor er min cykel?</Text>
              </TouchableOpacity>
            </View>
             
            <View style={styles.container}> 
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}> Find min cykel</Text>
              </TouchableOpacity> 
            </View>
             
            <View style={styles.container}> 
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}> Om os </Text>
              </TouchableOpacity>
            </View>
             
            <View style={styles.container}> 
              <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}> Kontakt </Text>
              </TouchableOpacity>
            </View>
              
            <View style={styles.ndcontainer}>
              <TouchableOpacity style={styles.buttonContainer} onPress= { ()=> navigate('Home')}>
              <Text style={styles.buttonText}> Log ud </Text>
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
        marginTop: 5,
        marginLeft: 55,
        marginRight: 55,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1.5,

    },
    ndcontainer: {
        marginTop: 30,
        marginLeft: 55,
        marginRight: 55,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
    },
    buttonContainer: {
        backgroundColor: '#3aa821',
        paddingVertical: 15,
        padding: 1,
        width: 247,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '800',
        color: '#FFF',
        padding: 1,
        fontSize: 14,
        opacity: 2,
        //textDecorationLine: 'underline'
    },
});