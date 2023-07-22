//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import { COLORS } from '../assets/constants/theme';
import Calculate from './Calculate';

// create a component
const Landing = () => {
    const [subjects, setSubjects] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleNext = () => {
        setIsModalVisible(true)
    }

    const closeModal = () => {
        setSubjects("")
        setIsModalVisible(false)
    }
    return (
        <View style={styles.container}>
            <Text>Введите количество дисциплин</Text>
            <FormInput
                containerStyle={{
                    height: 50,
                    width: '50%',
                    marginBottom: 30
                }}
                onChange={value => {
                    setSubjects(value);
                }}
                textAlign='center'
                maxLength={2}
            />
            <Button onPress={() => handleNext()} text='Далее' color={COLORS.green} textColor={COLORS.secondary} />
            {
                isModalVisible && (
                    <View style={styles.modalContainer}>
                        <Calculate numberOfSubjects={subjects} closeModal={closeModal} />
                    </View>
                )
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 60,
        backgroundColor: COLORS.green,
        borderRadius: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    modalContainer: {
        ...StyleSheet.absoluteFillObject,
    }
});

//make this component available to the app
export default Landing;
