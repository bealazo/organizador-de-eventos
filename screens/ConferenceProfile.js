import React from "react";
import {
 
  Dimensions, 
  Text,
  TouchableWithoutFeedback,
  Linking,
  ScrollView
  
} from "react-native";

import { Card, Avatar } from 'react-native-elements'
import { Button, Block,Icon, theme} from 'galio-framework';

import { Rating, AirbnbRating } from 'react-native-elements';

const { width, height } = Dimensions.get("screen");


//Vista para el perfil de la conferencia

class ConferenceProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
        //Recoger el objeto que pasé por parámetro desde la vista anterior
          item:this.props.route.params.item,

          
        }
        this.handleFav=this.handleFav.bind(this)
        this.handleRating=this.handleRating.bind(this)
    }
    
    componentDidMount(){

    //Setear el título de la vista con el nombre del expositor antes de montar el componente:
      this.props.navigation.setOptions({ title: this.state.item.titulo})

    }
    
    //Marcar como favorito el item seleccionado
    handleFav(){

        let item=this.state.item
      
       //***Conectar a BD para guardar***

       //Para el Ejemplo :
       item.fav=!item.fav    
       this.setState({item:item})
 
    }

     //Valorar conferencia
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

                 <Block flex row style={{justifyContent:"flex-end"}}>
                  <Button style={{width:120, height:30}} icon={item.fav==undefined||item.fav==false?"heart-o":"heart"} iconFamily="font-awesome" iconSize={12} color="#4682B4" round iconColor="white" onPress={() => this.handleFav()}>FAVORITO</Button>                            
                  </Block>

                  <Avatar rounded size="xlarge"  source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                   }}/>    
      
                  <Block style={{marginTop:-80, marginLeft:width*0.35}} >                   
                  <Card.Title style={{ color: '#4682B4', fontSize:20 }}>{item.titulo} {"\n"} {item.organismo}</Card.Title>                
                  </Block>

                  <Block row style={{justifyContent:"flex-start", marginTop:25}}>                   
                  <Card.Title style={{ color: '#4682B4', fontSize:15  }}>{new Date(item.fecha).toLocaleDateString('en-GB') +" - "+ item.hora_inicio}</Card.Title>                
                  </Block>

                  
                  <Block row style={{justifyContent:"center", marginTop:1}}>                   
                  <Text style={{ fontSize:15  }}>{item.datos}</Text>                
                  </Block>


                <Block style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly',width: '100%'}}>

                    <TouchableWithoutFeedback onPress={() =>item.ponentes[0]!==undefined?navigation.navigate("PonenteProfile", { item: item.ponentes[0]}):null}>
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                    <Icon name= "user" family="font-awesome" size={35} color={item.ponentes[0].nombre=="No disponible"?"#C3C3C5":"#4682B4"}></Icon>                  
                    </Block>

                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.ponentes[0].nombre=="No disponible"?"#C3C3C5":"#4682B4",width:width*0.3}}>{item.ponentes[0].nombre}</Text>                                   
                    </Block>
                
                      

                    </Block>
                    
                    </TouchableWithoutFeedback>


                    <Block style={{ height: height*0.07, width: 1, backgroundColor:"#C3C3C5"}}></Block>  


                    <TouchableWithoutFeedback onPress={() =>item.nombreEnlace!="No disponible"?Linking.openURL(item.hrefEnlace):null}>
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                    <Icon name= "internet-explorer" family="font-awesome" size={35} color={item.nombreEnlace=="No disponible"?"#C3C3C5":"#4682B4"}></Icon>                  
                    </Block>

                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.nombreEnlace=="No disponible"?"#C3C3C5":"#4682B4"}}>{item.nombreEnlace}</Text>                                   
                    </Block>
                
                   
                    </Block>
                    
                    </TouchableWithoutFeedback>

                    <Block style={{ height: height*0.07, width: 1, backgroundColor:"#C3C3C5"}}></Block>  


                    <TouchableWithoutFeedback onPress={() =>null}>
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                    <Icon name= "calendar" family="font-awesome" size={35} color={item.fecha=="No disponible"?"#C3C3C5":"#4682B4"}></Icon>                  
                    </Block>

                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.fecha=="No disponible"?"#C3C3C5":"#4682B4"}}>Añadir al{"\n"}calendario</Text>                                   
                    </Block>
                
                  
                    </Block>
                    
                    </TouchableWithoutFeedback>

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
                  <Card.Title style={{ color: '#4682B4', fontSize:15 }}>Valora la Conferencia</Card.Title>                             
                </Block>


 
         </Card>      
         </ScrollView>       
      </Block>

   
   
    );
  }
}


export default ConferenceProfile;
