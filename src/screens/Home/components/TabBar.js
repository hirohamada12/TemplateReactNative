import React from 'react';
import {SafeAreaView} from 'react-native';
import {Route} from '@react-navigation/core';
import {Colors, GlobalStyles} from 'styles';
import PropTypes from 'prop-types';
import TabBarItem from './TabBarItem';


const TabBar = ({state, descriptors, navigation}) => {
    const onTabPress = (route, index) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (state.index !== index && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    const onTabLongPress = (route: Route<string>) => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };

    return (
        <SafeAreaView
            style={{
                backgroundColor: Colors.White,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                ...GlobalStyles.shadow,
            }}>
            {state.routes.map((route, index) => (
                <TabBarItem
                    key={route.key}
                    active={index === state.index}
                    options={descriptors[route.key].options}
                    onPress={() => onTabPress(route, index)}
                    onLongPress={() => onTabLongPress(route)}
                />
            ))}
        </SafeAreaView>
    );
};
TabBar.propTypes = {
    state: PropTypes.object,
    descriptors: PropTypes.any,
    navigation: PropTypes.any,
};

export default TabBar;
