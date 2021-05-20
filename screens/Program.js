import React from "react";
import {
 
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Linking,
  Alert
 
} from "react-native";

import { ListItem } from 'react-native-elements'
import { Block, theme, Icon} from 'galio-framework';


const { width, height } = Dimensions.get("screen");
import Utils from '../constants/utils_const';


//Vista para el Programa

class Program extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          list:[],
          
        }
        
    }
    
    componentDidMount(){

      //Cargar de BD la lista de programas antes de montar el componente
      console.log("program")
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
         
           let programas=data.datos.informacion.programas         
           let conferencias=data.datos.informacion.conferencias
           let ponentes=data.datos.informacion.ponentes
           
        
           for (let i = 0; i < programas.length; i++) {
            let conferencias_programa=[]
               for (let index = 0; index < conferencias.length; index++) {                
                  if(conferencias[index].idPrograma==programas[i].idPrograma){
                    let ponentes_conferencia=[]
                    for (let j = 0; j < ponentes.length; j++){
                      if(conferencias[index].idPonente==ponentes[j].idPonente){
                      ponentes_conferencia.push(ponentes[j])
                      }
                    }
                     conferencias[index].ponentes=ponentes_conferencia
                     conferencias[index].fecha=programas[i].fecha
                     conferencias_programa.push(conferencias[index])
                     
                  }
               }
            programas[i].conferencias=conferencias_programa
           }
           console.log(programas)
           //Ordenar por fechas el programa
          let programas1= programas.sort(function(x, y){
            return x.fecha - y.fecha;
        })
            //Asignar a variable de estado:
           this.setState({list:programas1})

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

    <Block flex>

        <Block style={{paddingBottom:7,marginBottom:5}} >
        <TouchableWithoutFeedback onPress={() => Linking.openURL(
                "http://nfcleads.com/"
              ).catch(err => console.error("An error occurred", err))}>
          <Image
              source={require('../assets/imgs/banner3.jpeg')}     
              style={{ width: width,height: height*0.23}}   
             
          />
        </TouchableWithoutFeedback>
          
        </Block>

    <Block flex>      
      <ScrollView
      showsVerticalScrollIndicator={false}
      
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("Conferences", { item: item })}>         
                
                <Icon name="calendar" family="font-awesome" color='#4682B4' size={40}/>
                 
                  <ListItem.Content>

                   <Block >
                    <ListItem.Subtitle>{new Date(item.fecha).toLocaleDateString('en-GB')}</ListItem.Subtitle>                    
                    
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>                    
                    </Block>

                  </ListItem.Content>                 
                  
                  <ListItem.Chevron color='#4682B4'/>
                
                </ListItem>
                
              ))
            }
          </ScrollView>
          </Block>   

        </Block>
   
    );
  }
}


export default Program;
