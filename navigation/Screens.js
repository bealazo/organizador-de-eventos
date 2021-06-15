import React from "react";
import { Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// screens
import Home from "../screens/Home";


import MyProfile from "../screens/MyProfile";
import MyFavs from "../screens/MyFavs";
import Exhibitors from "../screens/Exhibitors";
import ExhibitorsList from "../screens/ExhibitorsList";
import ExhibitorProfile from "../screens/ExhibitorProfile";

import Blueprints from "../screens/Blueprints";
import General from "../screens/General";
import Interior from "../screens/Interior";
import SocialMedia from "../screens/SocialMedia";
import InfoServices from "../screens/InfoServices";
import InfoServicesList from "../screens/InfoServicesList";
import InfoServicesDoc from "../screens/InfoServicesDoc";
import Program from "../screens/Program";
import Conferences from "../screens/Conferences";
import ConferenceProfile from "../screens/ConferenceProfile";
import TwitterTimeline from "../screens/TwitterTimeline";
import PonenteProfile from "../screens/PonenteProfile";
import Map from "../screens/Map";
import Collaborators from "../screens/Collaborators";
import Tech from "../screens/Tech";
import Hardware from "../screens/Hardware";
import NotificationsPush from "../screens/NotificationsPush";
import Services from "../screens/Services";
import ServiceProfile from "../screens/ServiceProfile";
import Notifications from "../screens/Notifications";
import NotificationProfile from "../screens/NotificationProfile";
import Speakers from "../screens/Speakers";

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import {  Header } from "../components";


const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
   <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="APPS FOR EVENTS"
            
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      /> 
         <Stack.Screen
        name="MyProfile"
        component={MyProfile}
      
        options={{
       
              title:"MI PERFIL",
                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
      />
      <Stack.Screen
        name="MyFavs"
        component={MyFavs}
      
        options={{
       
              title:"MIS FAVORITOS",
                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
      />
        <Stack.Screen
        name="Exhibitors"
        component={Exhibitors}
      
        options={{
       
              title:"CATEGORÍAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
      />
        <Stack.Screen
        name="ExhibitorsList"
        component={ExhibitorsList}
      
        options={({ route }) => ({ title: route.name })}          
        
      />     
     
        <Stack.Screen
        name="ExhibitorProfile"
        component={ExhibitorProfile}
      
        options={({ route }) => ({ title: route.name })}
      />

      <Stack.Screen
        name="Blueprints"
        component={Blueprints}
      
        options={{
       
              title:"PLANOS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
      />        
      <Stack.Screen
        name="General"
        component={General}
      
        options={{
       
              title:"GENERAL",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
       <Stack.Screen
        name="Interior"
        component={Interior}
      
        options={{
       
              title:"INTERIOR",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
       <Stack.Screen
        name="SocialMedia"
        component={SocialMedia}
      
        options={{
       
              title:"REDES SOCIALES",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
       <Stack.Screen
        name="InfoServices"
        component={InfoServices}
      
        options={{
       
              title:"CATEGORÍAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
     
        <Stack.Screen
        name="InfoServicesList"
        component={InfoServicesList}
      
        options={{
       
              title:"CATEGORÍAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
        <Stack.Screen
        name="InfoServicesDoc"
        component={InfoServicesDoc}
      
        options={({ route }) => ({ title: route.name })}
       /> 

       <Stack.Screen
        name="Program"
        component={Program}
      
        options={{
       
              title:"PROGRAMA",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
      <Stack.Screen
        name="Conferences"
        component={Conferences}
      
        options={{
       
              title:"CONFERENCIAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
        <Stack.Screen
        name="ConferenceProfile"
        component={ConferenceProfile}
      
        options={({ route }) => ({ title: route.name })}
      />

        <Stack.Screen
        name="TwitterTimeline"
        component={TwitterTimeline}
      
        options={{
       
          title:"TWITTER TIMELINE",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
        <Stack.Screen
        name="PonenteProfile"
        component={PonenteProfile}
      
        options={({ route }) => ({ title: route.name })}
      />

      <Stack.Screen
        name="Map"
        component={Map}
      
        options={{
       
          title:"CÓMO LLEGAR",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
       <Stack.Screen
        name="Collaborators"
        component={Collaborators}
      
        options={{
       
          title:"COLABORADORES",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
       <Stack.Screen
        name="Tech"
        component={Tech}
      
        options={{
       
          title:"INNOVACIONES TECNOLÓGICAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 

      <Stack.Screen
        name="Hardware"
        component={Hardware}
      
        options={({ route }) => ({ title: route.name })}
      />
        <Stack.Screen
        name="NotificationsPush"
        component={NotificationsPush}
      
        options={({ route }) => ({ title: route.name })}
      />

      <Stack.Screen
        name="Services"
        component={Services}
      
        options={{
       
          title:"INNOVACIONES TECNOLÓGICAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
         <Stack.Screen
        name="ServiceProfile"
        component={ServiceProfile}
      
        options={({ route }) => ({ title: route.name })}
      />
       <Stack.Screen
        name="Notifications"
        component={Notifications}
      
        options={{
       
          title:"AVISOS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
         <Stack.Screen
        name="NotificationProfile"
        component={NotificationProfile}
      
        options={({ route }) => ({ title: route.name })}
      />
       <Stack.Screen
        name="Speakers"
        component={Speakers}
      
        options={{
       
          title:"PONENTES",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 

    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
   <Stack.Navigator mode="card" headerMode="none">
   
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
   
    </Drawer.Navigator>

    
  );
}

