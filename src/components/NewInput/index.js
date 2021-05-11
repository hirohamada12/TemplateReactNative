import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useController, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';


const NewInput = props => {

    const { name, label, placeholder, defaultValue, rules, index } = props;//props lien quan toi form
    const { containerStyle, labelStyle, inputStyle, errorStyle } = props;//props predefine style

    const { control, errors } = useFormContext();
    const { field } = useController({ name, rules, defaultValue, control });
    const [focus, setIsFocused] = useState(false);

    useEffect(() => {
        console.log(JSON.stringify(errors));
    })
    const getBorderColor = () => {
        focus ? { borderColor: Colors.Blue } : errors[name] ? { borderColor: Colors.Red } : { borderColor: Colors.Black }
    }

    return (
        <View style={[style.container, containerStyle]} index={index}>
            <Text style={[style.label, labelStyle]}>{label}</Text>
            <TextInput style={[style.input, inputStyle, getBorderColor()]} placeholder={placeholder}
                onChangeText={field.onChange} value={field.value}
                onBlur={(event) => {
                    setIsFocused(false);
                    field.onBlur?.(event);
                }}
                onFocus={() => setIsFocused(true)} />
            {errors[name] && <Text style={[style.error, errorStyle]}>{errors[name]?.message}</Text>}
        </View>
    )
}

NewInput.defaultProps = {
    placeholder: "",
    name: "Label",
    defaultValue: ""
}

export default NewInput

const style = StyleSheet.create({
    container: {
        paddingVertical: 3
    },
    label: {
        fontSize: 12, color: Colors.Black
    },
    input: {
        height: SCREEN_HEIGHT / 20, width: SCREEN_WIDTH * 0.7,
        fontSize: 1, color: Colors.Black, marginTop: 5,
    },
    error: {
        fontSize: 12, color: Colors.Red,
        marginLeft: 10,
    }
})




