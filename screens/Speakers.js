import React from "react";
import {
 
  Dimensions,
  ScrollView,
  
 
} from "react-native";

import { ListItem, Avatar } from 'react-native-elements'
import { Block} from 'galio-framework';



const { width, height } = Dimensions.get("screen");
import Utils from '../constants/utils_const';


//Vista para  los Ponentes

class Speakers extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          list:[],
          
        }
      
    }
    
    componentDidMount(){

      //Cargar de BD la lista de ponentes antes de montar el componente

       
      let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/programas/list")
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
             

          let ponentes=data.datos.informacion.ponentes;
         
               //Ordenar alfabéticamente
                ponentes.sort((a, b) => {
                  if(a.nombre < b.nombre) return -1;
                  if(a.nombre > b.nombre) return 1;
              
                  return 0;
              })
               //Asignar a variables de estado:
              this.setState({list:ponentes})
             
            } else {
              Alert.alert('Error', data.message);
            }
          
        })
        .catch(error => console.log(error)); 
   
       }
   
    
   
  render() {

    const { navigation } = this.props;
    const list=this.state.list;
       
    return (
                 
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("PonenteProfile", { item: item })}>         
                
                  <Avatar rounded size="large" source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                   }}/>  
                 
                  <ListItem.Content>

               
                   <Block >
                    <ListItem.Subtitle>{"13:00" +"-"+"15:00"}</ListItem.Subtitle>                    
                    
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>                    
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


export default Speakers;
