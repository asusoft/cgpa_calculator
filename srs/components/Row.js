//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormInput from './FormInput';
import { COLORS } from '../assets/constants/theme';
import { getCoefficient, getGrade } from '../context/functions';

// create a component
const Row = () => {
    const [ball, setBall] = useState('')
    const [weight, setWeight] = useState('')
    const [coefficient, setCoefficient] = useState('')
    const [grade, setGrade] = useState('')
    const [gpa, setGPA] = useState('')

    React.useEffect(() => {
        if(coefficient != '' && weight != ''){
            const result = weight * coefficient
            setGPA(result)
        } else {
            setGPA('')
        }
    }, [weight, coefficient ])

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
                    onChange={value => {
                        setBall(value);
                        const result = getCoefficient(value)
                        setCoefficient(result)
                        const grd = getGrade(value)
                        setGrade(grd)
                    }}
                    textAlign='center'
                    maxLength={3}
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
                    onChange={value => {
                        setWeight(value);
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
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>{coefficient}</Text>
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
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>{grade}</Text>
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
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>{gpa}</Text>
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
