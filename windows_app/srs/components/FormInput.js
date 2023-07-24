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
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = 'default',
    autoComplete = 'off',
    autoCapitalize = 'none',
    errorMsg = '',
    maxLength,
    editable,
    value,
    textAlign,
    inputContainerStyle,
    ref
}) => {
    return (
        <View style={{ ...containerStyle }}>
            {/* Label & Error msg */}
            {
                label || errorMsg ? (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.gray, marginEnd: 10 }}>{label}</Text>
                        <Text style={{ color: COLORS.red, marginEnd: 10 }}>{errorMsg}</Text>
                    </View>) : null
            }

            {/* Text input */}
            <View style={[styles.containerInput, { ...inputContainerStyle }]}>
                {prependComponent}
                <TextInput
                    style={{
                        ...styles.input,
                        ...inputStyle,
                    }}
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
                    ref={ref}
                />
                {appendComponent}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        height: 52,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor:COLORS.background,
        borderColor: COLORS.grey,
    },
    input: {
        flex: 1,
        height: 52,
      },
});

//make this component available to the app
export default FormInput;
