import React from "react";
import {
 
  Dimensions,
  View,
 Text
} from "react-native";

import MapView from "react-native-maps";


const { width, height } = Dimensions.get("screen");


//Vista para Mapa de ubicación del evento

class Map extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    const { navigation } = this.props;
  
    return (
      
          <View>
              {/* Ubicar el evento en el mapa */}
                <MapView
                style={{height: height, width:width}}
                initialRegion={{
                latitude: 43.5574145,
                longitude: -5.9530399,
                latitudeDelta: 0.07,
                longitudeDelta: 0.07,
             
                }}
                />
          </View>
   
    );
  }
}


export default Map;
