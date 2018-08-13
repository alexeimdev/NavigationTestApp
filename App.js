import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createTabNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AScreen from './screens/AScreen';
import BScreen from './screens/BScreen';

import CustomHeader from './components/CustomHeader';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomHeader/>
                <RootNavigator />
            </View>
        );
    }
}

const RootNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Stack: createStackNavigator({
        AScreen: {
            screen: AScreen,
            title: 'AScreen',
        },
        BScreen: {
            screen: BScreen,
            title: 'BScreen',
        }
    })
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

