import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from './Main';
import {AuthProvider} from 'context';
import {navigatorRef} from 'navigation/utils';
import {Dialog, DialogBox} from 'components';

const App = () => {
    return (
        <NavigationContainer ref={navigatorRef}>
            <>
                <AuthProvider>
                    <MainScreen/>
                </AuthProvider>
                <DialogBox childRef={(ref) => Dialog.setDialogRef(ref)}/>
            </>

        </NavigationContainer>
    );
};

export default App;
