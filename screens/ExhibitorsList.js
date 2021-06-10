import React from "react";
import {
 
  Dimensions,
  ScrollView,
  
 
} from "react-native";

import { ListItem, Avatar } from 'react-native-elements'
import { Button, Block, theme} from 'galio-framework';



const { width, height } = Dimensions.get("screen");


//Vista para lista de Expositores

class ExhibitorsList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

            //Recoger el objeto que pasé por parámetro desde la vista anterior
            item:this.props.route.params.item,
          //Obtener la lista de expositores de la categoría
          list:this.props.route.params.item.expositores,
          
        }
        this.handleFav=this.handleFav.bind(this)
    }
    
    componentDidMount(){

      //Setear el título de la vista con el nombre del expositor antes de montar el componente:
      this.props.navigation.setOptions({ title: this.state.item.nombre})

    
    //Ordenar alfabéticamente
   let list= this.state.list.sort((a, b) => {
      if(a.nombre < b.nombre) return -1;
      if(a.nombre > b.nombre) return 1;
  
      return 0;
  })

  //Favorito Sample
  for (let index = 0; index < list.length; index++) {
   list[index].fav=false;    
  }

    //Asignar a variable de estado:
    this.setState({
      list:list
    })
 

    }

    //Marcar como favorito el item seleccionado
    handleFav(item){
      
       //***Conectar a BD para guardar***

       //Para el Ejemplo :
       let list = this.state.list

       for (let index = 0; index < list.length; index++) {
         if(list[index].idExpositor==item.idExpositor)

         list[index].fav=!list[index].fav
        
       }

       this.setState({list:list})
         

    }

  render() {

    const { navigation } = this.props;
    const list=this.state.list;
       
    return (
                 
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("ExhibitorProfile", { item: item })}>         
                
                  <Avatar rounded size="large" source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                    }}/> 
                 
                  <ListItem.Content>

                    <Block flex style={{marginLeft:width*0.35, marginTop:-10}}>
                   <Button style={{width:120, height:30}} icon={item.fav==false?"heart-o":"heart"} iconFamily="font-awesome" iconSize={12} color="#4682B4" round iconColor="white" onPress={() => this.handleFav(item)}>FAVORITO</Button>                            
                   </Block>

                   <Block >
                    {/* <ListItem.Subtitle>{item.time}</ListItem.Subtitle>*/}
                    
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>                    
                    </Block>

                  </ListItem.Content>                 
                  
                  <ListItem.Chevron color='#4682B4'/>
                
                </ListItem>
                
              ))
            }
          </ScrollView>
   
    );
  }
}


export default ExhibitorsList;
