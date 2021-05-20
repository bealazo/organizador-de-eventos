import React from "react";
import {
 
  Dimensions, 
  Text, 
  ScrollView
  
} from "react-native";

import { Card, Avatar } from 'react-native-elements'
import { Block} from 'galio-framework';

import { Rating, AirbnbRating } from 'react-native-elements';
import HTML from "react-native-render-html";

const { width, height } = Dimensions.get("screen");


//Vista para el perfil del ponente de la conferencia

class PonenteProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
        //Recoger el objeto que pasé por parámetro desde la vista anterior
          item:this.props.route.params.item,

          
        }
       
        this.handleRating=this.handleRating.bind(this)
    }
    
    componentDidMount(){

    //Setear el título de la vista con el nombre del expositor antes de montar el componente:
      this.props.navigation.setOptions({ title: this.state.item.nombre})

    }
  

     //Valorar ponente
     handleRating(rating){

      console.log(rating)   
       //***Conectar a BD para guardar***

       //Para el Ejemplo :
       let item=this.state.item
       item.rating=rating   
       this.setState({item:item})
 
    }


  render() {

    const { navigation } = this.props;
   
    const item=this.state.item;
  
    return (
     
   

      <Block flex style={{backgroundColor:"#FFFFFF"}}>

<ScrollView
        showsVerticalScrollIndicator={false}>

          <Card containerStyle={{backgroundColor:"#F2F2F2", borderRadius:10}}>

              
                  <Avatar rounded size="xlarge"  source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                   }}/>    
      
                  <Block style={{marginTop:-120, marginLeft:width*0.35}} >                   
                  <Card.Title style={{ color: '#4682B4', fontSize:20 }}>{item.nombre} </Card.Title>  
                 
                  <Card.Title style={{ color: '#4682B4', fontSize:15 }}>{item.empresa}</Card.Title>  
                  <Card.Title style={{ color: '#4682B4', fontSize:15 }}>{item.puesto}</Card.Title>  
                  </Block>           
                 

                  <Block row style={{justifyContent:"center", marginTop:25}}> 
                 
                  <HTML source={{ html: item.biografia!=""?item.biografia:"Biografía no disponible" }} contentWidth={width} ignoredStyles={['font-family',  'line-height']} />                   
             
                  </Block>

                <Block row style={{justifyContent:"center", marginTop:25}}>   
                <Rating
                    type="custom"
                    ratingCount={4}
                    style={{ paddingVertical: 10}}
                    ratingColor='#4682B4'
                    startingValue={item.rating==undefined?0:item.rating}
                    onFinishRating={this.handleRating}
                    
                 />
         
                </Block>

                <Block row style={{justifyContent:"center", marginTop:5}}>   
                  <Card.Title style={{ color: '#4682B4', fontSize:15 }}>Valora al ponente</Card.Title>                             
                </Block>


 
         </Card>      
         </ScrollView>       
      </Block>

   
   
    );
  }
}


export default PonenteProfile;
