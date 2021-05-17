import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useController, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from '../ModalComponent/styles';


const DateTimePicker = props => {

    const { name, label, defaultValue, rules, horizon } = props;//props lien quan toi form
    const { containerStyle, labelStyle, inputStyle, errorStyle } = props;//props predefine style

    const { control, errors } = useFormContext();
    const { field } = useController({ name, rules, defaultValue, control });
    const [open, setOpen] = useState(false);

    const getBorderColor = () => {
        return errors[name] ? { borderColor: Colors.Red } : open ? { borderColor: Colors.BlueSky } : { borderColor: Colors.LightGray }
    }

    const dateConfirm = (date) => {
        var formatDate = changeDateFormat(date);
        console.log(formatDate);
        field.onChange(formatDate);
        setOpen(false);
    }

    const changeDateFormat = date => {//xu ly format date
        var newDate = new Date(date);
        var day = newDate.getDate();
        if (day.toString().length == 1) day = '0' + day
        var month = newDate.getMonth() + 1;
        if (month.toString().length == 1) month = '0' + month;
        var year = newDate.getFullYear();
        return day + '/' + month + '/' + year;
    }

    return (
        <>
            <DateTimePickerModal isVisible={open} mode='date' onConfirm={dateConfirm} onCancel={() => setOpen(false)} />
            <View style={[style.container, containerStyle]} >
                {//truong hop label khong thang hang voi text
                    <View style={horizon && { flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.label, labelStyle]}>{label}</Text>
                        <TouchableOpacity style={[horizon ? style.horizonInput : style.input, inputStyle, getBorderColor()]}
                            onPress={() => setOpen(true)}>
                            <Text style={style.inputText}>{field.value}</Text>
                            <View style={style.icon}>
                                <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/icons/CalendarLogo.png')}></Image>
                            </View>



                        </TouchableOpacity>
                    </View>
                }

                {errors[name] && <Text style={[style.error, errorStyle]}>{errors[name]?.message}</Text>}
            </View>
        </>
    )
}

DateTimePicker.defaultProps = {
    placeholder: "",
    name: "Label",
    defaultValue: "",
    horizon: false
}

export default DateTimePicker

const style = StyleSheet.create({
    containerStyle: {
        paddingVertical: 3
    },
    label: {
        fontSize: 12, color: Colors.Black
    },
    input: {
        flexDirection: 'row', alignItems: 'center',
        height: SCREEN_HEIGHT / 20, width: SCREEN_WIDTH * 0.7,
        borderWidth: 1, borderRadius: 10
    },
    horizonInput: {
        flexDirection: 'row', alignItems: 'center',
        height: SCREEN_HEIGHT / 20, width: SCREEN_WIDTH * 0.4,
        borderWidth: 1, borderRadius: 10
    },
    inputText: {
        fontSize: 14, color: Colors.Black, marginLeft: 5
    },
    error: {
        fontSize: 12, color: Colors.Red,
        marginLeft: 10,
    },
    icon: {
        height: '85%', aspectRatio: 1, position: 'absolute', right: 5,
    }
})




