import React from "react";
import {
 
  Dimensions,
  View,
  Linking 
} from "react-native";

import { ListItem } from 'react-native-elements'
import { Icon } from 'galio-framework'

const { width, height } = Dimensions.get("screen");


//Vista para Lista de Categorías

class InfoServicesList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
            //Recoger el objeto que pasé por parámetro desde la vista anterior
            item:this.props.route.params.item

        }
    } 
  render() {

    const { navigation } = this.props;
    const list=this.state.item.documentacion;

    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => item.rutaDocumentoFormatServidor==null?Linking.openURL(
                    item.urlExternaDocumento).catch(err => console.error("An error occurred", err)):navigation.navigate("InfoServicesDoc",{item})}>
                  {item.urlExternaDocumento!==""?<Icon name="internet-explorer" family="font-awesome" color='#4682B4' size={40}/>:
                 <Icon name="sticky-note-o" family="font-awesome" color='#4682B4' size={40}/>}
                  <ListItem.Content>                 
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color='#4682B4'/>
                </ListItem>
              ))
            }
          </View>
   
    );
  }
}


export default InfoServicesList;
