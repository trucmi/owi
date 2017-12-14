import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, StyleProvider} from 'native-base';
import PouchDB from 'pouchdb-react-native';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
const localDB = new PouchDB('owi');
const remoteDB = new PouchDB('http://localhost:5984/owi');
import { Image, StyleSheet,  Alert, View, ImageBackground} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Video from 'react-native-video';

export default class Login extends React.Component {
  constructor() {
    super();
    this._onPressConnect.bind(this, false);
    this._onPressRegister.bind(this, false);
  }

  _onPressConnect()
  {
    Actions.pop()
    Actions.connectPage()
  }

  _onPressRegister()
  {
    Actions.pop()    
    Actions.registerPage()
  }

  render() {
    return (
      <Container>
        <Grid>
          <Row size={93} backgroundColor={'#ffce00'}>
          <Video
          repeat
          resizeMode='cover'
          source={require('./broadchurch.mp4')}
          muted={true}
          onLoadStart={this.loadStart} // Callback when video starts to load 
          onLoad={this.setDuration}    // Callback when video loads 
          onProgress={this.setTime}    // Callback every ~250ms with currentTime 
          onEnd={this.onEnd}           // Callback when playback finishes 
          onError={this.videoError}    // Callback when video cannot be loaded   
          style={styles.backgroundVideo}
          />
          </Row>
          <Row size={7} backgroundColor={'#ffce00'}>
          <Col>
          <Button full warning onPress={this._onPressConnect}><Text> Se connecter </Text></Button>        
          </Col>
          </Row>
          </Grid>
      </Container>
    );
    this.player.presentFullscreenPlayer()
    this.player.seek(0)
  }
}

const styles = StyleSheet.create({
  container: {
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
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
