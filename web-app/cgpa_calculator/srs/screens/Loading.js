//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../assets/constants/theme';
import images from '../assets/constants/images';

// create a component
const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18 }}>Калькулятор для расчета GPA РФ. </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>100 баллов / 5-й формальная РФ.</Text>
            <View style={{ position: 'absolute', bottom: 70, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, marginBottom: 5 }}>Разработано: </Text>
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
