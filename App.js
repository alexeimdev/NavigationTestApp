import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createTabNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AScreen from './screens/AScreen';
import BScreen from './screens/BScreen';

export default class App extends React.Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}

const RootNavigator = createStackNavigator({
    Main: {
        screen: createDrawerNavigator({
            Home: {
                screen: HomeScreen
            },
            Tabs: createTabNavigator({
                AScreen: { 
                    screen: AScreen,
                    title: 'AScreen' 
                },
                BScreen: { 
                    screen: BScreen,
                    title: 'BScreen' 
                }
            },{
                initialRouteName: 'AScreen'
            })
        })
    }
}, {
        navigationOptions: ({ navigation }) => ({
            headerLeft:
                <TouchableOpacity title="Menu" onPress={() => { navigation.toggleDrawer(); }}>
                    <Text style={styles.btnMenuText}>Menu</Text>
                </TouchableOpacity>,
        })
    })

const styles = StyleSheet.create({
    btnMenuText: {
        fontSize: 20,
        paddingLeft: 20
    }
})

