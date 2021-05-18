import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useController, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';


const NewInput = props => {

    const { name, label, placeholder, defaultValue, rules, index, horizon } = props;//props lien quan toi form
    const { containerStyle, labelStyle, inputStyle, errorStyle } = props;//props predefine style

    const { control, errors } = useFormContext();
    const { field } = useController({ name, rules, defaultValue, control });
    const [focus, setIsFocused] = useState(false);

    const getBorderColor = () => {
        return errors[name] ? { borderColor: Colors.Red } : focus ? { borderColor: Colors.BlueSky } : { borderColor: Colors.LightGray }
    }

    return (
        <View style={[style.container, containerStyle]} index={index}>
            {//truong hop label khong thang hang voi text
                <View style={horizon && { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[style.label, labelStyle]}>{label}</Text>
                    <TextInput style={[horizon ? style.horizonInput : style.input, inputStyle, getBorderColor()]} placeholder={placeholder}
                        onChangeText={field.onChange} value={field.value}
                        onBlur={(event) => {
                            setIsFocused(false);
                            field.onBlur?.(event);
                        }}
                        onFocus={() => setIsFocused(true)} />
                </View>
            }

            {errors[name] && <Text style={[style.error, errorStyle]}>{errors[name]?.message}</Text>}
        </View>
    )
}

NewInput.defaultProps = {
    placeholder: "",
    name: "Label",
    defaultValue: "",
    horizon: false
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
        fontSize: 12, color: Colors.Black, marginTop: 5,
        textDecorationLine: 'none', borderWidth: 1, borderColor: Colors.Gray, borderRadius: 10,
        paddingVertical: 0
    },
    horizonInput: {
        height: SCREEN_HEIGHT / 20, width: SCREEN_WIDTH * 0.4,
        fontSize: 12, color: Colors.Black,
        textDecorationLine: 'none', borderWidth: 1, borderColor: Colors.Gray, borderRadius: 10,
        paddingVertical: 0
    },
    error: {
        fontSize: 12, color: Colors.Red,
        marginLeft: 10,
    },
})




