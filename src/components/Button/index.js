import React from 'react';
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from 'styles'

export const Button = props => {
    const {
        customContainer, customImage, customText, imageSource, title, onPress
    } = props;

    return (

        <TouchableOpacity style={[style.container, customContainer]} onPress={onPress}>
            {imageSource && <View style={[style.imageView, customImage]}>
                <Image source={imageSource} />
            </View>}
            <Text style={[style.text, customText]}>{title}</Text>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
        borderColor: Colors.LightGray, borderWidth: 1, borderRadius: 20
    },
    imageView: {
        height: '60%', aspectRatio: 1, marginLeft: 5,
        justifyContent: 'center', alignItems: 'center'
    },
    image: {
        width: '60%', aspectRatio: 1
    },
    text: {
        fontSize: 16, color: Colors.Black
    }
})
