import React from "react";
import {
 
  Dimensions,
  ScrollView,
  
 
} from "react-native";

import { ListItem, Avatar } from 'react-native-elements'
import { Block} from 'galio-framework';



const { width, height } = Dimensions.get("screen");


//Vista para la lista de innovaciones tecnológicas de una categoría

class TechList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
            
           //Recoger el item que pasé por parámetro desde la vista anterior
           item:this.props.route.params.item,

                   
        }
       
    }



  render() {

    const { navigation } = this.props;
    const list=this.state.item.innovaciones;
   
    return (
                 
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("TechProfile", { item: item })}>         
                
                  <Avatar rounded size="large"  source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                    }}/>   
                 
                  <ListItem.Content>

                   <Block >
                                       
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>                    
                    </Block>

                  </ListItem.Content>                 
                  
                  <ListItem.Chevron color='#4682B4'/>
                
                </ListItem>
                
              ))
            }
          </ScrollView>
   
    );
  }
}


export default TechList;
