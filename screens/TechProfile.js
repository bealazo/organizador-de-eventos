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
import HTML from "react-native-render-html";


const { width, height } = Dimensions.get("screen");


//Vista para el perfil de innovacion tecnológica
class TechProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
              //Recoger el objeto que pasé por parámetro desde la vista anterior
              item:this.props.route.params.item,
       
        }
    
    }
    
    componentDidMount(){

    //Setear el título de la vista con el nombre del hardware antes de montar el componente:
      this.props.navigation.setOptions({ title: this.state.item.nombre})

    }
  

  render() {

    const { navigation } = this.props;
    const item=this.state.item;
 
    return (     
   

      <Block flex style={{backgroundColor:"#FFFFFF"}}>

    <ScrollView
        showsVerticalScrollIndicator={false}>

          <Card containerStyle={{backgroundColor:"#F2F2F2", borderRadius:10}}>

               
                  <Avatar rounded size="xlarge" source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                    }}/>   
      
                  <Block style={{marginTop:-120, marginLeft:width*0.4}} >                   
                  <Card.Title style={{ color: '#4682B4', fontSize:20 }}>{item.nombre}</Card.Title>                
                  </Block>

                  <Block row style={{justifyContent:"center", marginTop:80}}> 
                  <HTML source={{ html: item.informacion!=""?item.informacion:"<span></span>"}} contentWidth={width} ignoredStyles={['font-family',  'line-height']} />
                  </Block>

                  <TouchableWithoutFeedback onPress={() =>item.enlace!==""?Linking.openURL(
                  item.enlace).catch(err => console.error("An error occurred", err)):null}>
                  <Block style={{justifyContent:"center", marginTop:20}}> 
                  

                  <Block row style={{justifyContent:"center"}}>                    
                  <Icon name= "internet-explorer" family="font-awesome" size={35} color={item.enlace==""?"#C3C3C5":"#4682B4"}></Icon>
                  </Block>

                  <Block row style={{justifyContent:"center", marginTop:5, marginBottom:35}}>           
                  <Text style={{color:item.nombreEnlace==""?"#C3C3C5":"#4682B4"}}>{item.nombreEnlace==""?"No disponible":item.nombreEnlace}</Text> 
                  </Block>

                  </Block>
                  </TouchableWithoutFeedback>

 
         </Card>      
         </ScrollView>       
      </Block>

   
   
    );
  }
}


export default TechProfile;
