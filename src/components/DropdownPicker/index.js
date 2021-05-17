import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { useController, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';



const DropdownPicker = props => {

    const { name, label, defaultValue, rules, itemList, horizon } = props;//props lien quan toi form
    /*
       name: ten input (require)
       label: lable phia tren picker,
       defaultValue: mac dinh lay tu data cua form
       itemList: danh sach cac gia tri (default mau o duoi)
       horizon: true neu label va picker nam cung 1 dong
   */


    const { pickerStyle, labelStyle, errorStyle, searchable, width, height, scrollHeight } = props;
    /*
        width, height: style cua picker (khong lien quan den lable va error) (required)
        pickerStyle: style cua picker (khong lien quan den label va error)
        labelStyle : style cua label phia tren
        errorStyle: style error phia duoi picker
        searchable: picker co support search (default false)
        scrollHeight: height cua phan scroll duoi la bao nhieu (default 60)
    */

    const { control, errors } = useFormContext();
    const { field } = useController({ name, rules, defaultValue, control });

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(field.value);
    const [items, setItems] = useState(itemList);



    return (
        <View >
            <View style={horizon && { flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[style.label, labelStyle]}>{label}</Text>
                <DropDownPicker style={[{ width, height }, pickerStyle]} searchable={searchable} listItemContainerStyle={[{ width, height }]}
                    dropDownpickerStyle={{ marginTop: 0 }} maxHeight={scrollHeight} listMode={"SCROLLVIEW"}
                    placeholder='Chon' scrollViewProps={{ nestedScrollEnabled: true }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
            {errors[name] && <Text style={[style.error, errorStyle]}>{errors[name]?.message}</Text>}
        </View>

    )
}

DropdownPicker.defaultProps = {
    itemList: [],
    defaultValue: "",
    horizon: false,
    searchable: false,
    scrollHeight: 90
}

export default DropdownPicker

const style = StyleSheet.create({
    label: {
        fontSize: 14, color: Colors.Black,
    },

    error: {
        fontSize: 12, color: Colors.Red,
        marginLeft: 10,
    },
})
