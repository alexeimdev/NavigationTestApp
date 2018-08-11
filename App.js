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
import Header from './components/Header';

export default class App extends React.Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}

const RootNavigator = createStackNavigator({
    Main: createDrawerNavigator({
        Home: {
            screen: HomeScreen,
        },
        Stack: createStackNavigator({
            AScreen: {
                screen: AScreen,
                title: 'AScreen',
                navigationOptions: {
                    headerMode: 'none'
                }
            },
            BScreen: {
                screen: BScreen,
                title: 'BScreen'
            }
        },
        {
            navigationOptions: {
                headerTintColor: 'black',
                headerTitle: 'title'
            }
        }),
    })
},
{
    headerMode: 'none'
});

const styles = StyleSheet.create({
    btnMenuText: {
        fontSize: 20,
        paddingLeft: 20
    },
    btnPopText: {
        fontSize: 20,
        paddingRight: 20
    }
})

