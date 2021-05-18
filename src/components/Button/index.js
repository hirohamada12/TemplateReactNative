import React from 'react';
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles'

export const Button = props => {
    const {
        containerStyle, imageStyle, textStyle, imageSource, title, onPress
    } = props;
    /*
        containerStyle: style cua toan bo button
        imageStyle: style icon cua button (neu co imageSource)
        textStyle: style cua title button
        title: title button
        onPress: default
    */

    return (

        <TouchableOpacity style={[style.container, containerStyle]} onPress={onPress}>
            {imageSource && <View style={[style.imageView, imageStyle]}>
                <Image source={imageSource} style={style.image} />
            </View>}
            <Text style={[style.text, textStyle]}>{title}</Text>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',

        borderColor: Colors.LightGray, borderWidth: 1,
    },
    imageView: {
        height: '60%', aspectRatio: 1, marginLeft: 5,
        justifyContent: 'center', alignItems: 'center'
    },
    image: {
        width: '100%', height: '100%'
    },
    text: {
        fontSize: 16, color: Colors.Black
    }
})
