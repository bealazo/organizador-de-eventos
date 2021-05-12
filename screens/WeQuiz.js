import React from "react";

import { View} from 'react-native';
import { WebView } from 'react-native-webview';

//Vista para documento WeQuiz

class WeQuiz extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

        }
    } 
  render() {

    
    return (
                 
    
          <View style={{ flex: 1 }}>
              <WebView
                        style={{ height: 400, width: 300 }}
                        bounces={false}
                        scrollEnabled={false} 
                        source={{ uri: 'https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.africau.edu/images/default/sample.pdf' }}
                        
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                        style={{ marginTop: 20 }}
                    />
      
        </View>
  
   
    );
  }
}


export default WeQuiz;
