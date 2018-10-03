import React from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text, I18nManager, Platform } from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    createTabNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import AScreen from './screens/AScreen';
import BScreen from './screens/BScreen';

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
    MainStack: StackNavigator = createStackNavigator({
        Tabs: createBottomTabNavigator({
            Tab1: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="calendar-check" size={25} color={focused ? '#d10074' : 'grey'} />
                    ),
                    tabBarLabel: 'אושרו היום'
                },
            },
            Tab2: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="account-edit" size={27} color={focused ? '#d10074' : 'grey'} />
                    ),
                    tabBarLabel: 'הבקשות שלי'
                }
            },
            Tab3: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="format-list-checks" size={27} color={focused ? '#d10074' : 'grey'} />
                    ),
                    tabBarLabel: 'לטיפול'
                }
            }
        },
            {
                tabBarOptions: {
                    activeTintColor: '#d10074',
                    //inactiveTintColor: '#000',
                    //activeBackgroundColor: '#6e2b6b',
                    //inactiveBackgroundColor: '#e2e2e2'
                    labelStyle: {
                        fontSize: 12
                    },
                    style: {
                        //height: 60,
                    }

                }
                //tabBarPosition: 'top',
                //animationEnabled: false,
                //swipeEnabled: false,
            }

        ),
        AScreen,
        BScreen
    }, {
            navigationOptions: ({ navigation }) => {
                if (navigation.state.routeName == 'Tabs') {
                    return {
                        // headerTintColor: '#701c68',
                        // headerTitleStyle: {
                        //     fontWeight: 'bold',
                        // },
                        // title: 'פורום פרודקשיין',
                        headerRight: (
                            <View style={styles.headerButtonWrapper}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.toggleDrawer()
                                    }}>
                                    <Icon size={25} name='menu' color='#701c68' />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerLeft: (
                            <View style={styles.headerButtonWrapper}>
                                <TouchableOpacity
                                    onPress={() => {
                                    }}>
                                    <Icon size={25} name='cast' color="#701c68" />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
                return {
                    headerBackImage: (
                        <View style={styles.headerButtonWrapper}>
                            <Icon size={25} name='arrow-left' color="#701c68" />
                        </View>
                    ),
                    headerBackTitleStyle: {
                        color: '#701c68'
                    },
                    headerBackTitle: navigation.state.routeName
                }

            }
        })
}, {
        drawerPosition: 'right'
    })



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerButtonWrapper: {
        paddingLeft: 16,
        paddingRight: 16,
    },
})

