import React, { Component } from 'react';
import {  Dimensions } from 'react-native';
import { DrawerNavigator} from 'react-navigation';

import SideMenu from './sidemenu'
import stackNav from './stackNav';

const drawernav = DrawerNavigator({
    Item1: {
        screen: stackNav,
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
});

export default drawernav