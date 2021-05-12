import React from "react";

import { Dimensions, View, Image } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


//Vista para plano General

class General extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    
    return (
                 
        <View style={{ flex: 1 }}>
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          style={{
            padding: 10,
            backgroundColor: 'white',
          }}
        >
          <Image style={{ flex: 1, width: null, height: '100%' }}
                 source={require('../assets/imgs/general.jpg')}
                 resizeMode="contain" />
        </ReactNativeZoomableView>
      </View>
   
    );
  }
}


export default General;
