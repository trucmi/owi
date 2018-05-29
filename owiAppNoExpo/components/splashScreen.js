import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, ImageBackground ,Container} from 'react-native';
import MainService from './services/mainservice';
import { Actions } from 'react-native-router-flux';
import { Thumbnail } from 'native-base';
import FitImage from 'react-native-fit-image';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    MainService.load(v => Actions.login());
  }

  render(){
    return (
      <ImageBackground source={require('./img/splashscreen.jpg')} style={styles.backgroundImage}>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e5223a',
    flex:1,
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  
  logoContainer: {
    alignItems:'center',
    flex: 1,
    justifyContent: 'center'
  },

  logo: {
    width:10,
    height:10,
  },

  fitImage: {
    borderRadius: 20,
  },

  fitImageWithSize: {
    height:5,
    width: 161,
  },
});
