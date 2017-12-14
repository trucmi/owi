import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import RegisterPage from './components/registerPage';
import PerformancePage from './components/performancePage';
import AdvicePage from './components/advicePage';
import Login from './components/login';
import InsideAdvicePage from './components/insideAdvicePage';
import ConnectPage from './components/connectPage';
import SplashScreen from './components/splashScreen';
import owiTheme from './components/native-base-theme/variables/owiTheme';
import getTheme from './components/native-base-theme/components'
import {StyleProvider} from 'native-base';
import { Root } from "native-base";

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <StyleProvider style={getTheme(owiTheme)}>
    <Root>
    <Router>
    <Stack key="root">
      <Scene key="splash" component={SplashScreen} initial={true} hideNavBar= "true"/>
      <Scene key="login" component={Login} hideNavBar= "true"/>
      <Scene key="connectPage" component={ConnectPage} hideNavBar= "true"/>
      <Scene key="registerPage" component={RegisterPage} hideNavBar= "true"/>
      <Scene key="performancePage" component={PerformancePage} hideNavBar= "true"/>
      <Scene key="advicePage" component={AdvicePage} hideNavBar= "true"/>
      <Scene key="inside" component={InsideAdvicePage} hideNavBar= "true"/>
    </Stack>
    </Router>
    </Root>
    </StyleProvider>

  );
}

export default App;
