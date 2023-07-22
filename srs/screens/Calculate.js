import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import { getCoefficient, getGrade } from '../context/functions';
import { COLORS } from '../assets/constants/theme';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfSubjects: '',
            subjects: [],
        };
    }

    handleNumberOfSubjectsChange = text => {
        this.setState({ numberOfSubjects: text });
    };

    generateRows = () => {
        const { numberOfSubjects } = this.props.route.params;
        const rows = [];

        for (let i = 0; i < parseInt(numberOfSubjects); i++) {
            rows.push(
                <View key={i} style={{ flexDirection: 'row', width: '100%', marginTop: -5 }}>
                    <View>
                        <Text style={{ fontSize: 14, marginTop: 10 }}>{i + 1}</Text>
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
                            onChange={(text) => {
                                this.handleScoreChange(text, i)
                                const result = getCoefficient(text)
                                this.handleCoefficientChange(result, i)
                                const grade = getGrade(text)
                                this.handleGradeChange(grade, i)
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
                            onChange={(text) => {
                                this.handleWeightChange(text, i)
                            }}
                            keyboardType='numeric'
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
                            <Text style={{ fontSize: 14, fontWeight: '700' }}>{this.state.subjects[i] && !isNaN(this.state.subjects[i].coefficient) ? this.state.subjects[i].coefficient : ''}</Text>
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
                            <Text style={{ fontSize: 14, fontWeight: '700' }}>{this.state.subjects[i] ? this.state.subjects[i]?.grade : ''}</Text>
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
                            <Text style={{ fontSize: 14, fontWeight: '700' }}>{this.state.subjects[i] && !isNaN(this.state.subjects[i].gpa) ? this.state.subjects[i].gpa : ''}</Text>
                        </View>
                    </View>
                </View>
            );
        }

        return rows;
    };

    handleScoreChange = (text, index) => {
        this.setState(prevState => {
            const subjectsCopy = [...prevState.subjects];
            subjectsCopy[index] = { ...subjectsCopy[index], score: parseFloat(text) };
            return { subjects: subjectsCopy };
        });
    };

    handleWeightChange = (text, index) => {
        this.setState(prevState => {
            const subjectsCopy = [...prevState.subjects];
            subjectsCopy[index] = {
                ...subjectsCopy[index],
                weight: parseFloat(text),
                gpa: !isNaN(this.state.subjects[index]?.coefficient) ? (this.state.subjects[index]?.coefficient * parseFloat(text)) : ''
            };
            return { subjects: subjectsCopy };
        });
    };

    handleCoefficientChange = (text, index) => {
        this.setState(prevState => {
            const subjectsCopy = [...prevState.subjects];
            subjectsCopy[index] = { ...subjectsCopy[index], coefficient: parseFloat(text) };
            return { subjects: subjectsCopy };
        });
    };

    handleGradeChange = (text, index) => {
        this.setState(prevState => {
            const subjectsCopy = [...prevState.subjects];
            subjectsCopy[index] = { ...subjectsCopy[index], grade: text };
            return { subjects: subjectsCopy };
        });
    };

    handleGPAChange = (text, index) => {
        this.setState(prevState => {
            const subjectsCopy = [...prevState.subjects];
            subjectsCopy[index] = { ...subjectsCopy[index], gpa: text };
            return { subjects: subjectsCopy };
        });
    };


    getTotalWeightSum = () => {
        return this.state.subjects.reduce(
            (total, subject) => total + (subject.weight || 0),
            0
        );
    };

    getTotalGPASum = () => {
        return this.state.subjects.reduce(
            (total, subject) => total + (subject.gpa || 0),
            0
        );
    };

    getCGPA = () => {
        return (this.getTotalGPASum() / this.getTotalWeightSum()).toFixed(2)
    };

    render() {
        const { numberOfSubjects } = this.props.route.params;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{ margin: 35, flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Количество дисциплин: {numberOfSubjects}</Text>
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
                    {this.generateRows()}

                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Work Load: {this.getTotalWeightSum()}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Sum of GPA: {this.getTotalGPASum()}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>CGPA: {this.getCGPA()}</Text>
                </View>
            </View>
            </ScrollView>
        );
    }
}

export default Calculate;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
});