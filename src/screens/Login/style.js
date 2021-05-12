import { StyleSheet } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';

export const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: Colors.LightPink, marginTop: 30,
        alignItems: 'center', paddingVertical: 10,
        borderRadius: 15,
    },
    inputStyle: {
        borderRadius: 10, borderWidth: 1
    }
})