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
    Tabs: createBottomTabNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    focused
                        ? <Icon name="bluetooth" size={25} color='#fff' />
                        : <Icon name="bluetooth" size={25} color='#000' />
                )
            }
        },
        Stack: {
            screen: createStackNavigator({
                AScreen: {
                    screen: AScreen,
                    navigationOptions: {
                        header: null
                    }
                },
                BScreen
            }),
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    focused
                        ? <Icon name="camera-off" size={25} color='#fff' />
                        : <Icon name="camera-off" size={25} color='#000' />
                )            }
        }
    }, {
            tabBarOptions: {
                activeBackgroundColor: '#0c0c0c',
                activeTintColor: '#ffffff',
            }
        })
}, {
        drawerPosition: 'right'
    });

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

