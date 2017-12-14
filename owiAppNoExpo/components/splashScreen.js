import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Container} from 'react-native';
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
      <View style={styles.container}>
            
          <Grid>
          <Row size={40}></Row>
          <Row size={15}>
          <Col size={35}></Col>
          <Col size={60}>
          <FitImage
          source={require('./img/owi.png')}
          originalWidth={765}
          originalHeight={483}
          style={styles.fitImageWithSize}
          />
          </Col>
          <Col size={20}></Col>
          </Row>
          <Row size={42}></Row>
          </Grid>
              
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e5223a',
    flex:1,
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
