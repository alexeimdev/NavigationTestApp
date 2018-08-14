import React from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
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
        Stack: createStackNavigator({
            AScreen: {
                screen: AScreen
            },
            BScreen: {
                screen: BScreen
            },
        }, {
            headerMode: 'none'
        })
    }, {
            initialRouteName: 'Home',
            //drawerOpenRoute: 'DrawerOpen',
            //drawerCloseRoute: 'DrawerClose',
            //drawerToggleRoute: 'DrawerToggle',
        }),
}, {
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                // <Button
                //     title="Menu"
                //     onPress={() => {
                //         navigation.toggleDrawer()
                //     }}>
                // </Button>
                <TouchableOpacity
                    style={{ paddingLeft: 20 }}
                    onPress={() => {
                        navigation.toggleDrawer()
                    }}>
                    <Icon size={30} name='dehaze' />
                </TouchableOpacity>
            )
        })
    });

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

