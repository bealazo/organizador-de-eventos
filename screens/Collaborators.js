import React from "react";
import {
 
  Dimensions, 
  Linking,
  View
   
} from "react-native";

import { Image } from 'react-native-elements'
import { Block} from 'galio-framework';


const { width, height } = Dimensions.get("screen");
import Utils from '../constants/utils_const';
import { ListItem } from "react-native-elements/dist/list/ListItem";

//Vista para los colaboradores

class Collaborators extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          colaboradores:[]

        }
    } 

    componentDidMount(){


        //Cargar de BD los colaboradores antes de montar el componente
       
        let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/colaboradores/list")
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
            
              //Asignar a variables de estado:
             this.setState({colaboradores:data.datos.informacion})
            
           } else {
             Alert.alert('Error', data.message);
           }
         
       })
       .catch(error => console.log(error)); 
  
      }
  

    render() {
         
        const colaboradores=this.state.colaboradores;
      
        return (

            <Block flex>

            {
            colaboradores.map((item,i)=>(

             <Block row>
                 
                {i==0 ?
                <Block style={{width:width*0.5, height:150, backgroundColor:"white", paddingTop:50,  marginRight:5, marginTop:5 }}>
                <Image key={item.idColaborador} onPress={() =>Linking.openURL(item.web)} source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenColaboradorFormatServidor
                    }} 
                    style={{  width:width*0.5, height:50}} />
                 </Block>
                :colaboradores.length>i+2?
                <Block style={{width:width*0.5, height:150, backgroundColor:"white", paddingTop:50, marginRight:5, marginTop:5 }}>
                <Image key={colaboradores[i+1].idColaborador} onPress={() =>Linking.openURL(colaboradores[i+1].web)} source={{
                    uri: 'http://aplicacionesparaeventos.com'+colaboradores[i+1].rutaImagenColaboradorFormatServidor
                  }} 
                  style={{   width:width*0.5, height:50 }} />
                  </Block>:null}
              { i==0 ?
               <Block style={{width:width*0.5, height:150, backgroundColor:"white", paddingTop:50, marginRight:5, marginTop:5}}>
                <Image  onPress={() =>Linking.openURL(colaboradores[i+1].web)} source={{
                        uri: 'http://aplicacionesparaeventos.com'+colaboradores[i+1].rutaImagenColaboradorFormatServidor
                      }} 
                 style={{   width:width*0.5, height:50}} />
                  </Block>
                 :colaboradores.length>i+2?
                 <Block style={{width:width*0.5, height:150, backgroundColor:"white", paddingTop:50, marginRight:5, marginTop:5}}>
                 <Image  onPress={() =>Linking.openURL(colaboradores[i+2].web)} source={{
                    uri: 'http://aplicacionesparaeventos.com'+colaboradores[i+2].rutaImagenColaboradorFormatServidor
                  }} 
                 style={{  width:width*0.5, height:50}} />
                 </Block>:null}         
                </Block>
              
             ))
              }
        
                </Block>
                
                

            );
        }
    }
      
      
export default Collaborators;
      