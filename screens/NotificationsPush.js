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


//Vista para la notif push de innovaciones tecnologicas
class NotificationsPush extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
       
        }
    
    }
    
    componentDidMount(){

    //Setear el título de la vista con el nombre del hardware antes de montar el componente:
      this.props.navigation.setOptions({ title: "NOTIFICACIONES PUSH"})

    }
  

  render() {

    const { navigation } = this.props;
   
 
    return (
     
   

      <Block flex style={{backgroundColor:"#FFFFFF"}}>

    <ScrollView
        showsVerticalScrollIndicator={false}>

          <Card containerStyle={{backgroundColor:"#F2F2F2", borderRadius:10}}>

               
                  <Avatar rounded size="xlarge" source={require('../assets/imgs/banner2.jpeg')}    />    
      
                  <Block style={{marginTop:-120, marginLeft:width*0.35}} >                   
                  <Card.Title style={{ color: '#4682B4', fontSize:20 }}>Notificaciones PUSH</Card.Title>                
                  </Block>

                  <TouchableWithoutFeedback onPress={() =>Linking.openURL(
                "https://abamobile.com/web/"
                ).catch(err => console.error("An error occurred", err))}>
                  <Block style={{justifyContent:"center", marginTop:100}}> 
                  

                  <Block row style={{justifyContent:"center"}}>                    
                  <Icon name= "internet-explorer" family="font-awesome" size={35} color="#4682B4"></Icon>  
                  </Block>

                  <Block row style={{justifyContent:"center", marginTop:5, marginBottom:35}}>           
                  <Text style={{color:"#4682B4"}}>Más información</Text>   
                  </Block>

                  </Block>
                  </TouchableWithoutFeedback>

 
         </Card>      
         </ScrollView>       
      </Block>

   
   
    );
  }
}


export default NotificationsPush;
