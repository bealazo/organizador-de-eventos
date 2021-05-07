import * as React from 'react'; 
import { View, useWindowDimensions, Text , Dimensions} from 'react-native';
import { Icon } from 'galio-framework';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'; 

import { argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const FirstRoute = () => 
( <View style={{ flex: 1, marginTop: height*0.3}}>
    
    <Icon name="heart-o" family="font-awesome" color={argonTheme.COLORS.MUTED} size={100} style={{ paddingLeft:width*0.4}} />
    <Text style={{fontSize:20, color: argonTheme.COLORS.MUTED, paddingLeft:width*0.07}}>No hay favoritos para esta categoría</Text>
    
  </View> ); 
const SecondRoute = () => 
( <View style={{ flex: 1, marginTop: height*0.3}}>
    
    <Icon name="heart-o" family="font-awesome" color={argonTheme.COLORS.MUTED} size={100} style={{ paddingLeft:width*0.4}} />
    <Text style={{fontSize:20, color: argonTheme.COLORS.MUTED, paddingLeft:width*0.07}}>No hay favoritos para esta categoría</Text>
    
  </View>
); 

const renderScene = SceneMap({ first: FirstRoute, second: SecondRoute, }); 

const renderTabBar = props => 
( <TabBar {...props} indicatorStyle={{ backgroundColor: 'white' }} style={{ backgroundColor: '#4682B4' }} /> ); 

export default function TabViewExample() { 
    
    const layout = useWindowDimensions(); 
    const [index, setIndex] = React.useState(0); 
    const [routes] = React.useState([ { key: 'first', title: 'EXPOSITORES' }, { key: 'second', title: 'PROGRAMAS' }, ]); 
    
    return ( 
    
    <TabView 
    navigationState={{ index, routes }} 
    renderScene={renderScene} 
    onIndexChange={setIndex} 
    initialLayout={{ width: layout.width }}
    renderTabBar={renderTabBar} /> 
    
    ); 

}
