
export default class ActionUtil {
    static async createThunkEffect(dispatch, actionType, effect, ...args) {//tao ra 1 scope thunk de dung chung
        dispatch({ type: actionType })//dispatch action truoc khi call api
        try {
            const response = await effect(...args);//call api
            dispatch({ type: actionType.replace('REQUEST', 'SUCESS'), payload: response, dispatch_time: new Date() })
        }
        catch (error) {
            dispatch({ type: actionType.replace('BEGIN', 'FAILED'), payload: error, dispatch_time: new Date() })
        }
        return response;
    }


    static checkObjectType(obj) {//tra ve true neu response dung theo mau
        if (typeof obj != "object" || obj == null) return false
        else if (Object.keys(obj).length != 5) return false
        else return true
    }
}