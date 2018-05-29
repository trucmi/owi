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
		 date:"8 décembre 2018",
		 title: "POSITIONS SEXUELLES",
					title1: "POSITIONS",
					title2: "SEXUELLES",
					subtitle: "Boostez vos réserves d\'énergies",
					urlCard: "https://owi.azurewebsites.net/img-appli/Image1.png",
					text: "Les positions du Kamasutra étaient autrefois réservées aux connaisseurs mais aujourd'hui, tout le monde peut avoir accès au nirvana ! Alors testez ces positions et devenez le roi et/ou la reine du lit !",
					info: "40 % de plus",
					image : "https://owi.azurewebsites.net/img-appli/img1.png"
				},
				{
					date:"8 Novembre 2018",					
					title: "PLAYLIST LOVE",
					title1: "PLAYLIST",
					title2: "LOVE",
					subtitle: "Au rythme de vos envies",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image2.png",
					text: "",
					info: "20 % de plus",
					image: "https://owi.azurewebsites.net/img-appli/img2.png"
				},
				{
					date:"8 Septembre 2018",					
					title: "À VOS ENFANTS !",
					title1: "À VOS",
					title2: "ENFANTS",
					subtitle: "Faire sauter ses enfants sur le lit",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image3.png",
					text: "Avec OWI, pas de craintes sur la fragilité de votre matelas ! Vos enfants pourront sauter, s’extasier afin de créer de l’électricité pour illuminer votre foyer. Jeu de polochons, pirouettes sur le lit, tous les interdits sont permis !",
					info: "50 % de plus",
					image:"https://owi.azurewebsites.net/img-appli/img3.png"
				},

				{
					date:"8 Août 2018",					
					title: "LES FELINS EN AVANT",
					title1: "LES FELINS",
					title2: "EN AVANT",
					subtitle: "Amusez votre félin !",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image4.png",
					text: "Une fatigue passagère ? Pas le temps, ni l’envie ce soir ? Amusez votre chat sur votre lit pour qu’il fasse des rebonds afin de créer de l’énergie ! La petite astuce : Accrochez un de ses jouets en suspension pour que votre chat puisse s’amuser au gré de ses envies !",
					info: "30 % de plus",
					image:"https://owi.azurewebsites.net/img-appli/img4.png"
				},
				{
					date:"08 Juillet 2018",					
					title: "JEUX DE LIT !",
					title1: "JEUX",
					title2: "DE LIT",
					subtitle: "Liste non exhaustive des petits jeux",					
					urlCard: "https://owi.azurewebsites.net/img-appli/Image5.png",
					text: "Batailles de polochons, prises de catch, luttes, peu importe votre jeu l’important c’est de créer de l’énergie ! Alors, on se donne à coeur joie et on s’amuse !",
					info: "60 % de plus",
					image:"https://owi.azurewebsites.net/img-appli/img3.png"
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
					<Text style={{position:'absolute',left:1, zIndex:2, top:-15, color:'white', fontWeight:'bold'}}>{item.title}</Text>
					<Text style={{position:'absolute',left:1, zIndex:2, top:3, color:'white'}}>{item.subtitle}</Text>
					<Text style={{position:'absolute',right:10,zIndex:2, top:40, color:'white', borderWidth:3, borderRadius:5, borderColor:'#ffce00', backgroundColor:'#ffce00' }}>{item.info}</Text>


					<Image style={{width: width-40, height: 100, borderRadius:5}} source={{uri: item.urlCard}}/>
					
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