import React from "react";

import { View} from 'react-native';
import { WebView } from 'react-native-webview';

//Vista para documento

class InfoServicesDoc extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
            //Recoger el objeto que pasé por parámetro desde la vista anterior
            item:this.props.route.params.item,

        }
    } 

    componentDidMount(){

      //Setear el título de la vista con el nombre del documento antes de montar el componente:
        this.props.navigation.setOptions({ title: this.state.item.nombre})
  
      }

  render() {

    const item=this.state.item
    
    return (
                 
    
          <View style={{ flex: 1 }}>
              <WebView
                        style={{ height: 400, width: 300 }}
                        bounces={false}
                        scrollEnabled={false} 
                        source={{ uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url='+'http://aplicacionesparaeventos.com'+item.rutaDocumentoFormatServidor}}
                        
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                        style={{ marginTop: 20 }}
                    />
      
        </View>
  
   
    );
  }
}


export default InfoServicesDoc;
