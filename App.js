import React from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text, I18nManager } from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createTabNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AScreen from './screens/AScreen';
import BScreen from './screens/BScreen';

// import CustomHeader from './components/CustomHeader';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        I18nManager.forceRTL = true;
    }


    render() {
        return (
            <View style={styles.container}>
                <RootNavigator />
            </View>
        );
    }
}

const RootNavigator = createDrawerNavigator({
    Stack: createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        AScreen: {
            screen: AScreen
        },
        BScreen: {
            screen: BScreen
        },
    },{
        navigationOptions: {
        }
    })
},{
    drawerPosition: 'right'
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

