import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import { Event } from '../components';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { counter: 0 };
    //this.handleEvents = this.handleEvents.bind(this);
  }


  renderArticles = () => {
    return (
     <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
        <Block style={styles.container}> 
        {articles.map((article)=>
         <Block style={styles.item} key={article.title}> 
        <Card item={article} />
        </Block>    
        )}
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
  }
});

export default Home;
