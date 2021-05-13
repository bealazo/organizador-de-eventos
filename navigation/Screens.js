import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";

import MyProfile from "../screens/MyProfile";
import MyFavs from "../screens/MyFavs";
import Exhibitors from "../screens/Exhibitors";
import AllExhibitors from "../screens/AllExhibitors";
import ExhibitorProfile from "../screens/ExhibitorProfile";
import Products from "../screens/Products";
import Socios from "../screens/Socios";
import Blueprints from "../screens/Blueprints";
import General from "../screens/General";
import Interior from "../screens/Interior";
import SocialMedia from "../screens/SocialMedia";
import InfoServices from "../screens/InfoServices";
import Documents from "../screens/Documents";
import WebAbamobile from "../screens/WebAbamobile";
import WeQuiz from "../screens/WeQuiz";
import Program from "../screens/Program";
import Conferences from "../screens/Conferences";
import ConferenceProfile from "../screens/ConferenceProfile";

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";


const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="MyProfile" mode="card" headerMode="screen">
      {/*  <Stack.Screen
        name="MyProfile"
        component={MyProfile}
      
        options={{
          header: ({ navigation, scene }) => (
            <Header
            
              title="MI PERFIL"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
      /> */}
      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      /> */}

      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

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
        name="All"
        component={AllExhibitors}
      
        options={{
       
              title:"TODOS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
      />

      <Stack.Screen
        name="Products"
        component={Products}
      
        options={{
       
              title:"PRODUCTOS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
      />  
       <Stack.Screen
        name="Socios"
        component={Socios}
      
        options={{
       
              title:"SOCIOS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
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
        name="Documents"
        component={Documents}
      
        options={{
       
              title:"CATEGORÍAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
        <Stack.Screen
        name="WebAbamobile"
        component={WebAbamobile}
      
        options={{
       
              title:"CATEGORÍAS",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
       /> 
        <Stack.Screen
        name="WeQuiz"
        component={WeQuiz}
      
        options={{
       
              title:"WEQUIZ",                       
          cardStyle: { backgroundColor: "#F8F9FE" },
          
        }}
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
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
   <Stack.Navigator mode="card" headerMode="none">
     
      {/* <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />  */}
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
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={Register} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
    </Drawer.Navigator>
  );
}

