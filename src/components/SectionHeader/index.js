import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const SectionHeader = (props) => {
    const { imgSource, svg, title, } = props;
    /*
        imgSource: icon, not required
        svg: co phai anh svg hay k
        title: title header
    */

    const SvgImage = svg ? imgSource.default : null;
    const { containerStyle, textStyle, imageStyle } = props;
    return (
        <View style={[style.container, containerStyle]}>
            {imgSource && <View style={[style.imageView, imageStyle]}>
                {svg ? <SvgImage width='100%' height='100%' />
                    : <Image source={imgSource} style={{ width: '100%', height: '100%' }} />}
            </View>}
            <Text style={[style.text, textStyle]}>{title}</Text>
        </View>
    )
}

export default SectionHeader

//default style
const style = StyleSheet.create({
    container: {
        flexDirection: 'row', padding: 5,
        alignItems: 'center'
    },
    imageView: {
        justifyContent: 'center', alignItems: 'center',
        height: '90%', aspectRatio: 1
    },
    text: {
        fontSize: 18, fontWeight: 'bold', marginLeft: 5
    }
})