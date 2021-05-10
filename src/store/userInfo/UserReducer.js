import UserAction from './UserAction';

const initialState = {
    ticket: null,
    userData: {}
}

export default (state = initialState, action) => {
    if (action.type === UserAction.LOG_IN_SUCCESS) {
        return { ...state, ticket: action.payload.ticket };

    } else if (action.type === UserAction.TICKET_VALIDATE_SUCCESS) {

        return { ...state, ticket: action.payload.ticket, userData: action.payload.userData };
    } else if (action.type === UserAction.TICKET_VALIDATE_ERROR) {
        return initialState;
    } else if (action.type === UserAction.LOG_OUT_SUCCESS) {

        return initialState;
    }
    return state;
};
