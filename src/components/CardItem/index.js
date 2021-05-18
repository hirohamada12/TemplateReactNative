import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { style } from './style';

export const CardItem = props => {
    const { id, maKT, ngayKT, tenKTV, diaChi, isChecked } = props.item;
    return (
        <View style={style.container}>
            <View style={style.headContainer}>
                <Text style={{ ...style.textStyle, marginRight: 15 }}>{id}</Text>
                <Text style={{ ...style.textStyle, marginRight: 20 }}>{maKT}</Text>
                <View style={{ ...style.calendarLogo, marginRight: 2 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/icons/CalendarLogo.png')} />
                </View>
                <Text style={{ ...style.textStyle, marginRight: 10 }}>{ngayKT}</Text>
            </View>
            <View style={style.otherContainer}>
                <View style={{ ...style.identityLogo, marginLeft: 10 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/icons/IdentityLogo.png')} />
                </View>
                <Text style={{ ...style.textStyle, marginLeft: 5 }}>{tenKTV}</Text>
            </View>
            <View style={style.otherContainer}>
                <View style={{ ...style.identityLogo, marginLeft: 10 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/icons/IdentityLogo.png')} />
                </View>
                <Text style={{ ...style.textStyle, marginLeft: 5 }}>{diaChi}</Text>
            </View>
            <Text style={style.statusText}>
                Chưa kiểm tra
            </Text>
        </View>
    )
}

export const DeleteItem = (props) => {
    return (
        <TouchableOpacity style={style.deleteButton} onPress={props.onPress}>
            <View style={{ width: '50%', aspectRatio: 1 }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/icons/TrashIcon.png')} />
            </View>
        </TouchableOpacity>
    )
}