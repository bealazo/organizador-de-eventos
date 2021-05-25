import React from "react";
import {
 
  Dimensions,
  View
 
} from "react-native";

import { ListItem, Icon } from 'react-native-elements'

const { width, height } = Dimensions.get("screen");


//Vista para Lista de Innovaciones tecnológicas
class Tech extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    const { navigation } = this.props;

    //Lista de innovaciones tecnológicas para el ejemplo
    const list = [
        {
            title: 'Hardware',
            icon: 'lightbulb-outline',
            goto:"Hardware"
          },
          {
            title: 'Servicios',
            icon: 'lightbulb-outline',
            goto:"Services",
            services:[
               { avatar: require('../assets/imgs/servconsult.jpg'),
                hora_inicio: "13:00",
                hora_fin: "15:00",
                titulo: "Consultoría de movilidad",
                descripcion:"Consultoría para la planificación estratégica de movilidad orientada al cliente empresarial",
                nombreEnlace:"",
                 hrefEnlace:""},
                { avatar: require('../assets/imgs/servapps.jpg'),
                    hora_inicio: "13:00",
                    hora_fin: "15:00",
                  
                    titulo: "Desarrollo de Apps",
                    descripcion:"Desarrollo de Aplicaciones móviles nativas en las plataformas iOS, Android, BlackBerry y Windows Phone",
                    nombreEnlace:"",
                    hrefEnlace:""}
            ]
          },  
          {
            title: 'Notificaciones PUSH',
            icon: 'notifications-on',
            goto:"NotificationsPush"
          }        
      ]
   
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => navigation.navigate(item.goto, { item: item }) }>
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


export default Tech;
