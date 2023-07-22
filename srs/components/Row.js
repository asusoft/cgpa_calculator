//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormInput from './FormInput';
import { COLORS } from '../assets/constants/theme';

// create a component
const Row = () => {
    return (
        <View style={{ flexDirection: 'row', width: '100%', marginTop: -5 }}>
            <View>
                <Text style={{ fontSize: 14, marginTop: 10 }}>1</Text>
            </View>
            <View style={{ flex: 1, marginStart: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <FormInput
                    containerStyle={{
                        height: 40,
                        marginBottom: 30,
                        width: '15%',
                    }}
                    inputStyle={{
                        height: 40,
                    }}
                    inputContainerStyle={{
                        height: 40,
                    }}
                    textAlign='center'
                    maxLength={2}
                />
                <FormInput
                    containerStyle={{
                        height: 40,
                        marginBottom: 30,
                        width: '15%',
                    }}
                    inputStyle={{
                        height: 40,
                    }}
                    inputContainerStyle={{
                        height: 40,
                    }}
                    textAlign='center'
                    maxLength={2}
                />
                <View
                    style={{
                        marginTop: 10,
                        height: 40,
                        marginBottom: 30,
                        justifyContent: 'center',
                        width: '15%',
                    }}
                >
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>КОЭФ</Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        height: 40,
                        marginBottom: 30,
                        justifyContent: 'center',
                        width: '15%',
                    }}
                >
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>GRADE</Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        height: 40,
                        marginBottom: 30,
                        justifyContent: 'center',
                        width: '15%',
                    }}
                >
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>GPA</Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Row;
