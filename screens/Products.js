import React from "react";
import {
 
  Dimensions,
  ScrollView,
  
 
} from "react-native";

import { ListItem, Avatar } from 'react-native-elements'
import { Button, Block, theme} from 'galio-framework';



const { width, height } = Dimensions.get("screen");


//Vista para  los Productos

class Products extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          list:[],
          
        }
        this.handleFav=this.handleFav.bind(this)
    }
    
    componentDidMount(){

      //Cargar de BD la lista de productos antes de montar el componente
      //DataSample    
    let list = [
     
      {
        id:3,
      title: 'NFC Leads',
      avatar: require('../assets/imgs/product1.jpeg'),
      time:"13:00-15:00",
      fav:false,

      blueprints:"General",
      phone: "No disponible",
      email:"No disponible",
      address: "No disponible",
      website: "http://nfcleads.com/"
     
    },
   
    
        {
          id:1,
          title: 'AppsForEvents',
          avatar: require('../assets/imgs/product2.jpeg'),
          time:"13:00-15:00",
          fav:false,

          blueprints:"General",
          phone: "No disponible",
          email:"No disponible",
          address: "No disponible",
          website: "http://aplicacionesparaeventos.com/"
        },
  
     
    {
      id:6,
      title: 'weQuiz',
      avatar: require('../assets/imgs/product4.jpeg'),
      time:"13:00-15:00",
      fav:false,

      blueprints:"No disponible",
      phone: "No disponible",
      email:"No disponible",
      address: "No disponible",
      website: "http://wequiz.es/"
    },
    
    ]

    //Ordenar alfabéticamente
    list.sort((a, b) => {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
  
      return 0;
  })

    //Asignar a variable de estado:
    this.setState({
      list:list
    })
 

    }

    //Marcar como favorito el item seleccionado
    handleFav(item){
       console.log(item)

       //***Conectar a BD para guardar***

       //Para el Ejemplo :
       let list = this.state.list

       for (let index = 0; index < list.length; index++) {
         if(list[index].id==item.id)

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
                
                  <Avatar rounded size="large" source={item.avatar}/>  
                 
                  <ListItem.Content>

                    <Block flex style={{marginLeft:width*0.35, marginTop:-10}}>
                   <Button style={{width:120, height:30}} icon={item.fav==false?"heart-o":"heart"} iconFamily="font-awesome" iconSize={12} color="#4682B4" round iconColor="white" onPress={() => this.handleFav(item)}>FAVORITO</Button>                            
                   </Block>

                   <Block >
                    <ListItem.Subtitle>{item.time}</ListItem.Subtitle>                    
                    
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.title}</ListItem.Title>                    
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


export default Products;
