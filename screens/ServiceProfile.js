import React from "react";
import {
 
  Dimensions, 
  Text,
  TouchableWithoutFeedback,
  Linking,
  ScrollView
  
} from "react-native";

import { Card, Avatar } from 'react-native-elements'
import { Block,Icon} from 'galio-framework';


const { width, height } = Dimensions.get("screen");


//Vista para la información del servicio
class ServiceProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

             //Recoger el objeto que pasé por parámetro desde la vista anterior
          item:this.props.route.params.item
       
        }
    
    }
    
    componentDidMount(){

    //Setear el título de la vista con el nombre del hardware antes de montar el componente:
      this.props.navigation.setOptions({ title: this.props.route.params.item.titulo})

     

    }
  

  render() {

    const { navigation } = this.props;
    const item=this.state.item;
 
    return (
     
   

      <Block flex style={{backgroundColor:"#FFFFFF"}}>

    <ScrollView
        showsVerticalScrollIndicator={false}>

          <Card containerStyle={{backgroundColor:"#F2F2F2", borderRadius:10}}>

               
                  <Avatar rounded size="xlarge" source={item.avatar}    />    
      
                  <Block style={{marginTop:-120, marginLeft:width*0.35}} >                   
                  <Card.Title style={{ color: '#4682B4', fontSize:18 }}>{item.titulo}</Card.Title>                
                  </Block>
                
                  <Block row style={{justifyContent:"center", marginTop:100}}> 
                        
                  <Text>{item.descripcion}</Text>   
              
                  </Block>

                  <TouchableWithoutFeedback onPress={() =>item.sitio=="No disponible"?null:Linking.openURL(
                item.sitio
                ).catch(err => console.error("An error occurred", err))}>
                  <Block style={{justifyContent:"center", marginTop:20}}> 
                  

                  <Block row style={{justifyContent:"center"}}>                    
                  <Icon name= "internet-explorer" family="font-awesome" size={35} color={item.sitio=="No disponible"?"#C3C3C5":"#4682B4"}></Icon>  
                  </Block>

                  <Block row style={{justifyContent:"center", marginTop:5, marginBottom:35}}>           
                  <Text style={{color:item.sitio=="No disponible"?"#C3C3C5":"#4682B4"}}>{item.sitio=="No disponible"?"No disponible":"Más información"}</Text>   
                  </Block>

                  </Block>
                  </TouchableWithoutFeedback>

 
         </Card>      
         </ScrollView>       
      </Block>

   
   
    );
  }
}


export default ServiceProfile;
