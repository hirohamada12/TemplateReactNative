
export default class ActionUtil {
    static async createThunkEffect(dispatch, actionType, effect, ...args) {//tao ra 1 scope thunk de dung chung
        dispatch({ type: actionType, dispatch_time: new Date() })//dispatch action truoc khi call api
        const response = await effect(...args);//call api
        if (ActionUtil.checkObjectType(response)) { //dispatch action finished neu tra ve du lieu thanh cong
            dispatch({ type: actionType.replace('BEGIN', 'SUCCESS'), payload: response, dispatch_time: new Date() })
        } else dispatch({ type: actionType.replace('BEGIN', 'FAILED'), payload: response, dispatch_time: new Date() })
        return response;
    }


    static checkObjectType(obj) {//tra ve true neu response dung theo mau
        if (typeof obj != "object" || obj == null) return false
        else if (Object.keys(obj).length != 5) return false
        else return true
    }
}