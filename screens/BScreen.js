import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, ListView } from 'react-native';

export default B = (props) => {
    const { navigation } = props;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
            <Text style={styles.titleText}>B Screen</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    titleText: {
        fontSize: 50,
        color: 'white',
    },
    btnText: {
        fontSize: 30,
    },
});  