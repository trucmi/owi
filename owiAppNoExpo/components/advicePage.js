import React from 'react';
import {  Container, Header, Content, Footer, View, FooterTab, Button, Icon, Text, TouchableOpacity} from 'native-base';
import { Actions } from 'react-native-router-flux';
import PerformancePage from './performancePage';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Image, Alert, Dimensions, ImageBackground} from 'react-native';
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

import { Text as SvgText } from 'react-native-svg';

var {height, width} = Dimensions.get('window');

export default class AdvicePage extends React.Component {
    constructor(props) {
	super(props);
    }
    
    _onPressPerf()
    {
	Actions.performancePage()
	    }

    _onPressDisconnect() {
	Actions.login()
    }

    _displayAdvices()
    {
	const datas =
	    [
	     {
		 date:"08/01/1997",
		 title: "POSITIONS SEXUELLES",
					title1: "POSITIONS",
					title2: "SEXUELLES",
					subtitle: "Boostez vos réserves d\'énergies",
					urlCard: "https://owi.azurewebsites.net/img-appli/Image1.png",
					url:"file://components/img/img1.jpg",
					text:"Avec OWI, pas de craintes sur la fragilité de votre matelas ! Vos enfants pourront sauter, s’extasier afin de créer de l’électricité pour illuminer votre foyer. Jeu de polochons, pirouettes sur le lit, tous les interdits sont permis !",
					info: "40 % de plus",
				},
				{
					date:"08/01/1997",					
					title: "PLAYLIST LOVE",
					title1: "PLAYLIST",
					title2: "LOVE",
					subtitle: "Au rythme de vos envies",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image2.png",
					url:"file://components/img/img1.jpg",
					info: "20 % de plus",
				},
				{
					date:"08/01/1997",					
					title: "À VOS ENFANTS !",
					title1: "À VOS",
					title2: "ENFANTS",
					subtitle: "Faire sauter ses enfants sur le lit",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image3.png",
					url:"file://components/img/img3.jpg",
					info: "50 % de plus",
				},

				{
					date:"08/01/1997",					
					title: "À VOS ENFANTS !",
					title1: "À VOS",
					title2: "ENFANTS",
					subtitle: "Faire sauter ses enfants sur le lit",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image1.png",
					url:"",
					info: "40 % de plus",
				},
				{
					date:"08/01/1997",					
					title: "À VOS ENFANTS !",
					title1: "À VOS",
					title2: "ENFANTS",
					subtitle: "Faire sauter ses enfants sur le lit",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image2.png",
					url:"",
					info: "40 % de plus",
				},

		];
			
			return datas.map((item, index) => {
				return (
					<View key={index} style={{
						flexDirection: 'row',
						height: 130,
						padding: 20,
						top: 30,
						position:'relative',
					}}>
					<Button key={index} transparent onPress={()=> Actions.inside({data: item})}>
					<Text key={index} style={{position:'absolute',left:1, zIndex:2, top:-15, color:'white', fontWeight:'bold'}}>{item.title}</Text>
					<Text key={index} style={{position:'absolute',left:1, zIndex:2, top:3, color:'white'}}>{item.subtitle}</Text>
					<Text key={index} style={{position:'absolute',right:10,zIndex:2, top:40, color:'white', borderWidth:3, borderRadius:5, borderColor:'#ffce00', backgroundColor:'#ffce00' }}>{item.info}</Text>
					

					<Image key={index} style={{width: width-40, height: 100, borderRadius:5}} source={{uri: item.urlCard}}/>
					
					</Button>

					</View>
				)
			})
	}

  render() {
    return (
      <Grid>
<Row size={23} name='titre-boutons' backgroundColor='#fff'>
<Svg
    height="200"
    width={width}
>
    <Polygon
        points= "0,0 0,150 430,110 430,0"
        fill="#e5223a"
        strokeWidth="1"
    />
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
    >CONSEILS</SvgText>
</Svg>
</Row>

<Row size={10} backgroundColor='#fff'>
<Col>
<Row size={21}/>
<Row size={79}>
<Col size={10}/>
<Col size={37.5}>
<Button rounded block info onPress={this._onPressPerf}>
      <Text style={{color: '#ffce00'}}>Performances</Text>
    </Button>
</Col>
<Col size={5}/>
<Col size={37.5}>
<Button rounded block warning>
      <Text >Conseils</Text>
    </Button>
</Col>
<Col size={10}/>
</Row>
</Col>
</Row>




<Row size={100-10-7-23} backgroundColor='#fff' name='conseils'>
<Col>
<Content>
{this._displayAdvices()}
</Content>

</Col>
</Row>
<Button full warning onPress={this._onPressDisconnect}><Text>Se déconnecter</Text></Button>
</Grid>
    );
  }
}
