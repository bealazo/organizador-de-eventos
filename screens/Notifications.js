import React from "react";
import {
 
  Dimensions,
  ScrollView,
  
 
} from "react-native";

import { ListItem, Avatar } from 'react-native-elements'
import { Block, Icon} from 'galio-framework';



const { width, height } = Dimensions.get("screen");


//Vista para las notificaciones
class Notifications extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
            
         
        }
       
    }



  render() {

    const { navigation } = this.props;
     //Lista de notificaciones para el ejemplo
     const list = [
        {
            titulo: 'Necesitas una app',
            hora_inicio: "13:00",
            hora_fin:"15:00",
            avatar:"",
            fecha:"22/03/2019",
            descripcion: "No dudes en ponerte en contacto con nosotros",
            nombreEnlace:"",
            hrefEnlace:""
         },
         {
            titulo: 'Evento',
            hora_inicio: "13:00",
            hora_fin:"15:00",
            avatar:"",
            fecha:"2/06/2016",
            descripcion: "No te lo pierdas",
            nombreEnlace:"enlace",
            hrefEnlace:"https://abamobile.com/web/"
         },
         {
            titulo: '',
            hora_inicio: "13:00",
            hora_fin:"15:00",
            avatar:"",
            fecha:"23/05/2016",
            descripcion: "Mensaje notificación",
            nombreEnlace:"",
            hrefEnlace:""
         },
         {
            titulo: 'Nuevo diseño!',
            hora_inicio: "13:00",
            hora_fin:"15:00",
            avatar:require('../assets/imgs/banner2.jpeg'),
            fecha:"23/05/2016",
            descripcion: "Descubre el nuevo diseño de la aplicación. Actualízate si todavía no lo has hecho",
            nombreEnlace:"",
            hrefEnlace:""
         },
         {
            titulo: '¿Organizas un evento?',
            hora_inicio: "13:00",
            hora_fin:"15:00",
            avatar:require('../assets/imgs/banner3.jpeg'),
            fecha:"11/04/2016",
            descripcion: "¿Estás organizando un evento? Conoce NFCLeads",
            nombreEnlace:"Más información",
            hrefEnlace:"http://nfcleads.com/"
         }
               
      ]
   
    return (
                 
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("NotificationProfile", { item: item })}>         
                
                  
                {item.avatar!==""? <Avatar rounded size="large" source={item.avatar}/>:
                
                <Icon name= "bell-o" family="font-awesome" size={55} color={"#4682B4"}></Icon> 
                }    
                  
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


export default Notifications;
