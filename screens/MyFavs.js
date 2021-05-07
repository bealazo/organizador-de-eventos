import React from "react";
import {
 
  Dimensions,
 
} from "react-native";

import TabView from "../components/TabView";

const { width, height } = Dimensions.get("screen");


//Vista para Mis Favoritos, renderiza el componente funcional TabView (una vez coonecte a BD pasar propiedades para poder renderizar listados en cada vista)

class MyFavs extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    return (
    
       <TabView/>
   
    );
  }
}


export default MyFavs;
