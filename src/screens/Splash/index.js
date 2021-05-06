import React from 'react';
import {StyleSheet, View} from 'react-native';
import {registerScreen} from 'navigation/utils';
import LottieView from 'lottie-react-native';
import {Layout} from 'constant';
import {Colors} from 'styles';

const ANI_SIZE = Layout.screen.width;

const Name = 'Splash';

const options = {
    stackAnimation: 'fade',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.White,
    },
    ani: {
        width: ANI_SIZE,
        height: ANI_SIZE,
    },
});

const Splash = () => {
    return (
        <>
            <View style={styles.container}>
                <LottieView
                    style={styles.ani}
                    autoPlay
                    source={require('../../assets/animations/splash-animation.json')}
                />
            </View>
        </>
    );
};

export default registerScreen(Name, Splash, options);
