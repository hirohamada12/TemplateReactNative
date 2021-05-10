
export default class ActionUtil {
    static async createThunkEffect(dispatch, actionType, effect, ...args) {//tao ra 1 scope thunk de dung chung
        dispatch({ type: actionType })//dispatch action truoc khi call api
        try {
            const response = await effect();//call api
            dispatch({ type: actionType.replace('REQUEST', 'SUCESS'), payload: response, dispatch_time: new Date() })
        }
        catch (error) {
            dispatch({ type: actionType.replace('BEGIN', 'FAILED'), payload: error, dispatch_time: new Date() })
        }
        return response;
    }



}