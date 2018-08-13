import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
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
    render() {
        return (
            <View style={styles.container}>
                <RootNavigator />
            </View>
        );
    }
}

const RootNavigator = createStackNavigator({
    Menu: createDrawerNavigator({
        Home: {
            screen: HomeScreen,
        },
        AScreen: {
            screen: AScreen
        },
        BScreen: {
            screen: BScreen
        },
    }, {
            initialRouteName: 'BScreen',
            //drawerOpenRoute: 'DrawerOpen',
            //drawerCloseRoute: 'DrawerClose',
            //drawerToggleRoute: 'DrawerToggle',
        }),
}, {
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <Button
                    title="Menu"
                    onPress={() => {
                        navigation.toggleDrawer()
                    }}>
                </Button>
            ),
        })
    });

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

