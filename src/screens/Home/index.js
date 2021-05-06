import React from 'react';
import {registerScreen} from 'navigation/utils';
import {TabBar, TabBarIcon} from './components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CoopHome from './coop-home';
import FormDemo from './FormDemo';
import Setting from './Setting';
import Detail from 'screens/Home/coop-home/Detail';

const Tab = createBottomTabNavigator();
const Name = 'Home';
const HomeParams = {
    [Name]: {},
};
const Home = (props) => {
    return (
        <Tab.Navigator
            lazy={false}
            tabBar={(props) => <TabBar {...props} />}
            tabBarOptions={{style: {paddingTop: 8}}}>
            <Tab.Screen
                {...CoopHome.screen}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon {...props} source={require('./assets/IconsHome.png')}/>
                    ),
                }}
            />
            <Tab.Screen
                {...FormDemo.screen}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon {...props} source={require('./assets/IconsHome.png')}/>
                    ),
                }}
            />
            <Tab.Screen
                {...Setting.screen}
                options={{
                    tabBarIcon: (props) => (
                        <TabBarIcon {...props} source={require('./assets/Settings.png')}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default registerScreen(Name, Home, HomeParams);
