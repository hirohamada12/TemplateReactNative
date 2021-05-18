import { StyleSheet } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';

export const style = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 7.5,
        backgroundColor: Colors.Smoke, borderBottomWidth: 1,
        borderBottomColor: Colors.LightGray
    },
    headContainer: {
        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
        marginTop: 5, width: '100%'
    },
    otherContainer: {
        flexDirection: 'row', alignItems: 'center',
        marginTop: 5
    },
    textStyle: {
        fontSize: 12, color: 'black'
    },
    calendarLogo: {
        height: 20, aspectRatio: 1,
    },
    identityLogo: {
        height: 15, aspectRatio: 1.4
    },
    locationLogo: {
        height: 10, aspectRatio: 1
    },
    deleteButton: {
        justifyContent: 'center', alignItems: 'center',
        height: SCREEN_HEIGHT / 7.5, width: SCREEN_WIDTH * 0.15, backgroundColor: 'red',
        position: 'absolute', right: 0,
    },
    statusText: {
        alignSelf: 'flex-end', marginRight: 30,
        fontSize: 13, marginTop: 5
    }

})




