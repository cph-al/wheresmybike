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
export default class Login extends Component<{}> {

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
        <View style={styles.wrapper>



                <Text style={styles.header}> - LOGIN - </Text>

                <TextInput
                    style={styles.textInput} placeholder="Username & Email"
                    onChangeText= { (username) =this.setState ({username}) }
                    underlineColorAndroid='transparent'
                 />
                 <TextInput
                     style={styles.textInput} placeholder="Password"
                     onChangeText= { (username) =this.setState ({password}) }
                     underlineColorAndroid='transparent'
                  />
            </View>

        } );
}

const styles = StyleSheet.create({
     open: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
     },
     welcome: {
       fontSize: 20,
       textAlign: 'center',
       margin: 10,
     },
     instructions: {
       textAlign: 'center',
       color: '#333333',
       marginBottom: 5,
     },
     wrapper: {
     flex: 1
     }

   });
