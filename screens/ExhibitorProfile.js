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

const { width, height } = Dimensions.get("screen");


//Vista para el perfil del expositor

class ExhibitorProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
        //Recoger el objeto que pasé por parámetro desde la vista anterior
          item:this.props.route.params.item,
          
        }
        this.handleFav=this.handleFav.bind(this)
    }
    
    componentDidMount(){

    //Setear el título de la vista con el nombre del expositor antes de montar el componente:
      this.props.navigation.setOptions({ title: this.state.item.nombre})

    }
    
    //Marcar como favorito el item seleccionado
    handleFav(){

        let item=this.state.item
      
       //***Conectar a BD para guardar***

       //Para el Ejemplo :
       item.fav=!item.fav    
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
                  <Button style={{width:120, height:30}} icon={item.fav==false?"heart-o":"heart"} iconFamily="font-awesome" iconSize={12} color="#4682B4" round iconColor="white" onPress={() => this.handleFav()}>FAVORITO</Button>                            
                  </Block>

                  <Avatar rounded size="xlarge" source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                    }}/> 
      
                  <Block style={{marginTop:-80, marginLeft:width*0.35}} >                   
                  <Card.Title style={{ color: '#4682B4', fontSize:20 }}>{item.nombre}</Card.Title>                
                  </Block>

                  <Block row style={{justifyContent:"center"}}>

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Interior')}>
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                        <Icon name= "sticky-note-o" family="font-awesome" size={35} color="#4682B4"></Icon>                  
                    </Block>

                    <Block row style={{justifyContent:"center"}}>                   
                        <Text style={{color:"#4682B4"}}>{"Interior"}</Text>                   
                    </Block>

                    <Block style={{width:width*0.5, borderBottomWidth: 1, marginTop:20,  borderColor:"#C3C3C5"}}></Block>

                    </Block>
                    
                    </TouchableWithoutFeedback>                  

                  </Block>



                <Block style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly',width: '100%'}}>

                  
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                    <Icon name= "mobile" family="font-awesome" size={45} color={item.telefono1==""?"#C3C3C5":"#4682B4"}></Icon>                  
                    </Block>

                    <TouchableWithoutFeedback onPress={() =>item.telefono1!=""?Linking.openURL(`tel:${item.telefono1}`):null}>
                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.telefono1==""?"#C3C3C5":"#4682B4"}}>{item.telefono1!=""?item.telefono1:"No disponible"}</Text>                                   
                    </Block>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() =>item.telefono2!=""?Linking.openURL(`tel:${item.telefono2}`):null}>
                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.telefono1==""?"#C3C3C5":"#4682B4"}}>{item.telefono2!=""?item.telefono2:""}</Text>                                   
                    </Block>
                    </TouchableWithoutFeedback>
                
                    <Block row style={{justifyContent:"center"}}>  
                    <Block style={{width:width*0.25, borderBottomWidth: 1, marginTop:item.email!=""?50:20,  borderColor:"#C3C3C5"}}></Block>
                    </Block>    

                    </Block>
                    
                   
                    


                    <Block style={{ height: height*0.07, width: 1, backgroundColor:"#C3C3C5"}}></Block>  


                    <TouchableWithoutFeedback onPress={() =>item.email!=""?Linking.openURL(`mailto:${item.email}`):null}>
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                    <Icon name= "envelope-o" family="font-awesome" size={35} color={item.email==""?"#C3C3C5":"#4682B4"}></Icon>                  
                    </Block>

                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.email==""?"#C3C3C5":"#4682B4", marginLeft:item.email!=""?width*0.1:0}}>{item.email!=""?item.email:"No disponible"}</Text>                                   
                    </Block>
                
                    <Block row style={{justifyContent:"center"}}>  
                    <Block style={{width:width*0.25, borderBottomWidth: 1, marginTop:20,  borderColor:"#C3C3C5"}}></Block>
                    </Block>    

                    </Block>
                    
                    </TouchableWithoutFeedback>

                </Block>



                <Block style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly',width: '100%',marginBottom: 20}}>

                    <TouchableWithoutFeedback onPress={() =>item.direccion!=""?Linking.openURL("https://www.google.com/maps/search/?api=1&query="+item.direccion):null}>
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                    <Icon name= "map-o" family="font-awesome" size={35} color={item.direccion==""?"#C3C3C5":"#4682B4"}></Icon>                  
                    </Block>

                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.direccion==""?"#C3C3C5":"#4682B4",marginLeft:item.direccion!=""?width*0.1:0}}>{item.direccion!=""?item.direccion:"No disponible"}</Text>                                   
                    </Block>
                
                    </Block>
                    
                    </TouchableWithoutFeedback>


                    <Block style={{ height: height*0.07, width: 1, backgroundColor:"#C3C3C5"}}></Block>  


                    <TouchableWithoutFeedback onPress={() =>item.web!=""?Linking.openURL(item.web).catch(err => console.error("An error occurred", err)):null}>
                    
                    <Block style={{width:width*0.5}}>

                    <Block row style={{justifyContent:"center", marginTop:height*0.05}}>                    
                    <Icon name= "internet-explorer" family="font-awesome" size={35} color={item.web==""?"#C3C3C5":"#4682B4"}></Icon>                  
                    </Block>

                    <Block row style={{justifyContent:"center"}}>                              
                    <Text style={{color:item.web==""?"#C3C3C5":"#4682B4", marginLeft:item.web!=""?width*0.1:0}}>{item.web!=""?item.web:"No disponible"}</Text>                                   
                    </Block>
                
                    </Block>
                    
                    </TouchableWithoutFeedback>

                </Block>
 
 
         </Card>      
         </ScrollView>       
      </Block>

   
   
    );
  }
}


export default ExhibitorProfile;
