import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import MapViewDirections from 'react-native-maps-directions'
const axios = require('axios');
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.004;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const timer = require('react-native-timer');
let id = 0;
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const GOOGLE_MAPS_APIKEY = '...';
class DefaultMarkers extends React.Component {
static navigationOptions = {
    title: 'maps',
  };
  constructor(props) {
    super(props);

    this.state = {
      markers: [],

      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      coordinates: {
        latitude: 0,
        longitude:0  
      },
    }
  }
  watchID: ?number = null

updateLatLng(responseJson) {
  let cord = object.assign({}, this.state.coordinates); 
        cord.latitude = responseJson.latitude,
        cord.longitude = responseJson.longitude
        this.setState({
          cord: coordinates
          })
}
  componentWillMount() {
   function fetchMarkers() {
  fetch('https://wheresmybike.glitch.me/lat/')
      .then((response) => response.json())
      .then((data) => {
        updateLatLng(data)

      })
      .catch((error) => {
      console.log(error);
      })  
    }
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({ initialPosition: initialRegion })
      this.setState({ markerPosition: initialRegion })
    },
      (error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000, })
  

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA
      }

      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }
  postMarker(e) {
      return axios.post('https://wheresmybike.glitch.me/lat/', {
          latitude: this.state.markerPosition.latitude,
          longitude: this.state.markerPosition.longitude,
})
};
  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers.push(),
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),

        },
      ],
    });
    this.postMarker()
  }
  clearMarkers(e){
    this.setState({
      markers: []
      //...this.state.markers]
    });
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  render() {
     //var data = fetchMarkers()
     //console.log(data)
//   const coordinates = [{
//   latitude: 55.768548 ,
//   longitude: 12.503559,
// }];
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialPosition={this.state.initialRegion}
          region={this.state.initialPosition}
        >
          <MapView.Marker coordinate={this.state.coordinates}/>
          <MapView.Marker coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
               <View style={styles.marker} />
            </View>
          </MapView.Marker>
        <MapViewDirections
          origin = {this.state.initialPosition}
          destination = {this.state.coordinates}
          apikey = {"AIzaSyD-SDJ2cVwlJgqLgTHaU76SCxyJpzPDhOA"}
          strokeWidth = {4}
          strokeColor = "darkblue"
          mode = "walking"
          onError={(errorMessage) => {
            console.log('IGOTANERROR')
          }}
        />
        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.key}
            coordinate={this.state.markerPosition}
          >
            <View style={styles.radius}>
              <View style={styles.marker} />
            </View>
          </MapView.Marker>

          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={(e) => this.onMapPress(e)}
            style={styles.bubble}
          >
            <Text>Tap to place your bike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(e) => this.clearMarkers(e)}
            style={styles.bubble}
          >
            <Text>Pick up bike</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } 

}

DefaultMarkers.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  bubble: {
    backgroundColor: 'rgba(072,250,041,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = DefaultMarkers;