import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Button,
    View, TouchableOpacity
} from 'react-native';

import { StackNavigator,DrawerActions } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "../component/mainscreen";
import DetailScreen from "../component/detailscreen";
import Calender from "../component/calender";

 const stackNav = StackNavigator({
    Main : {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            title: "Sharp Note",
            headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <Image source={require('../media/menu.png')} style={{height:30,width:30}} />
                </TouchableOpacity>            )
        }),
        headerStyle: { paddingRight: 10, paddingLeft: 15 }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: ({navigation}) => ({
            title: "Detail",
        })
    }
    ,
     Calendar: {
         screen:Calender,
         navigationOptions: ({navigation}) => ({
             title: "Calender",
         })
     }
     ,
});


export default stackNav