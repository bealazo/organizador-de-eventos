import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { Block, theme, Icon, Text, Button} from 'galio-framework';


import { Card } from '../components';
import articles from '../constants/articles';
const { width, height } = Dimensions.get('screen');

class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { events: articles };
   
  }
  renderArticles = () => {

    const events=this.state.events;
    const cardContainer = [styles.card, styles.shadow];

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
              source={require('../assets/imgs/banner1.jpeg')}     
              style={styles.img}   
             
          />
        </TouchableWithoutFeedback>
          
        </Block>
        <Block row style={styles.buttonContainer1}>
            <Button color="#4682B4" round >MI PERFIL</Button>
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
            <Button icon="heart" iconFamily="antdesign" iconSize={15} color="#4682B4" round iconColor="white">MIS FAVORITOS</Button>
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
                "https://abamobile.com"
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
