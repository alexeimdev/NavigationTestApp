import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default A = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>A Screen</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('BScreen') }}>
                <Text style={styles.btnText}>B Screen ></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
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