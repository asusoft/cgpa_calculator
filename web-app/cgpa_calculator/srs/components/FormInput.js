//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import { COLORS } from '../assets/constants/theme';

// create a component
const FormInput = ({
    focus,
    containerStyle,
    placeholder,
    onChange,
    secureTextEntry,
    keyboardType = 'default',
    autoComplete = 'off',
    autoCapitalize = 'none',
    maxLength,
    editable,
    value,
    textAlign,
    onSubmitEditing,
    inputContainerStyle,
    ref
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <TextInput
                style={{
                    ...styles.containerInput,
                    ...inputContainerStyle,
                }}
                autoFocus={focus}
                editable={editable}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoComplete={autoComplete}
                autoCapitalize={autoCapitalize}
                onChangeText={(text) => onChange(text)}
                maxLength={maxLength}
                value={value}
                autoCorrect={false}
                textAlign={textAlign}
                onSubmitEditing={onSubmitEditing}
                ref={ref}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerInput: {
        height: 52,
        marginTop: 10,
        borderRadius: 10,
        padding: 10, // Add padding inside the text input
        fontSize: 18,
        borderWidth: 1,
        backgroundColor: COLORS.background,
        borderColor: COLORS.grey,
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 52,
    },
});

//make this component available to the app
export default FormInput;
