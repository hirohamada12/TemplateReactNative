/* global */
import React, {useEffect} from 'react';
import AppNavigator from 'navigation/navigator/AppNavigator';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNSplashScreen from 'react-native-splash-screen';
import AppTheme from 'styles';
import {getBuildNumber, getBundleId, getVersion} from 'react-native-device-info';
import Config from 'react-native-config';
import * as Sentry from '@sentry/react-native';
import {Provider} from 'react-redux';
import {store} from 'store';
import {GoogleSignin} from '@react-native-community/google-signin';
import LanguageProvider from 'translations/LanguageProvider';
import LanguageContext from 'translations/LanguageContext';
import translationMessages from 'translations';
//* required to improvement native screens
enableScreens();

//* Init Sentry
if (!__DEV__) {
    Sentry.init({
        dsn: Config.DNS,
        release: `${getBundleId()}:${getVersion()}:${getBuildNumber()}`,
        dist: getBuildNumber(),
    });
}

//* check init intl
if (!global.Intl) {
    require('intl');
    require('intl/locale-data/jsonp/vi-VN.js');
}

const App = () => {
    useEffect(() => {
        RNSplashScreen.hide();
    }, []);

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'],
            iosClientId: '738304686148-bim9rrvaq3ghmgpu9h676qjupmltummh.apps.googleusercontent.com',
        });
    }, []);


    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <LanguageContext>
                    <LanguageProvider messages={translationMessages}>
                        <AppTheme>
                            <AppNavigator/>
                        </AppTheme>
                    </LanguageProvider>
                </LanguageContext>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
////import {setJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler';
