import { Dimensions, StyleSheet } from 'react-native';
import { Colors, SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles';

const { width } = Dimensions.get('window');
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
        alignItems: 'center', flexDirection: 'row', justifyContent: 'center',
        width: '100%', height: SCREEN_HEIGHT / 10
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
    backButton: {
        height: '30%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center',
        position: 'absolute', left: 20,

    }
};
