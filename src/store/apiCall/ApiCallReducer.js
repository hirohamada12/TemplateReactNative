
const initialState = {
    call_time: null,
    apiCallError: false,
    message: "",

};

export default (state = initialState, action) => {

    if (action.type.includes("BEGIN")) {
        return { ...state, call_time: action.dispatch_time };
        // eslint-disable-next-line
    } else if (action.type.includes("SUCCESS")) {
        // if (state.apiCallsInProgress === 0) {
        //     return state;
        // }
        return { ...state, call_time: action.dispatch_time, apiCallError: true, mesage: action.payload.message };
    } else if (action.type.includes("FALIED")) {
        return { ...state, call_time: action.dispatch_time, apiCallError: false, message: action.payload.message };
    } else if (action.type.includes("NON_API")) return { ...state, call_time: action.dispatch_time, message: action.message, apiCallError: null }
    return state;
}



