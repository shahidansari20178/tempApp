import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class DetailScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Image source={require('../media/menu.png')} style={{height:30,width:30}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DetailScreen;