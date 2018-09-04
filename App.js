import React from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text, I18nManager } from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createTabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';


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


//Tabs.navigationOptions = ({ navigation }) => {
// let tabBarVisible = true;
// if (navigation.state.index > 0) {
//     tabBarVisible = false;
// }

// return {
//     tabBarVisible,
// };
//};

const RootNavigator = createDrawerNavigator({
    MainStack: StackNavigator = createStackNavigator({
        Tabs: createBottomTabNavigator({
            Home1: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="bluetooth" size={25} color='#000' />
                    )
                }
            },
            Home2: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="wifi" size={25} color='#000' />
                    )
                }
            },
            Home3: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="calendar" size={25} color='#000' />
                    )
                }
            }
        },
            {
                // tabBarPosition: 'bottom',
                // animationEnabled: false,
                // swipeEnabled: false,
            }

        ),
        AScreen,
        BScreen
    }, {
            navigationOptions: ({ navigation }) => {
                let headerRight = null;

                if (navigation.state.index == 0) {
                    headerRight = (
                        <TouchableOpacity
                            style={{ paddingRight: 15 }}
                            onPress={() => {
                                navigation.toggleDrawer()
                            }}>
                            <Icon size={25} name='menu' />
                        </TouchableOpacity>
                    )
                }

                return {
                    headerRight
                };
            }
        })
},{
    drawerPosition: 'right'
})



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

