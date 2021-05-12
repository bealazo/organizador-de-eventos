import React from "react";
import {
 
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Linking
 
} from "react-native";

import { ListItem } from 'react-native-elements'
import { Block, theme, Icon} from 'galio-framework';



const { width, height } = Dimensions.get("screen");


//Vista para el Programa

class Program extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          list:[],
          
        }
        
    }
    
    componentDidMount(){

      //Cargar de BD la lista de programas antes de montar el componente
      //DataSample    
    let list = [

        {
            id:7,
            title: 'ABAMobile',
            icon: "calendar",
            time:"16/12/2018",
           
          },
          {
            id:1,
            title: 'AppsForEvents',
            icon: "calendar",
            time:"17/12/2018",
          },
      
          {
            id:6,
            title: 'weQuiz',
            icon: "calendar",
            time:"18/12/2018",
          },
    
            {
                    
                id:3,
            title: 'NFC Leads',
            icon: "calendar",
            time:"19/12/2018",            
            },
          
  
    ]

    
    //Asignar a variable de estado:
    this.setState({
      list:list
    })
 

    }


  render() {

    const { navigation } = this.props;
    const list=this.state.list;
       
    return (

    <Block flex>

        <Block style={{paddingBottom:7,marginBottom:5}} >
        <TouchableWithoutFeedback onPress={() => Linking.openURL(
                "http://nfcleads.com/"
              ).catch(err => console.error("An error occurred", err))}>
          <Image
              source={require('../assets/imgs/banner3.jpeg')}     
              style={{ width: width,height: height*0.23}}   
             
          />
        </TouchableWithoutFeedback>
          
        </Block>

    <Block flex>      
      <ScrollView
      showsVerticalScrollIndicator={false}
      
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("ExhibitorProfile", { item: item })}>         
                
                <Icon name={item.icon} family="font-awesome" color='#4682B4' size={40}/>
                 
                  <ListItem.Content>

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
          </Block>   

        </Block>
   
    );
  }
}


export default Program;
