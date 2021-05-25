import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, TouchableWithoutFeedback, Linking, Alert } from 'react-native';
import { Block, theme, Icon, Text, Button} from 'galio-framework';


import { Card } from '../components';
const { width, height } = Dimensions.get('screen');

import Utils from '../constants/utils_const';


class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
       events: [

        {
          title: 'EXPOSITORES',
          name: 'users',
              
         
        },
        {
          title: 'PLANOS',
          name: 'sticky-note-o',
         
         
        },
        {
          title: 'INFORMACIÓN Y SERVICIOS',
          name: 'info-circle',
        
         
        },
        {
          title: 'PROGRAMA',
          name: 'calendar',
       
         
        },
        {
          title: 'REDES SOCIALES',
          name: 'thumbs-o-up',
       
         
        }
        ,{
          title: 'REGISTRO ONLINE',
          name: 'internet-explorer',
         
        },
        {
          title: 'CÓMO LLEGAR',
          name: 'map-o',
        
         
        },
        {
          title: 'COLABORADORES',
          name: 'handshake-o',
        
        },
        {
          title: 'INNOVACIONES TECNOLÓGICAS',
          name: 'lightbulb-o',
          
         
        },
        {
          title: 'AVISOS',
          name: 'bullhorn',
          
         
        },
        {
          title: 'TWITTER TIMELINE',
          name: 'twitter',
         
         
        },
        {
          title: 'PONENTES',
          name: 'users',
        
         
        }
       ] ,
      
       datos:{},
       rutaimagen:null,
       webregistro:null
      
      };
   
  }


  componentDidMount(){


    //Obtener los datos del evento

  let datos={}

  let url = new URL("http://aplicacionesparaeventos.com/web/json/v1/evento/datos")
   const params = {idEvento: 1};
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key])); 
      const dataRequest = {
         method: 'GET',
         headers: new Headers({
          idioma: "es",
          Aceppt: "application/json"
        })
      };
    fetch(url, dataRequest).then(Utils.processResponse)
     .then(res => {
       const { statusCode, data } = res;
       if (statusCode === 200) {
         
           datos=data
          
            //Preparar el componente con las vistas a las que tiene que navegar por cada evento

              let events=this.state.events
              for (let index = 0; index < events.length; index++) {

                    if( events[index].title=="EXPOSITORES")
                    events[index].goto="Exhibitors"

                    if( events[index].title=="PLANOS")
                    events[index].goto="Blueprints"
                    
                    if( events[index].title=="INFORMACIÓN Y SERVICIOS")
                    events[index].goto="InfoServices"

                    if( events[index].title=="PROGRAMA")
                    events[index].goto="Program"

                    if( events[index].title=="REDES SOCIALES")
                    events[index].goto="SocialMedia"

                    if( events[index].title=="REGISTRO ONLINE")
                    //coger la url que viene en los datos
                    events[index].goto=data.datos.informacion.webRegistro
                    
                    if( events[index].title=="CÓMO LLEGAR")
                    events[index].goto="Map"

                    if( events[index].title=="COLABORADORES")
                    events[index].goto="Collaborators"

                    if( events[index].title=="INNOVACIONES TECNOLÓGICAS")
                    events[index].goto="Tech"

                    if( events[index].title=="AVISOS")
                    events[index].goto="Notifications"

                    if( events[index].title=="TWITTER TIMELINE"){
                    events[index].goto="TwitterTimeline"

                     //para configurar el timeline
                    events[index].timeline={
                        id:data.datos.informacion.idHashtag,
                        hashtag:data.datos.informacion.hashtag,
                        url: data.datos.informacion.twitter
                       }
                    }

                    if( events[index].title=="PONENTES")
                    events[index].goto="Speakers"
              }

              this.setState({events:events,datos:data, rutaimagen:data.datos.informacion.rutaBannerFormatServidor})
      

                  } else {
                    Alert.alert('Error', data.message);
                  }
                
              })
              .catch(error => console.log(error)); 
              



 
  }

  renderArticles = () => {

    const events=this.state.events;
    const cardContainer = [styles.card, styles.shadow];
    const { navigation } = this.props;
    //datos del evento
    const datos=this.state.datos;
    //ruta de la imagen que viene en los datos
    const rutaimagen=this.state.rutaimagen;

    return (
     <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>

        <Block flex style={styles.imgContainer} >
        <TouchableWithoutFeedback onPress={() => Linking.openURL(
                "http://wequiz.es"
              ).catch(err => console.error("An error occurred", err))}>
          <Image
              source={{
                uri: 'http://aplicacionesparaeventos.com'+rutaimagen
              }}   
              style={styles.img}   
             
          />
        </TouchableWithoutFeedback>
          
        </Block>
        <Block row style={styles.buttonContainer1}>
            <Button color="#4682B4" round onPress={() => navigation.navigate('MyProfile') }>MI PERFIL</Button>
         </Block>
        <Block flex style={styles.imgContainer1} >

        <Block card flex style={cardContainer}>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <>
        
          <Block flex row style={styles.cardDescription}>
            <Block>
            <Icon name= "user-circle-o" family="font-awesome" size={90} color="#4682B4" style={styles.icon} />
            </Block>
           <Block flex>
            <Text size={14} style={styles.cardTitle}>Pulsa aquí para crear tu código QR personal</Text>
            </Block>
         </Block>
         <Block row style={styles.buttonContainer}>
            <Button icon="heart" iconFamily="antdesign" iconSize={15} color="#4682B4" round iconColor="white" onPress={() => navigation.navigate('MyFavs')}>MIS FAVORITOS</Button>
         </Block>
         </>
        </TouchableWithoutFeedback>

      </Block> 

        </Block>   

        <Block style={styles.container}>  
        {events.map((item)=>
         <Block style={styles.item} key={item.title}> 
        <Card item={item} />
        </Block>    
        )}
       </Block>    

        <Block flex style={styles.imgContainer1} >
        <TouchableWithoutFeedback onPress={() => Linking.openURL(
          // coger el enlace del banner que viene en los datos
                datos.datos.informacion.enlaceBanner
              ).catch(err => console.error("An error occurred", err))}>
          <Image
              source={require('../assets/imgs/banner2.jpeg')}     
              style={styles.img1}   
          />
        </TouchableWithoutFeedback>
        </Block>      
          
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 3,
    paddingVertical: theme.SIZES.BASE,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
   
  },
  item: {
    
    width: '33%', // is 50% of container width
    paddingRight: 5
  },
  img:{

    width: width,
    height: height*0.2

  },
  imgContainer:{

   paddingBottom:7,
   marginBottom:25

  },
  img1:{

    width: width,
    height: height*0.15

  },
  imgContainer1:{

   paddingBottom:7,
   paddingTop:7

  },
  card: {
    backgroundColor: "#F2F2F2",
   // marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 5,
    justifyContent:"center",
    paddingBottom:20,
    paddingTop:20
   
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
   
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    textAlign:"center",
    fontSize: 18,
   color:"#2F4F4F",
   paddingTop:20
  },
  cardDescription: {
   paddingTop: 15,
   paddingLeft:10
  },
  buttonContainer:{
     justifyContent:"center"
  },
  buttonContainer1:{
    justifyContent:"center",
    elevation:100,
    position: 'absolute',
    marginTop:height*0.21,
    marginLeft: width*0.2,
    
 }
}


);

export default Home;
