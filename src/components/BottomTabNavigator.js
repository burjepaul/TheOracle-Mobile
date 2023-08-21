import React from "react"
import { View, Text } from "react-native";
import { Image } from "react-native-elements";
import AboutUsScreen from "../screens/AboutUsScreen"
import CommingSoonScreen from "../screens/CommingSoonScreen"
import ContactScreen from "../screens/ContactScreen"
import SignInScreen from "../screens/SignInScreen"
import HomeScreen from "../screens/HomeScreen";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5, Octicons, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()

function LogoTitle() {
    return (
      <View style={{backgroundColor:'black'}}>
  
      <Image
      style={{ width: 210, height: 40,}}
      source={require('../assets/images/logo.png')}
      />
      </View>
    );
  }

const BottomTab = () => {
    return(
      <Tab.Navigator
        screenOptions={{tabBarActiveTintColor:'wheat', tabBarStyle:{backgroundColor:'black'}, tabBarInactiveTintColor:'rgb(95, 67, 14)'}}
      >
        <Tab.Screen name="Home" component={HomeScreen}  options={{
           headerTitle: (props) => <LogoTitle {...props} /> ,
           headerTintColor: 'black',
           headerStyle:{
            backgroundColor:'black'
           },
           tabBarLabel: 'Home',
           tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
           )
           }}/>
        <Tab.Screen name="AboutUs" component={AboutUsScreen} options={{ 
          headerShown: false, 
          tabBarLabel: 'About Us',
           tabBarIcon: ({ color, size }) => (
            <Octicons name="checklist" color={color} size={size} />
           )
        }}/>
        <Tab.Screen name="Coming" component={CommingSoonScreen} options={{ 
          headerShown: false,
          tabBarLabel: 'Comming Soon',
          tabBarIcon: ({ color, size }) => (
            <Feather name="chevrons-right" color={color} size={35} />
          )
        }}/>
        <Tab.Screen name="Contact" component={ContactScreen} options={{ 
          headerShown: false ,
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email-fast-outline" color={color} size={35} />
          )
        }}/>
        <Tab.Screen name="SignIn" component={SignInScreen} options={{ 
          headerShown: false,
          tabBarLabel: 'Sign In',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="sign-in" size={size} color={color} />
          )
        }}/>
      </Tab.Navigator>
    )
  }

  export default BottomTab