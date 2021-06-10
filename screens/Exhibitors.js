import React from "react";
import {
 
  Dimensions,
  View
 
} from "react-native";

import { ListItem, Icon } from 'react-native-elements'

const { width, height } = Dimensions.get("screen");
import Utils from '../constants/utils_const';


//Vista para Expositores

class Exhibitors extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          //Variable de estado para almacenar las categorías de expositores
          list:[]

        }
    } 

    componentDidMount(){

      //Cargar de BD la lista de expositores antes de montar el componente
     
      let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/expositores/list")
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
        
           let categorias=data.datos.informacion.categorias         
           let expositores=data.datos.informacion.expositores
           let categoriasExpositores=data.datos.informacion.categoriasExpositores
           
        
           for (let i = 0; i < categorias.length; i++) {           
            let expositores_categoria=[]
               for (let index = 0; index < categoriasExpositores.length; index++) {                
                  if(categoriasExpositores[index].idCategoria==categorias[i].idCategoria){
                  
                    for (let j = 0; j < expositores.length; j++){
                      if(categoriasExpositores[index].idExpositor==expositores[j].idExpositor){
                        expositores_categoria.push(expositores[j])
                      }
                    }
                  
                  }
               }
               categorias[i].expositores=expositores_categoria
           }
           
       
            //Asignar a variable de estado:
           this.setState({list:categorias})

         } else {
           Alert.alert('Error', data.message);
         }
       
     })
     .catch(error => console.log(error)); 


    }




  render() {

    const { navigation } = this.props;

    //Lista de categorías de expositores
    const list=this.state.list;
   
   
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => navigation.navigate("ExhibitorsList", { item: item }) }>
                  <Icon name={item.icon} color='#4682B4' size={40}/>
                  <ListItem.Content>                 
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color='#4682B4'/>
                </ListItem>
              ))
            }
          </View>
   
    );
  }
}


export default Exhibitors;
