'use strict';


import ENV from 'react-native-config';


const orig = global.console.log;


global.console.log = function log() {
    if (ENV.DEV) {
        orig.apply(global.console, [
            `${new Date()
                .toISOString()
                .replace('T', ' ')
                .replace(/\..+/, '')}
            `,
            ...arguments
        ])
    }
}

