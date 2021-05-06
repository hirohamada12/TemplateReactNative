import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from 'styles';

const {width} = Dimensions.get('window');
const aspectRatio = 554 / 900;
const height = (width - 100) * aspectRatio;
export default {
    header: {
        overflow: 'hidden',
        backgroundColor: Colors.White,
        alignItems: 'center',
        //height: height * 0.61,
        //borderBottomLeftRadius: theme.borderRadii.xl,
    },
    header2: {
        //borderTopLeftRadius: 0,
    },
    imagebgHeader2: {
        ...StyleSheet.absoluteFillObject,
        height,
        width,
        top: -height * 0.61,
    },
    imagebgHeader: {
        marginTop: 70,
        width: width - 100,
        height: height - 100,
        //borderBottomLeftRadius: theme.borderRadii.xl,
    },
    footer: {},
};
