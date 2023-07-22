//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../assets/constants/theme';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../components/FormInput';
import Row from '../components/Row';

// create a component
const CalculateScreen = ({ route }) => {
    const navigation = useNavigation()
    const { subjectsNum } = route.params;
    return (
        <View style={styles.container}>
            <View style={{ margin: 35, flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>Количество дисциплин: {subjectsNum}</Text>
                <View style={{ marginStart: 25, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View
                        style={{
                            marginTop: 10,
                            height: 40,
                            width: '15%',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>БАЛЛ</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            height: 40,
                            width: '15%',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>ЗЕТ</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            height: 40,
                            width: '15%',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>КОЭФ</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            height: 40,
                            width: '15%',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>GRADE</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            height: 40,
                            width: '15%',
                        }}
                    >
                        <Text style={{ fontSize: 14, fontWeight: '700' }}>GPA</Text>
                    </View>
                </View>
               <Row />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});

//make this component available to the app
export default CalculateScreen;
