import React from "react";
import {
 
  Dimensions,
  View
 
} from "react-native";

import { ListItem, Icon } from 'react-native-elements'

const { width, height } = Dimensions.get("screen");


//Vista para Expositores

class Exhibitors extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    const { navigation } = this.props;

    //Lista de categorías de expositores
    const list = [
        {
            title: 'Todos',
            icon: 'store',
            goto:"All"
          },
          {
            title: 'Productos',
            icon: 'store',
            goto:"Products"
          },
    
        {
          title: 'Socios',
          icon: 'store',
          goto:"Socios"
        },
      
      ]
   
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80}} 
                onPress={() => navigation.navigate(item.goto) }>
                  <Icon name={item.icon} color='#4682B4'/>
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


export default Exhibitors;
