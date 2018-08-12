import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomHeader from '../components/CustomHeader';

export default HomeScreen = (props) => {
    //const { navigation } = props;

    return (
        <View style={styles.container}>
            <CustomHeader {...props} />
            <View style={styles.body}>
                <Text style={styles.titleText}>Home Screen</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Stack') }}>
                    <Text style={styles.btnText}>Stack Screen ></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: 'red',
        //marginTop: 50,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        //backgroundColor: 'black',
        width: '100%',
        maxHeight: 95,
        backgroundColor: 'white',
    },
    btnMenu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 2,
        width: 50,
        maxHeight: 50,
        marginBottom: 10,
        marginLeft: 10
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 50,
        color: 'white',
    },
    btnText: {
        fontSize: 30,
    },
});  