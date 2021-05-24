import React from "react";
import {
 
  Dimensions,
  ScrollView,
  
 
} from "react-native";

import { ListItem, Avatar } from 'react-native-elements'
import { Block} from 'galio-framework';



const { width, height } = Dimensions.get("screen");


//Vista para los servicios de innovaciones tecnológicas

class Services extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
            
           //Recoger la lista que pasé por parámetro desde la vista anterior
           list:this.props.route.params.item.services,

                   
        }
       
    }



  render() {

    const { navigation } = this.props;
    const list=this.state.list;
   
    return (
                 
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("ServiceProfile", { item: item })}>         
                
                  <Avatar rounded size="large" source={item.avatar}/>  
                 
                  <ListItem.Content>

                   <Block >
                    <ListItem.Subtitle>{item.hora_inicio +"-"+ item.hora_fin}</ListItem.Subtitle>                    
                    
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.titulo}</ListItem.Title>                    
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


export default Services;
