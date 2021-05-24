import React from "react";
import {
 
  Dimensions, 
  Linking,
   
} from "react-native";

import { Image } from 'react-native-elements'
import { Block} from 'galio-framework';


const { width, height } = Dimensions.get("screen");

//Vista para los colaboradores

class Collaborators extends React.Component {

    render() {

      
        return (

            <Block flex>
                <Block row>
                   
                 
                    <Image onPress={() =>Linking.openURL("https://abamobile.com/web/")} source={require('../assets/imgs/colab1.jpeg')}
                        style={{  width:width*0.5, height: 150, marginRight:5 }} />
                                     
                 
                    <Image onPress={() =>Linking.openURL("http://aplicacionesparaeventos.com/")} source={require('../assets/imgs/colab2.jpeg')}
                        style={{  width:width*0.5, height: 150  }} />
                   
                 
                </Block>

                 <Block row>
                   
                
                    <Image onPress={() =>Linking.openURL("http://nfcleads.com/")} source={require('../assets/imgs/colab3.jpeg')}
                        style={{  width:width*0.5, height: 150, marginRight:5, marginTop:5}} />
                  
                  
                    <Image onPress={() =>Linking.openURL("http://wequiz.es/")} source={require('../assets/imgs/colab4.jpeg')}
                        style={{  width:width*0.5, height: 150, marginTop:5  }} />
                   
                </Block>
        
                </Block>
                
                

            );
        }
    }
      
      
export default Collaborators;
      