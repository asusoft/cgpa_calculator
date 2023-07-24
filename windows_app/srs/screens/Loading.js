//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../assets/constants/theme';
import images from '../assets/constants/images';

// create a component
const Loading = () => {
    return (
        <View style={styles.container}>
            <Text>European standard CGPA calculator</Text>
            <View style={{ position: 'absolute', bottom: 70, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18 }}>developed by</Text>
                <Image source={images.savvy} style={{ width: 150, height: 50, resizeMode: 'contain', resizeMode: 'contain', marginEnd: 12 }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
});

//make this component available to the app
export default Loading;
