import React from 'react';
import {  Container, Header, Content, Footer, View, FooterTab, Button, Icon, Text, TouchableOpacity} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PerformancePage from './performancePage';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Alert, Dimensions} from 'react-native';

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
            <Grid backgroundColor='blue'>
            
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
        href={require('./img/img3.jpg')}
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
            
            <Row size={40} backgroundColor='blue'>
            <Text style={{color: 'grey', fontSize:24, top:200, marginHorizontal:30}}>{this.props.data.text}</Text>
            <Button rounded block warning style={{right:200, top: 100}} >
            <Text style={{fontWeight:'bold'}}>{this.props.data.date}</Text>
            </Button>
            </Row>
            </Grid>
            
        );
    }
}