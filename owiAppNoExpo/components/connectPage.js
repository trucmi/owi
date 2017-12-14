import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, StyleProvider, Icon} from 'native-base';
import PouchDB from 'pouchdb-react-native';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
const localDB = new PouchDB('owi');
const remoteDB = new PouchDB('http://localhost:5984/owi');
import { Image, StyleSheet,  Alert, View, ImageBackground} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ConnectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
      syncStatus: '',
      username: '',
      password: ''
    };
  }
  
  _onPressConnect()
  {
    Actions.performancePage()
  }
  
  _onPressBackButton() {
    Actions.login()
  }
  render() {
    return (
      <ImageBackground source={require('./img/background-image.jpg')} style={styles.backgroundImage}>
      <Grid>
      <Row size={20}>
      <Button transparent onPress={this._onPressBackButton} large style={styles.customButton}>
      <Icon name='arrow-back' style={styles.arrowBack}/>
      </Button>
      </Row>
      <Row size={60}>
      <Col size={20}/>
      <Col size={60}>
      <Item>
      <Input placeholder='E-mail' keyboardType='email-address' clearButtonMode='always'/>
      </Item>
      <Row size={0.1}></Row>
      <Item >
      <Input placeholder='Numéro de série' visible-password='false' secureTextEntry={true} clearButtonMode='always'/>
      </Item>
      <Row size={0.1}></Row>
      <Row size={1}>
      <Col size={20}></Col>
      <Col size={60}>
      <Button block warning onPress={this._onPressConnect}><Text>Se connecter</Text></Button>
      </Col>
      <Col size={20}></Col>
      </Row>
      </Col>
      <Col size={20}/>
      </Row>
      <Row size={20}></Row>
      </Grid>
      </ImageBackground>
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
    width:50,
    height:50,
  },
  
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  
  arrowBack: {
    color: 'black',
  },

  customButton: {
    width: 50,
    height: 50,

  }
});
