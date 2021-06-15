import React from "react";
import {
 
  Dimensions,
  View
 
} from "react-native";

import { ListItem, Icon } from 'react-native-elements'

const { width, height } = Dimensions.get("screen");
import Utils from '../constants/utils_const';


//Vista para Lista de Innovaciones tecnológicas
class Tech extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
              //Variable de estado para almacenar las categorías de innovaciones
              list:[],
              //Variable de estado para almacenar las innovaciones sin categoría
              innovaciones_no_categoria:[]
  

        }
    } 

    componentDidMount(){

      //Cargar de BD la lista de innovaciones antes de montar el componente
     
      let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/innovaciones/list")
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
           let innovaciones=data.datos.informacion.innovaciones
                
        //Formar un array con las categorías con sus innovaciones
           for (let i = 0; i < categorias.length; i++) {           
            let innovacion_categoria=[]
               for (let index = 0; index < innovaciones.length; index++) {                
                  if(innovaciones[index].idCategoria==categorias[i].idCategoria){                  
                                     
                    innovacion_categoria.push(innovaciones[index])                                     
                  
                  }
            
               }
               categorias[i].innovaciones=innovacion_categoria
           }
          
          //Formar un array con las innovaciones sin categoría
          let inn_nocategoria=[]
           for (let index = 0; index < innovaciones.length; index++) {
            if(innovaciones[index].idCategoria==null)
            {inn_nocategoria.push(innovaciones[index])}
           }

            //Ordenar alfabéticamente
            let list= categorias.sort((a, b) => {
              if(a.nombre < b.nombre) return -1;
              if(a.nombre > b.nombre) return 1;

              return 0;
          })
          let list_nocateg= inn_nocategoria.sort((a, b) => {
            if(a.nombre < b.nombre) return -1;
            if(a.nombre > b.nombre) return 1;

            return 0;
        })
           
       
            //Asignar a variables de estado:
           this.setState({list:list})
           this.setState({innovaciones_no_categoria:list_nocateg})

         } else {
           Alert.alert('Error', data.message);
         }
       
     })
     .catch(error => console.log(error)); 


    }

  render() {

    const { navigation } = this.props;
    const list=this.state.list;
    const innovaciones_no_categoria= this.state.innovaciones_no_categoria;
    
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => item.innovaciones.length>1?navigation.navigate("TechList", { item: item }):navigation.navigate("TechProfile", { item: item.innovaciones[0]}) }>
                  <Icon name="lightbulb-outline" size={40} color='#4682B4'/>
                  <ListItem.Content>                 
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color='#4682B4'/>
                </ListItem>
              ))
            }
             {
             innovaciones_no_categoria.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => navigation.navigate("TechProfile", { item: item }) }>                 
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


export default Tech;
