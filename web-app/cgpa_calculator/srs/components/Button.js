//import liraries
import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

// create a component
const Button = ({
    text,
    icon,
    color,
    textColor,
    iconColor,
    iconStyle,
    customStyle,
    onPress
}) => {
    return (
        <Pressable onPress={onPress} style={{ backgroundColor: color, flexDirection: 'row', ...styles.button, ...customStyle }}>
            <Text style={{ color: textColor, fontSize: 18, fontWeight: '700' }}>{text}</Text>
            {
                icon ? <Image source={icon} style={{ height: 20, width: 20, tintColor: iconColor, resizeMode: 'contain', marginLeft: 8, ...iconStyle }} />
                    : []
            }
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    button: {
        height: 55,
        width: 130,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default Button;