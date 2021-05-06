import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Colors} from 'styles';
import Home from 'screens/Home';
import {registerScreen} from 'navigation/utils';
import Detail from 'screens/Home/coop-home/Detail';

const HomeStack = createNativeStackNavigator();


const Name = 'HomeStack';
const HomeParams = {
    [Name]: {
        headerTitle: 'HomeStack',
        headerStyle: {backgroundColor: Colors.White},
        headerShown: false,
    },
};
const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerTitle: '',
            headerStyle: {backgroundColor: Colors.White},
            headerShown: false,
        }}>
            <HomeStack.Screen {...Home.screen} />
            <HomeStack.Screen {...Detail.screen}/>
        </HomeStack.Navigator>
    );
};


export default registerScreen(Name, HomeNavigator, HomeParams);