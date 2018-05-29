import React from 'react';
import {  Container, Header, Content, Footer, View, FooterTab, Button, Icon, Text, TouchableOpacity} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PerformancePage from './performancePage';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Alert, Dimensions, StyleSheet} from 'react-native';

var {height, width} = Dimensions.get('window');
import { Text as SvgText } from 'react-native-svg';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
Stop,
ClipPath,
Image
} from 'react-native-svg';

export default class InsideAdvicePage extends React.Component {
    constructor(props) {
        super(props);  
    }
    
    render() {
        return (
            <Grid backgroundColor='#fff'>
            
            <Row size={53}>
            <Svg
    height={height}
    width={width}
>

    <Image
        x="0"
        y="10%"
        width={width}
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        opacity="1"
        href={require('./img/img1.jpg')}
        />

    <Polygon
        points= "0,0 0,185 430,140 430,0"
        fill="#e5223a"
        strokeWidth="1"
    />
   <SvgText
        fill="#fff"
        fontSize="40"
        fontWeight="bold"
        x="15%"
        y="5%"
        textAnchor="start"
    >{this.props.data.title1}</SvgText>
	<SvgText
        fill="#fff"
        fontSize="45"
        fontWeight="bold"
        x="15%"
        y="11%"
        textAnchor="start"
    >{this.props.data.title2}</SvgText>
</Svg>
            </Row>
            
            <Row size={100-53-8} backgroundColor='#fff'>
	    <Col>
	    <Row size={8}/>
	    <Row size={17}>


	    <Col size={5}/>
	    <Col size={5}>
	    <Button transparent onPress={() => Actions.pop()} large style={styles.customButton}>
	    <Icon name='arrow-back' style={styles.arrowBack}/>
	    </Button>
	    </Col>
	    <Col size={42}/>
	    <Col size={100-42-32}>
	    <Button rounded block warning><Text style={styles.date}>{this.props.data.date}</Text></Button>
</Col>
	    <Col size={5}/>
	    </Row>
	    <Row size={100-8-17}>
	    <Col size={6}/>
	    <Col size={88}>
	    <Content style={{top:20}}>
	    <Text style={styles.text}>{this.props.data.text}</Text>
</Content>
</Col>
   <Col size={6}/>
	    </Row>
	    </Col>
	    </Row>
	    <Button full warning onPress={() =>Actions.login()}><Text> Se déconnecter </Text></Button>
</Grid>            
        );
    }
}

const styles = StyleSheet.create({
	arrowBack: {
	    color: '#ffce00',
	},

	customButton: {
	    width: 50,
	    height: 50,
	    right:10

	},
	date: {
	    fontSize:10
	},
	text: {
	    marginHorizontal:4,
	    color: 'grey',
	    fontSize:20,
	}
})