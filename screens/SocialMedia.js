import React from "react";
import {
 
  Dimensions,
  View,
  Linking 
} from "react-native";

import { ListItem} from 'react-native-elements'
import { Icon} from 'galio-framework'

const { width, height } = Dimensions.get("screen");


//Vista para Redes Sociales

class SocialMedia extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    const { navigation } = this.props;

    //Lista de redes
    const list = [
        {
            title: 'Facebook',
            icon: 'facebook',
            goto:"https://m.facebook.com/ABAMobile/?fref=ts",
            color: "#3b5998"
          },
          {
            title: 'Google+',
            icon: 'google',
            goto:"https://plus.google.com/+Abamobile",
            color: "#db4a39"
          },   
          {
            title: 'Twitter',
            icon: 'twitter',
            goto:"https://mobile.twitter.com/abamobile_sp",
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
            goto:"https://www.linkedin.com/company/abamobile/",
            color: "#0e76a8"
          },            
      ]
   
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
