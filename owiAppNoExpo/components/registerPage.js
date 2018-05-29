import React from 'react';
import { Container, Header, Content, Input, Item, Body, Title, Left , Button, Icon, Text, Form, Toast} from 'native-base';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import { Image, StyleSheet,  Alert, View, ImageBackground, Platform, TouchableHighlight} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showToast: true
    };
  }
  
  _onPressButton() {
    Actions.performancePage()
  }
  
  _onPressBackButton() {
    Actions.pop()
    Actions.login()
  }
  
  _onPressHelpButton() {
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
      <Row>
      <Col>
      <Item>
      <Input placeholder='E-mail' keyboardType='email-address' clearButtonMode='always'/>
      </Item>
      </Col>
      </Row>
      <Row size={0.1}></Row>
      <Row>
      <Col>
      <Item >
      <Input placeholder='Numéro de série' visible-password='false' secureTextEntry={true} clearButtonMode='always' onFocus={()=> Toast.show({
              text: 'Le numéro de série se trouve sous votre matelas, celui-ci est composé de 4 chiffres et 1 lettre. Il vous sera indispensable par la suite pour vous connecter.',
              position: 'bottom',
              buttonText: 'X',
              type: 'warning'
            })}/>
      </Item>
      </Col>
      </Row>
      <Row size={0.1}></Row>
      <Row size={1}>
      <Col size={20}></Col>
      <Col size={60}>
      <Button block warning onPress={this._onPressButton}><Text>Valider</Text></Button>
      </Col>
      <Col size={20}></Col>
      </Row>
      </Col>
      <Col size={20}/>
      </Row>
      <Row size={20}>
      </Row>
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

  },
});
