import React from "react";
import {
 
  Dimensions,
  View,
  Linking 
} from "react-native";

import { ListItem } from 'react-native-elements'
import { Icon } from 'galio-framework'

const { width, height } = Dimensions.get("screen");


//Vista para Categorías de WebAbamobile

class WebAbamobile extends React.Component {

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
            title: 'Evento Demostración',
            icon: 'internet-explorer',
            goto:"https://abamobile.com/web/"
          }
      
      ]
   
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => Linking.openURL(
                    item.goto).catch(err => console.error("An error occurred", err))}>
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


export default WebAbamobile;
