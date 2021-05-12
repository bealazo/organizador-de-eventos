import React from "react";
import {
 
  Dimensions,
  View
 
} from "react-native";

import { ListItem, Icon } from 'react-native-elements'

const { width, height } = Dimensions.get("screen");


//Vista para Planos

class Blueprints extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    const { navigation } = this.props;

    //Lista de tipo de planos
    const list = [
        {
            title: 'General',
            icon: 'layers',
            goto:"General"
          },
          {
            title: 'Interior',
            icon: 'layers',
            goto:"Interior"
          },          
      ]
   
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => navigation.navigate(item.goto) }>
                  <Icon name={item.icon} size={40} color='#4682B4'/>
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


export default Blueprints;
