import React from "react";
import {
 
  Dimensions,
  View,
  Linking 
} from "react-native";

import { ListItem } from 'react-native-elements'
import { Icon } from 'galio-framework'

const { width, height } = Dimensions.get("screen");
import Utils from '../constants/utils_const';


//Vista para Categorías de Información y Servicios

class InfoServices extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

            //Variable de estado para almacenar las categorías de documentos
            list:[],
            //Variable de estado para almacenar los documentos sin categoría
            documentos_no_categoria:[]


        }
    } 

    componentDidMount(){

      //Cargar de BD la lista de categorías y documentos antes de montar el componente
     
      let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/documentacion/list")
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
           let documentacion=data.datos.informacion.documentacion
                
        //Formar un array con las categorías con su documentación 
           for (let i = 0; i < categorias.length; i++) {           
            let documentacion_categoria=[]
               for (let index = 0; index < documentacion.length; index++) {                
                  if(documentacion[index].idCategoria==categorias[i].idCategoria){                  
                                     
                    documentacion_categoria.push(documentacion[index])                                     
                  
                  }
            
               }
               categorias[i].documentacion=documentacion_categoria
           }
          
          //Formar un array con la documentación sin categoría
          let docs_nocategoria=[]
           for (let index = 0; index < documentacion.length; index++) {
            if(documentacion[index].idCategoria==null)
            {docs_nocategoria.push(documentacion[index])}
           }

            //Ordenar alfabéticamente
            let list= categorias.sort((a, b) => {
              if(a.nombre < b.nombre) return -1;
              if(a.nombre > b.nombre) return 1;

              return 0;
          })
          let list_nocateg= docs_nocategoria.sort((a, b) => {
            if(a.nombre < b.nombre) return -1;
            if(a.nombre > b.nombre) return 1;

            return 0;
        })
           
       
            //Asignar a variables de estado:
           this.setState({list:list})
           this.setState({documentos_no_categoria:list_nocateg})

         } else {
           Alert.alert('Error', data.message);
         }
       
     })
     .catch(error => console.log(error)); 


    }




  render() {

    const { navigation } = this.props;
    const list=this.state.list;
    const documentos_no_categoria= this.state.documentos_no_categoria;
   
  
    return (
                 
          <View>
            {
             list.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => navigation.navigate("InfoServicesList",{item}) }>
                  <Icon name="list-alt" family="font-awesome" color='#4682B4' size={40}/>
                  <ListItem.Content>                 
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron color='#4682B4'/>
                </ListItem>
              ))
            }
             {
             documentos_no_categoria.map((item, i) => (
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:80, marginBottom:5}} 
                onPress={() => item.rutaDocumentoFormatServidor==null?Linking.openURL(item.urlExternaDocumento
                ).catch(err => console.error("An error occurred", err)):navigation.navigate("InfoServicesDoc",{item})}>
                 {item.urlExternaDocumento!==""?<Icon name="internet-explorer" family="font-awesome" color='#4682B4' size={40}/>:
                 <Icon name="sticky-note-o" family="font-awesome" color='#4682B4' size={40}/>} 
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


export default InfoServices;
