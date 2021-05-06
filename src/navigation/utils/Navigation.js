import React from 'react';
import throttle from 'lodash.throttle';

const navigateSafe = (navigate: any, time = 2000) =>
    throttle(navigate, time, {trailing: false});

export const navigatorRef = React.createRef();

export const registerScreen = (name, Comp, options) => {
    console.log(options);
    return {
        screen: {
            name,
            component: Comp,
            options,
        },
        present: (navigation, params?) => {
            navigateSafe(navigation.navigate({name, params: params}));
        },
    };
};
