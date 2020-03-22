import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors'
const Header = props => {
    return (
    <View style={sytles.header}>
        <Text style={sytles.headerTitle}>{props.title}</Text>
    </View>
    )
};

const sytles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
});

export default Header;