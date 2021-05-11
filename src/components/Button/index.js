import React from 'react';
import { Text, Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles'

export const Button = props => {
    const {
        containerStyle, imageStyle, textStyle, imageSource, title, onPress
    } = props;

    return (

        <TouchableOpacity style={[style.container, containerStyle]} onPress={onPress}>
            {imageSource && <View style={[style.imageView, imageStyle]}>
                <Image source={imageSource} />
            </View>}
            <Text style={[style.text, textStyle]}>{title}</Text>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        width: SCREEN_WIDTH / 2, height: SCREEN_WIDTH / 8,
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
