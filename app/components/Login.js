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
} from 'react-native';
import {StackNavigator } from 'react-navigation';


export default class Login extends Component<> {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
/*
    componentDidMount() {
       this._loadInitialState().done();
    }
    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value)!== null {
            this.props.navigation.navigate 'P');
        }
    }*/
  render() {
     return (
     <View style={styles.container}>

        <TextInput
            placeholder="Username or Email"
            placeholderTextColor="#FFF"
            style={styles.input}
            />
        <TextInput
            placeholder="Password"
            placeholderTextColor="#FFF"
            secureTextEntry
            style={styles.input}
            />

        <TouchableOpacity onPress={() => this.props.navigate('Homepage')}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.buttonTexto}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
       );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    input: {
        width: 300,
        backgroundColor: '#3aa821',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 10,
        textAlign: 'center',
        opacity: 0.5
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
        textDecorationLine: 'underline'
    },
    buttonTexto: {
        textAlign: 'center',
        fontWeight: '800',
        color: '#FFF',
        padding: 20,
        opacity: 0.5,
        fontSize: 12
    }
});