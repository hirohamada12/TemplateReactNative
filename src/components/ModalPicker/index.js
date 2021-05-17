import React, { memo, useEffect, useState } from 'react';
import {
    StyleSheet, View, FlatList, Text, Platform,
    TouchableOpacity, TextInput,
} from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
import Modal from 'react-native-modal';
import IconSearch from '../../assets/icons-svg/icon-search.svg';
import { useController, useFormContext } from 'react-hook-form';

const ModalPicker = memo((props) => {

    const { name, label, defaultValue, rules, itemList } = props;//props lien quan toi form
    /*
       name: ten input (require)
       label: lable phia tren picker,
       defaultValue: mac dinh lay tu data cua form
       itemList: danh sach cac gia tri (default mau o duoi)
       horizon: true neu label va picker nam cung 1 dong
   */

    const { containerStyle, labelStyle, errorStyle } = props;//props predefine style

    const [open, setOpen] = useState(false);//bat tat modal

    const { control, errors } = useFormContext();
    const { field } = useController({ name, rules, defaultValue, control });

    return (
        <>
            <Modal style={{ justifyContent: 'center', alignItems: 'center' }} isVisible={open}
                onBackdropPress={() => setOpen(false)} backdropOpacity={0.4} useNativeDriver={true} hideModalContentWhileAnimating
                animationIn='fadeIn' animationOut='fadeOut' backdropTransitionOutTiming={0}>
                <View style={styles.container}>
                    {/* <View style={styles.searchContainer}>
                        <IconSearch width={20} height={20} />
                        <TextInput style={styles.searchBar} placeholder={'hahaah'} ></TextInput>
                    </View> */}


                    <FlatList data={itemList} keyExtractor={(item, index) => item + index} style={styles.flatList}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.pickerItem} index={index} onPress={() => field.onChange(item)}>
                                <Text style={styles.pickerText}>{item}</Text>
                            </TouchableOpacity>
                        )} showsVerticalScrollIndicator={true} />
                </View>
            </Modal>
            <View style={[style.container, containerStyle]} >

                <View style={[{ paddingVertical: 0 }, horizon && { flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={[style.label, labelStyle]}>{label}</Text>
                    <TouchableOpacity style={{ width: SCREEN_WIDTH / 2, height: SCREEN_HEIGHT / 25, borderWidth: 1 }} onPress={() => setOpen(true)}>

                    </TouchableOpacity>
                </View>
                {errors[name] && <Text style={[style.error, errorStyle]}>{errors[name]?.message}</Text>}
            </View>

        </>
    )
});

ModalPicker.defaultProps = {
    name: 'label',
    itemList: [{
        value: 'Banana', label: '1'
    }, {
        value: 'Mango', label: '2'
    }, {
        value: 'Pear', label: '3'
    }],
    label: ''
}

export default ModalPicker
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        width: SCREEN_WIDTH * 4 / 5,
        borderRadius: 10,
        alignItems: 'center', marginTop: SCREEN_HEIGHT / 10
    },
    searchContainer: {
        flexDirection: 'row', alignItems: 'center',
        width: '90%',
        marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#dcdcdc',
    },
    search: {
        width: '90%', height: SCREEN_HEIGHT / 16, marginTop: 20,
        flexDirection: 'row', alignItems: 'center',
    },
    searchBar: {

        marginLeft: 5,
        fontSize: 18, fontFamily: Platform.OS == 'android' ? 'SF-UI-Text-Regular' : 'SFUIText-Regular',
    },
    iconSearch: {
        marginLeft: 10
    },
    flatList: {
        width: '100%', height: SCREEN_HEIGHT / 3
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040'
    },

    pickerItem: {
        width: '90%', height: SCREEN_HEIGHT / 12, justifyContent: 'center',
        alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: Colors.Smoke
    },
    pickerText: {
        fontSize: 18, marginLeft: 4

    }
})

const style = StyleSheet.create({
    container: {
        paddingVertical: 3
    },
    label: {
        fontSize: 12, color: Colors.Black
    },

    error: {
        fontSize: 12, color: Colors.Red,
        marginLeft: 10,
    },
})