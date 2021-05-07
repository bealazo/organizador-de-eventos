import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableWithoutFeedback, Linking } from 'react-native';
import { Block, Text, theme, Icon } from 'galio-framework';

class Card extends React.Component {
  
  render() {
    const { navigation, item, horizontal, style } = this.props;
    
    const cardContainer = [styles.card, styles.shadow, style];
  

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() =>item.goto!="https://abamobile.com/web/"?navigation.navigate(item.goto): Linking.openURL(
                "https://abamobile.com/web/"
              ).catch(err => console.error("An error occurred", err))}>
          <Block flex row style={styles.iconContainer}>
            
            <Icon name={item.name} family="font-awesome" size={30} color="white" style={styles.icon} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() =>item.goto!="https://abamobile.com/web/"?navigation.navigate(item.goto): Linking.openURL(
                "https://abamobile.com/web/"
              ).catch(err => console.error("An error occurred", err))}>
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
         </Block>
        </TouchableWithoutFeedback>
      </Block> 
   
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4682B4",
   // marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 110,
    marginBottom: 5,
    justifyContent:"center"
   
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    textAlign:"center",
    fontSize: 10,
   color:"white"
  },
  cardDescription: {
    //padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1, 
   overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  
  iconContainer:{
    justifyContent:"center",
    marginTop:15
  }
});

export default withNavigation(Card);