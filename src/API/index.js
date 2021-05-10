import axios from 'axios';
import _ from 'lodash';
import { COMMON, STATUS, ENV } from 'constant';
import Storage from 'utils/Storage';
import { Dialog } from 'components';


export const client = axios.create({
    baseURL: ENV.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});



client.interceptors.request.use((config) => {
    // const token = await Storage.get(COMMON.USER_DATA);
    // config.headers.Authorization = token ? `Bearer ${token}` : '';

    Dialog.showLoading();
    return config;
});


client.interceptors.response.use(
    response => {
        // Dialog.hideLoading();
        return response;
    },
    error => {
        Dialog.hideLoading();
        if (!error.response) {
            throw new Error('Connection Error');
        }
        return Promise.reject(error);
    },
);

/**
 *
 * @param _url
 * @param _params
 * @returns {string}
 * @description build get request call api ex: https://example.com?param=1
 */
const buildGetRequest = (_url, _params) => {
    const urlRequest = new URL(_url);
    _.forOwn(_params, (value, key) => {
        urlRequest.searchParams.append(key, value);
    });
    return urlRequest.href;
};

/**
 *
 * @param _url
 * @param _params
 * @param _hasLoading
 * @returns {Promise<AxiosResponse<any> | void>}
 * @private
 */

const _get = (_url, _params) => {
    if (!_.isNil(_params)) {
        _url = buildGetRequest();
    }
    return client.get(_url).then(
        response => response.data,
        error => {
            console.error(error);
        });
};
/**
 *
 * @param _url
 * @param _params
 * @param _hasLoading
 * @returns {Promise<AxiosResponse<any> | void>}
 * @private
 */
const _post = (_url, _body, _params = {}) => {
    return client.post(_url, _body, { params: _params }).then(
        response => response.data,
        error => {
            if (error.response && error.response.status === 401) {
                Storage.delete(COMMON.USER_DATA);
            }
            const apiCallErrorMessage = getApiErrorMessage(error);
            console.error(error);
            return Promise.reject(error);

        });
};
/**
 *
 * @param token
 * @description set token authorization
 */

const setAuthorization = token => {
    client.defaults.headers.common.authorization = token;
};
const getApiErrorMessage = (err) => {
    let statusCode = STATUS.UNKNOWN;
    if (err.response) {
        // Request made and server responded (5xx, 4xx)
        statusCode = err.response.status;
    } else if (err.request) {
        // The request was made but no response was received
        if (err.message === 'Network Error') {
            statusCode = STATUS.NETWORK_ERROR;
        }
        if (err.message.toLocaleLowerCase().startsWith('timeout of')) {
            statusCode = STATUS.REQUEST_TIME_OUT;
        }
    } else {
        // Unhandle exception.
        statusCode = STATUS.UNKNOWN;
    }
    const apiError = apiErrorMesageMapping.filter((apiErr) => apiErr.statusCode === statusCode)[0];
    return apiError;
};

export const apiErrorMesageMapping = [
    { statusCode: STATUS.UNKNOWN, message: 'Some things went wrong.' },
    { statusCode: STATUS.NETWORK_ERROR, message: 'Network Error.' },
    { statusCode: STATUS.REQUEST_TIME_OUT, message: 'Request time out.' },
    { statusCode: STATUS.UNAUTHORIZED, message: 'Sorry, you session is expried please login again.' },
    { statusCode: STATUS.FORBIDDEN, message: 'Sorry, you don\'t have access to this page.' },
    { statusCode: STATUS.INTERNAL_SERVER_ERROR, message: 'Sorry, the server is reporting an error.' },
    { statusCode: STATUS.SERVER_UNAVAILABLE, message: 'Sorry, the service is unavailable' },
];

export { setAuthorization, _get, _post };
