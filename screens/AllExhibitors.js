import React from "react";
import {
 
  Dimensions,
 
} from "react-native";

import TabView from "../components/TabView";

const { width, height } = Dimensions.get("screen");


//Vista para Todos los expositores

class AllExhibitors extends React.Component {

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


export default AllExhibitors;
