import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titleText}>Home Screen</Text>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AScreen') }}>
                    <Text style={styles.btnText}>A Screen ></Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 50,
    },
    btnText: {
        fontSize: 30,
    },
});  