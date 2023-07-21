//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import { COLORS } from '../assets/constants/theme';
// create a component
const Landing = () => {
    const [subjects, setSubjects] = useState("")

    return (
        <View style={styles.container}>
            <Text>Введите количество дисциплин</Text>
            <FormInput
                containerStyle={{
                    height: 50,
                    width: '50%',
                    marginBottom:30
                }}
                onChange={value => {
                    setSubjects(value);
                }}
                textAlign='center'
                maxLength={2}
            />
           <Button text='Далее' color={COLORS.green} textColor={COLORS.secondary}/>
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
});

//make this component available to the app
export default Landing;
