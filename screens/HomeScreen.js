import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default HomeScreen = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Tabs') }}>
                <Text style={styles.btnText}>Tabs Screen ></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 50,
        color: 'white',
    },
    btnText: {
        fontSize: 30,
    },
});  