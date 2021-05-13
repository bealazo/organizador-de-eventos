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

            //Para la próxima vista de Conferencias:
            conferences:[
              {
                id:0,
                title: "Presentación",
                time: "09:15-11:00",
                avatar: require('../assets/imgs/abamobile.png'),
                fav:false,

                subtitle: "ABAMobile",
                description: "Somos una empresa de desarrollo de aplicaciones móviles. Creamos apps nativas para Android, iOS y dispositivos wearables. Nos ocupamos de todo el proceso, desde el diseño hasta el desarrollo de la aplicación móvil y posteriores actualizaciones. ",
                ponente: "Alberto Sánchez Casado",
                website: "http://abamobile.com/web/"

              },
              {
                id:1,
                title: "Quiénes somos",
                time: "11:00-11:15",
                avatar: require('../assets/imgs/quienes.png'),
                fav:false,

                subtitle: "ABAMobile",
                description: "Somos una empresa de desarrollo de aplicaciones móviles. Creamos apps nativas para Android, iOS y dispositivos wearables. Nos ocupamos de todo el proceso, desde el diseño hasta el desarrollo de la aplicación móvil y posteriores actualizaciones. ",
                ponente: "Nerea Sánchez Sánchez",
                website: "http://abamobile.com/web/nosotros"
              },
              {
                id:2,
                title: "Trabajos realizados",
                time: "11:15-11:45",
                avatar: require('../assets/imgs/trabajos.png'),
                fav:false,

                subtitle: "ABAMobile",
                description: "Consulte algunos de los trabajos realizados por ABAMobile",
                ponente: "Raúl Fernández Fernández",
                website: "http://abamobile.com/web/trabajos"
              }
            ]
           
          },
          {
            id:1,
            title: 'AppsForEvents',
            icon: "calendar",
            time:"17/12/2018",

             //Para la próxima vista de Conferencias:
             conferences:[
              {
                id:0,
                title: "Lista para instalar",
                time: "08:00-18:00",
                avatar: require('../assets/imgs/instalar.png'),
                fav:false

              },
              {
                id:1,
                title: "Funcionalidades",
                time: "16:00-19:00",
                avatar: require('../assets/imgs/funcionalidades.png'),
                fav:false
              }
             
            ]
           
          },
      
          {
            id:6,
            title: 'weQuiz',
            icon: "calendar",
            time:"18/12/2018",

             //Para la próxima vista de Conferencias:
             conferences:[
              {
                id:0,
                title: "What is weQuiz?",
                time: "08:00-18:00",
                avatar: require('../assets/imgs/quees.png'),
                fav:false

              },
              {
                id:1,
                title: "Features",
                time: "16:00-19:00",
                avatar: require('../assets/imgs/features.png'),
                fav:false
              }
             
            ]
           
          },
    
            {
                    
                id:3,
            title: 'NFC Leads',
            icon: "calendar",
            time:"19/12/2018",  
            
            
             //Para la próxima vista de Conferencias:
             conferences:[
              {
                id:0,
                title: "NFCLeads: Generar nuevos contactos",
                time: "10:00-13:30",
                avatar: require('../assets/imgs/nfc.png'),
                fav:false

              },
              {
                id:1,
                title: "NFC y QR",
                time: "15:00-16:30",
                avatar: require('../assets/imgs/nfcqr.png'),
                fav:false
              }
             
            ]
            }
          
  
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
                onPress={() => navigation.navigate("Conferences", { item: item })}>         
                
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
