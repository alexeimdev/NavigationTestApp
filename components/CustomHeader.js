import React from 'react';
import { Header } from 'react-native-elements';

export default CustomHeader = ({navigation}) => {
    return (
        <Header
            outerContainerStyles={{
                backgroundColor: '#fff',
                paddingBottom: 5
            }}
            centerComponent={{
                text: 'Forum Production',
                style: {
                    fontSize: 20,
                    paddingBottom: 5
                }
            }}
            leftComponent={{
                icon: 'menu',
                color: '#000',
                size: 35,
                onPress: () => { navigation.toggleDrawer() }
            }} />
    )
}