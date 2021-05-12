import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
import { Dropdown } from 'react-native-material-dropdown';
import { useController, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';


const DropdownPicker = props => {

    const { name, label, defaultValue, rules, itemList, horizon } = props;//props lien quan toi form
    const { containerStyle, inputStyle, labelStyle, errorStyle } = props;

    const { control, errors } = useFormContext();
    const { field } = useController({ name, rules, defaultValue, control });



    return (
        <View style={[style.container, containerStyle]} >

            <View style={[{ paddingVertical: 0 }, horizon && { flexDirection: 'row', alignItems: 'center' }]}>
                <Text style={[style.label, labelStyle]}>{label}</Text>
                <Dropdown containerStyle={[style.input, inputStyle]} data={itemList}
                    onChangeText={field.onChange} />
            </View>
            {errors[name] && <Text style={[style.error, errorStyle]}>{errors[name]?.message}</Text>}
        </View>

    )
}
const DropIcon = () => {
    return (
        <Image source={require('')} />

    )
}
DropdownPicker.defaultProps = {
    value: "",
    valueList: [],
    defaultValue: "",
    horizon: false
}

export default DropdownPicker

const style = StyleSheet.create({
    container: {
        paddingVertical: 3
    },
    label: {
        fontSize: 14, color: Colors.Black,
    },
    input: {
        height: SCREEN_HEIGHT / 20, width: SCREEN_WIDTH * 0.7,
        marginTop: 5
    },
    horizonInput: {
        height: SCREEN_HEIGHT / 20, width: SCREEN_WIDTH * 0.4,
        marginLeft: 20
    },
    error: {
        fontSize: 12, color: Colors.Red,
        marginLeft: 10,
    },
})
