import React from "react";
import {
 
  Dimensions,
  View,
  Linking 
} from "react-native";

import { ListItem } from 'react-native-elements'
import { Icon } from 'galio-framework'

const { width, height } = Dimensions.get("screen");


//Vista para Categorías de Información y Servicios

class InfoServices extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    const { navigation } = this.props;

    //Lista de categorías
    const list = [
        {
            title: 'Documentos',
            icon: 'list-alt',
            goto:"Documents"
          },
          {
            title: 'Web abamobile',
            icon: 'list-alt',
            goto:"WebAbamobile"
          },
    
        {
          title: 'Aplicaciones para eventos',
          icon: 'internet-explorer',
          goto:"http://aplicacionesparaeventos.com/index.php?lang=es"
        },
        {
            title: 'Encuesta tendencia 2019',
            icon: 'internet-explorer',
            goto:"http://aplicacionesparaeventos.com/web/front/encuestas/10/listado"
          },

          {
            title: 'NFCLeads',
            icon: 'internet-explorer',
            goto:"http://nfcleads.com/index.php?lang=es"
          },
          {
            title: 'weQuiz',
            icon: 'sticky-note-o',
            goto:"WeQuiz"
          },
      
      ]
   
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => item.title=="Aplicaciones para eventos"||item.title=="Encuesta tendencia 2019"||item.title=="NFCLeads"?Linking.openURL(
                    item.goto).catch(err => console.error("An error occurred", err)): navigation.navigate(item.goto) }>
                  <Icon name={item.icon} family="font-awesome" color='#4682B4' size={40}/>
                  <ListItem.Content>                 
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.title}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color='#4682B4'/>
                </ListItem>
              ))
            }
          </View>
   
    );
  }
}


export default InfoServices;
