import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default B = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>B Screen</Text>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                <Text style={styles.btnText}>Home Screen ></Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
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