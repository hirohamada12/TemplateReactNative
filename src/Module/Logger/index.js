'use strict';

import RNFS from 'react-native-fs';
import {addDevLog} from "../DB";

const PREFIX_LOG_INFO = 'I/';
const PREFIX_LOG_WARN = 'W/';
const PREFIX_LOG_ERROR = 'E/';
const PREFIX_LOG_CRASH = 'C/';

const events = [];
const logFileName = 'log';
const logFileType = 'txt';

let lastTimeClearLog = null;

const info = (key = '', data) => {
    const _key = key.startsWith(PREFIX_LOG_INFO)
        ? key
        : `${PREFIX_LOG_INFO}: ${key}`;
    addDevLog({key: _key, data: data})
};

const warn = (key = '', data) => {
    const _key = key.startsWith(PREFIX_LOG_WARN)
        ? key
        : `${PREFIX_LOG_WARN}: ${key}`;
    addDevLog({key: _key, data: data})
};

const error = (key = '', data) => {
    const _key = key.startsWith(PREFIX_LOG_ERROR)
        ? key
        : `${PREFIX_LOG_ERROR}: ${key}`;
    addDevLog({key: _key, data: data})
};

const crash = (key = '', data) => {
    const _key = key.startsWith(PREFIX_LOG_CRASH)
        ? key
        : `${PREFIX_LOG_CRASH}: ${key}`;
    addDevLog({key: _key, data: data})
};

const addListener = (fn) => {
    events.push(fn)
}


const Log = {
    info,
    warn,
    error,
    crash,
    addListener,
};

export default Log