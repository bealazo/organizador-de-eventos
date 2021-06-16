import React from "react";
import {
 
  Dimensions,
  View,
 Text
} from "react-native";

import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';


const { width, height } = Dimensions.get("screen");
import Utils from '../constants/utils_const';


//Vista para Mapa de ubicación del evento

class Map extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          localizacion:{}

        }
    } 

    componentDidMount(){


      //Cargar de BD la localización antes de montar el componente
     
      let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/localizaciones/list")
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
           this.setState({localizacion:data.datos.informacion[0]})
          
         } else {
           Alert.alert('Error', data.message);
         }
       
     })
     .catch(error => console.log(error)); 

    }

  render() {

    const { navigation } = this.props;
    const localizacion=this.state.localizacion;
  
  
    return (
      
          <View>
              {/* Ubicar el evento en el mapa */}
              {Object.keys(localizacion).length !== 0 ? <MapView
                style={{height: height, width:width}}
                initialRegion={{
                latitude:parseFloat(localizacion.latitud),
                longitude:parseFloat(localizacion.longitud),
                latitudeDelta: 0.07,
                longitudeDelta: 0.07,
             
                }}
                >
             <Marker
                    key={localizacion.idLocalizacion}
                    coordinate={{latitude:parseFloat(localizacion.latitud) , longitude:parseFloat(localizacion.longitud)}}
                    title={localizacion.nombre}
                    description={localizacion.datos}
             /> 
                </MapView>: null}
          </View>
   
    );
  }
}


export default Map;
