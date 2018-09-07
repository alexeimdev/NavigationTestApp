import React from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text, I18nManager, Platform } from 'react-native';
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
        const isIos = Platform.OS === 'ios';
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
                        <Icon name="calendar" size={30} color={focused ? '#d10074' : '#000'} />
                    ),
                    tabBarLabel: 'אושרו היום'
                }
            },
            Tab2: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="calendar" size={30} color={focused ? '#d10074' : '#000'} />
                    ),
                    tabBarLabel: 'הבקשות שלי'
                }
            },
            Tab3: {
                screen: HomeScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="calendar" size={30} color={focused ? '#d10074' : '#000'} />
                    ),
                    tabBarLabel: 'לטיפול'
                }
            }
        },
            {
                tabBarOptions: {
                    activeTintColor: '#d10074',
                    inactiveTintColor: '#000',
                    //activeBackgroundColor: '#6e2b6b',
                    //inactiveBackgroundColor: '#e2e2e2'
                    labelStyle: {
                        fontSize: 12
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
                        headerRight: (
                            <TouchableOpacity
                                style={{ paddingRight: 15 }}
                                onPress={() => {
                                    navigation.toggleDrawer()
                                }}>
                                <Icon size={25} name='menu' color='#701c68' />
                                {/* <Text>{navigation.state.routeName }</Text> */}
                            </TouchableOpacity>
                        ),
                        headerLeft: (
                            <TouchableOpacity
                                style={{ paddingLeft: 15 }}
                                onPress={() => {
                                    //navigation.toggleDrawer()
                                }}>
                                <Icon size={25} name='cast' color="#701c68" />
                                {/* <Text>{navigation.state.routeName }</Text> */}
                            </TouchableOpacity>
                        )
                    }
                }

                return {
                    headerBackImage: (
                        <Icon size={25} name='arrow-left' color="#701c68" style={{ paddingLeft: 15 }} />
                    )
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
})

