import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Colors} from 'styles/colors';
import Home from './HomeNavigator';
import Splash from 'screens/Splash';
import {useAuth} from 'context';
import Login from 'screens/Login';
import _ from 'lodash';
import {GoogleSignin} from '@react-native-community/google-signin';
const MainStack = createNativeStackNavigator();

const MainScreen = () => {
    const {loading, setLoading, userInfo, setUserInfo} = useAuth();
    const [isAuth, setIsAuth] = React.useState(false);

    const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();

        setUserInfo(currentUser);
    };

    // React.useEffect(() => {
    //     Promise.all([Storage.get(COMMON.USER_DATA)]).then((userData) => {
    //         if (!_.isNil(userData)) {
    //             setUserInfo(userData);
    //         }
    //     });
    // }, []);

    React.useEffect(() => {
        //* async init module here
        getCurrentUser();

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [loading]);


    React.useEffect(() => {
        if (!_.isNil(userInfo)) {
            setIsAuth(true);
        }
    }, [userInfo]);

    return (
        <MainStack.Navigator
            screenOptions={{
                headerTitle: '',
                headerStyle: {backgroundColor: Colors.White},
                headerShown: false,
            }}>
            {loading && <MainStack.Screen {...Splash.screen} />}
            {isAuth ? <MainStack.Screen {...Home.screen}/> : <MainStack.Screen {...Login.screen}/>}
        </MainStack.Navigator>
    );
};

export default MainScreen;
