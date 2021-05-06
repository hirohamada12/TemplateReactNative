export const TYPES = {
    BEGIN_API_CALL: 'BEGIN_API_CALL',
    END_API_CALL: 'END_API_CALL',
    CLEAR_API_CALL_ERROR: 'CLEAR_API_CALL_ERROR',
    API_CALL_ERROR: 'API_CALL_ERROR',
};


export const beginCallApi = () => ({type: TYPES.BEGIN_API_CALL});
export const endCallApi = () => ({type: TYPES.END_API_CALL});
export const apiCallErrorAction = (error) => ({type: TYPES.API_CALL_ERROR, error});
export const clearApiCallError = () => ({type: TYPES.CLEAR_API_CALL_ERROR});