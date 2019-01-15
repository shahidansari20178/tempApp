import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './sidemenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text,Image, View,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

class sidemenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render () {
        return (
            <View style={styles.container}>

                    <View style={styles.headerView} >
                        <Image
                        source={require('../media/event.png')} style={{height:45,width:43,marginLeft:15}}/>

                            <Text style={styles.navHeaderStyle} onPress={this.navigateToScreen('Page1')}>
                                Sharp Notes
                            </Text>
                    </View>
                <ScrollView style={{flex:4}}>
                    <View style={styles.topinnerview}>
                        <TouchableOpacity style={styles.innerView} onPress={this.navigateToScreen('Calendar')}>
                        <Text style={styles.sectionHeadingStyle}>
                           <Image source={require('../media/calendae.png')} style={styles.icon}/>       Calender
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.innerView} >
                            <Text style={styles.sectionHeadingStyle}>
                                <Image source={require('../media/events.png')} style={styles.icon}/>      Events
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.innerView}>
                            <Text style={styles.sectionHeadingStyle}>
                                <Image source={require('../media/todo.png')} style={styles.icon}/>      To Do
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.innerView}>
                            <Text style={styles.sectionHeadingStyle}>
                                <Image source={require('../media/meeting.jpg')} style={styles.icon}/>     Meeting
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.innerView}>
                            <Text style={styles.sectionHeadingStyle}>
                                <Image source={require('../media/birthday.png')} style={styles.icon}/>     Birthday
                            </Text>
                        </TouchableOpacity>
                        {/*<View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                                Page2
                            </Text>
                            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                                Page3
                            </Text>
                        </View>*/}
                    </View>

                </ScrollView>
                <View style={[styles.footerContainer,{flexDirection:'row'}]}>
                    {/*<Image source={require('../media/keyboard.png')} style={{height:30,width:35,paddingBottom:60}}/>*/}<Text style={{color:'#ffffff'}}> Developed By SharpCity </Text>
                </View>
            </View>
        );
    }
}

sidemenu.propTypes = {
    navigation: PropTypes.object
};

export default sidemenu;
