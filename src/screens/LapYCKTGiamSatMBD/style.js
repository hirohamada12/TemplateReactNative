import { StyleSheet } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
export const style = StyleSheet.create({
    headerContainer: {
        width: '100%', height: SCREEN_HEIGHT / 10,
        justifyContent: 'center', alignItems: 'center'
    },
    buttonContainer: {
        width: '95%', height: SCREEN_HEIGHT / 20,
        flexDirection: 'row'
    },
    normalTitleButton: {
        fontSize: 15
    },
    colorTitleButton: {
        fontSize: 15, color: 'red', textDecorationLine: 'underline'
    },
    sectionHeader: {
        alignSelf: 'flex-start',
        marginLeft: 10, marginBottom: 10
    },
    radioContainer: {
        alignSelf: 'flex-end', flexDirection: 'row', paddingHorizontal: 5,
        marginRight: 20, alignItems: 'center', marginBottom: 0
    },
    radioText: {
        marginLeft: 3, fontSize: 12
    },
    inputContainer: {
        width: '90%', paddingVertical: 2,
        marginBottom: 10, marginLeft: 10
    },
    input: {
        width: SCREEN_WIDTH / 1.7, aspectRatio: 8
    },
    searchButton: {
        width: '95%', height: SCREEN_HEIGHT / 12, backgroundColor: Colors.BlueSky,
        borderColor: Colors.BlueSky, marginTop: 10,
    },
    searchTitle: {
        fontSize: 20, color: 'white',
    }
})