import React from "react";
import {
 
  Dimensions,
  View,
  Linking ,
  Alert
} from "react-native";

import { ListItem} from 'react-native-elements'
import { Icon} from 'galio-framework'

const { width, height } = Dimensions.get("screen");

import Utils from '../constants/utils_const';


//Vista para Redes Sociales

class SocialMedia extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
              list:[],
              datos:{}
        }
    } 

  componentDidMount(){

     //Obtener los datos del evento para las redes sociales

  let datos={}

  let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/evento/datos")
   const params = {idEvento: 1};
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key])); 
      const dataRequest = {
         method: 'GET',
         headers: new Headers({
          idioma: "es",
          Aceppt: "application/json"
        })
      };
    fetch(url, dataRequest).then(Utils.processResponse)
     .then(res => {
       const { statusCode, data } = res;
       if (statusCode === 200) {
           console.log(data)
           datos=data
          
          //Lista de redes
          let list = [
            {
                title: 'Facebook',
                icon: 'facebook',
                goto:data.datos.informacion.facebook,
                color: "#3b5998"
              },
              {
                title: 'Google+',
                icon: 'google',
                goto:data.datos.informacion.google,
                color: "#db4a39"
              },   
              {
                title: 'Twitter',
                icon: 'twitter',
                goto:data.datos.informacion.twitter,
                color: "#00acee"
              },   
              {
                title: 'Twitter Timeline',
                icon: 'twitter-square',
                goto:"Home",
                color: "#00acee"
              }, 
              {
                title: 'Linkedin',
                icon: 'linkedin',
                goto:data.datos.informacion.linkedin,
                color: "#0e76a8"
              },            
          ]
      

              this.setState({list:list, datos:data})
      

                  } else {
                    Alert.alert('Error', data.message);
                  }
                
              })
              .catch(error => console.log(error)); 
              

 
  }

  render() {

    const { navigation } = this.props;
    const list=this.state.list
    
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => item.title!="Twitter Timeline"?Linking.openURL(
                   item.goto).catch(err => console.error("An error occurred", err)):navigation.navigate(item.goto)}>
                  <Icon name={item.icon} size={40} family="font-awesome" color={item.color}/>
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


export default SocialMedia;
