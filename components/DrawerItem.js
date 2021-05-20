import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  goTo = () => {
    const { title, navigation } = this.props;

   switch (title) {
      case "MIS FAVORITOS":       
        navigation.navigate("MyFavs")
        break;
       
      case "COMPARTIR CONTACTO":
        navigation.navigate("MyProfile")
        break;

      case "REGISTRO ONLINE":
        Linking.openURL(
          "https://abamobile.com/web/"
        ).catch(err => console.error("An error occurred", err))
        break;

      case "EXPOSITORES":
        navigation.navigate("Exhibitors")
        break;

      case "MAPAS":
        navigation.navigate("Blueprints")
        break;
      case "REDES SOCIALES":
        navigation.navigate("SocialMedia")
        break;
     case "INFORMACIÓN Y DOCUMENTACIÓN":
        navigation.navigate("InfoServices")
        break;
      case "AGENDA":
        navigation.navigate("Program")
        break; 
         
      default:
        return null;
    }
  };
 
  render() {
    const { focused, title} = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
          onPress={() =>this.goTo()} 
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
           </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
