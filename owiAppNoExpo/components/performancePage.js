import React from 'react';
import { Container, Item, Header, Content, Footer, FooterTab, Button, Icon, Text, Picker, Platform} from 'native-base';
import { Actions } from 'react-native-router-flux';
import AdvicePage from './advicePage';
import { Col, Row, Grid } from "react-native-easy-grid";
import ProgressCircle from 'react-native-progress-circle'
import { Bar}  from 'react-native-pathjs-charts';
import { View, Dimensions} from 'react-native';
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
} from 'react-native-svg';

var {height, width} = Dimensions.get('window');

export default class PerformancePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }

  onValueChange1(value: string) {
    this.setState({
      selected1: value
    });
  }

  _onPressDisconnect() {
    Actions.login()
  }

  _onPressAdvice() {
    Actions.advicePage()
  }

  render() {
    let data = [
      [{
        "v": 0,
        "name": ""
      }],
      [{
        "v": 6,
        "name": "L"
      }],
      [{
        "v": 1,
        "name": "M"
      }],
      [{
        "v": 3,
        "name": "M"
      }],
      [{
        "v": 4,
        "name": "J"
      }],
      [{
        "v": 100,
        "name": "V"
      }],
      [{
        "v": 20,
        "name": "S"
      }],
      [{
        "v": 5,
        "name": "D"
      }],
      [{
        "v": 0,
        "name": ""
      }],
    ]

    let options = {
      width: 260,
      height: 170,
      margin: {
        top: 30,
        left: 20,
        bottom: 70,
        right: 20
      },
      color: '#ffce00',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: true,
          fill: '#ffffff'
        }
      },
      axisY: {
        max: 97,
        showAxis: false,
        showLines: false,
        showLabels: true,
        showTicks: false,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: true,
          fill: '#ffffff'
        }
      }
    }

    return (
      <Grid backgroundColor='#e5223a'>
      <Row size={33} name='titre-boutons'>
      <Col>
      <Row size={70}>
      <Svg
    height="200"
    width={width}
>
	<SvgText
        fill="#fff"
        fontSize="35"
        fontWeight="bold"
        x="50"
        y="20"
        textAnchor="start"
    >MES</SvgText>
	<SvgText
        fill="#fff"
        fontSize="38"
        fontWeight="bold"
        x="50"
        y="60"
        textAnchor="start"
    >PERFORMANCES</SvgText>
</Svg>
      </Row>

      <Row size={35} >
      <Col>
      <Row size={21}/>
      <Row size={79}>
      <Col size={10}/>
      <Col size={37.5}>
      <Button rounded block warning>
            <Text>Performances</Text>
          </Button>
      </Col>
      <Col size={5}/>
      <Col size={37.5}>
      <Button rounded block info onPress={this._onPressAdvice}>
            <Text style={{color: '#ffce00'}}>Conseils</Text>
          </Button>
      </Col>
      <Col size={10}/>
      </Row>

      </Col>
      </Row>
      
      </Col>

      </Row>



      <Row size={40} name='graphique'>
      <Col>

      <Row size={10}>
      <Col size={45}>
      <Col>
      <Row>
      <Col size={5}/>
      <Col size={100 -5}><Text style={{fontSize: 12, color:'#ffffff'}}>Taux d'énergie</Text></Col>
      </Row>
      <Row>
      <Col size={7}/>
      <Col size={100 -7}><Text style={{fontSize: 12, color:'#ffffff'}}>créée (en %)</Text></Col>
      </Row>
      </Col>
      </Col>

      <Col size={55}>
      <Picker
              mode="dropdown"
              headerBackButtonText="Retour"
              iosHeader="Sélection"
              headerStyle={{ backgroundColor: "#e5223a" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange1.bind(this)}
              textStyle={{ color: "#ffce00", fontSize: 12, bottom:10}}
            >
              <Item label="<Du 01/11/17 au 6/11/17>" value="key0" />
              <Item label="<Du 07/11/17 au 13/11/17>" value="key1" />
              <Item label="<Du 14/11/17 au 20/11/17>" value="key2" />
            </Picker>
      </Col>

      </Row>


      <Row size={90}>
      <Col size={10}/>
      <Col size={80}>
      <Bar data={data} options={options} accessorKey='v'/>
      </Col>
      </Row>
      </Col>
      </Row>


      <Row size={20} name='cercle'>
      <Col>
      <Row size={10} />
      <Row size={90} >
      <Col size={36}/>
      <Col size={100-36}>
      <ProgressCircle percent={30} radius={50} borderWidth={5} color="#ffce00" shadowColor="#f6f6f5" bgColor="#e5223a">
      <Text style={{ fontSize: 30 , color: '#f6f6f5'}}>{'30%'}</Text>
      </ProgressCircle>
      </Col>
      </Row>
      </Col>
      </Row>



      <Button full warning onPress={this._onPressDisconnect}><Text>Se déconnecter</Text></Button>
      </Grid>
    );
  }
}
