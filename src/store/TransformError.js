import { STATUS } from 'constant';
export const TransformError = (err) => {
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
    return { code: statusCode, message: apiError }


}

const apiErrorMesageMapping = [
    { statusCode: STATUS.UNKNOWN, message: 'Some things went wrong.' },
    { statusCode: STATUS.NETWORK_ERROR, message: 'Network Error.' },
    { statusCode: STATUS.REQUEST_TIME_OUT, message: 'Request time out.' },
    { statusCode: STATUS.UNAUTHORIZED, message: 'Sorry, you session is expried please login again.' },
    { statusCode: STATUS.FORBIDDEN, message: 'Sorry, you don\'t have access to this page.' },
    { statusCode: STATUS.INTERNAL_SERVER_ERROR, message: 'Sorry, the server is reporting an error.' },
    { statusCode: STATUS.SERVER_UNAVAILABLE, message: 'Sorry, the service is unavailable' },
];