import React from "react";
import {
 
  Dimensions

} from "react-native";


import {WebView} from "react-native-webview"

const { width, height } = Dimensions.get("screen");



//Vista para Redes Sociales

class TwitterTimeline extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
              //Recoger el objeto que pasé por parámetro desde la vista anterior
          timeline:this.props.route.params.timeline,

        }
    } 

  
  render() {

    const { navigation } = this.props;
    const timeline =this.state.timeline;

    //Escribir el script 
    let JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';
    //Escribir el html para el timeline
    let source = JS + '<a class="twitter-timeline" href='+timeline.url+'> Tweets by'+ timeline.hashtag+'</a>';

   
    return (
                 
         //Mostrar el timeline en un WebView
            <WebView
                source={{html: source}}
                javaScriptEnabled={true}
              />
        
   
    );
  }
}


export default TwitterTimeline;
