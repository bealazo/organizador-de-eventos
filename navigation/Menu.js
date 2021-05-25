import React,  { useState, useEffect } from "react";
import { useSafeArea } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components';
import Icon from "../components/Icon";

const { width, height } = Dimensions.get('screen');

import Utils from '../constants/utils_const';

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {

   //para configurar el timeline de twitter
  const [timeline, setTimeline] = useState({});
   //para recoger el link de registro online
  const [register, setRegister] = useState("");


//Antes de montar el componente consumo los datos del evento necesarios para navegar directamente a vistas que esperan dichos datos
  useEffect(() => {
  
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
                  
            //para configurar el timeline de twitter
            setTimeline(
              {id:data.datos.informacion.idHashtag,
              hashtag:data.datos.informacion.hashtag,
              url: data.datos.informacion.twitter}
            )
            //para recoger el link de registro online  
             setRegister(data.datos.informacion.webRegistro)
            } 
            else {
              Alert.alert('Error', data.message);
            }
          
        })
        .catch(error => console.log(error)); 

      },[]);

  const insets = useSafeArea();
  const screens = [
    "MIS FAVORITOS",
    "COMPARTIR CONTACTO",
    "NOTIFICACIONES",
    "REGISTRO ONLINE",
  ];
  const screens1 = [
    "AGENDA",
    "EXPOSITORES",
    "PONENTES",
    "INNOVACIONES TECNOLÓGICAS",
    "UBICACIÓN",
    "MAPAS",
    "INFORMACIÓN Y DOCUMENTACIÓN",
    "COLABORADORES",
    "REDES SOCIALES",
    "HASHTAG TWITTER"
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex={0.06} style={styles.header}>
        <Image styles={styles.logo} source={Images.Logo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Block flex style={{ marginTop: 8, marginVertical: 8, paddingHorizontal: 8 }}>
              <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
              <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }} onPress={() =>
              navigation.navigate("Home")
              }>
            <Icon
            name="home"
            family="font-awesome"
            size={20}
            color="#4682B4"
          /> HOME</Text>
            </Block>
          <Block flex style={{ marginTop: 8, marginVertical: 8, paddingHorizontal: 8 }}>
              <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
              <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}> 
            <Icon
            name="user"
            family="font-awesome"
            size={20}
            color="#4682B4"
          /> MI PERFIL</Text>
              
            </Block>
          {screens.map((item, index) => {
              return (
                <DrawerCustomItem
                  title={item}
                  key={index}
                  navigation={navigation}
                   //Para registro online
                   register={item=="REGISTRO ONLINE"?register:null}
                 // focused={state.index === index ? true : false}
                />
              );
            })}
            <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
              <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
              <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>
              <Icon
            name="calendar"
            family="font-awesome"
            size={20}
            color="#4682B4"
          /> EVENTO</Text>
            </Block>
            {screens1.map((item, index) => {
              return (
                <DrawerCustomItem
                  title={item}
                  key={index}
                  navigation={navigation}
                  //Para hashtag twitter
                  timeline={item=="HASHTAG TWITTER"?timeline:null}
                 
                  //focused={state.index === index ? true : false}
                />
              );
            })}
        </ScrollView>
      </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    //paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE*4,
    paddingTop: theme.SIZES.BASE * 3.5,
    justifyContent: 'center'
  },
 
});

export default CustomDrawerContent;
