import {TYPES} from '../actions/ApiCallAction';

const initialState = {
    apiCallsInProgress: 0,
    apiCallError: null,
};

export default (state = initialState, action) => {
    if (action.type === TYPES.BEGIN_API_CALL) {
        return {...state, apiCallsInProgress: state.apiCallsInProgress + 1};
        // eslint-disable-next-line
    } else if (action.type === TYPES.END_API_CALL) {
        if (state.apiCallsInProgress === 0) {
            return state;
        }
        return {...state, apiCallsInProgress: state.apiCallsInProgress - 1};
    } else if (action.type === TYPES.API_CALL_ERROR) {
        return {...state, apiCallsInProgress: state.apiCallsInProgress - 1, apiCallError: action.error};
    } else if (action.type === TYPES.CLEAR_API_CALL_ERROR) {
        if (state.apiCallError === null) {
            return state;
        }
        return {...state, apiCallError: null};
    }
    return state;
};
