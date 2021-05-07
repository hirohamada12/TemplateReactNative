import Login from '../../API/Login';
import { TransformError } from '../TransformError'
export default class UserEffect {
    static async DoLogin(username, pass) {
        try {
            const res = await Login.ssoLogin(username, pass);
            return res.data
        }
        catch (error) {
            return TransformError(error);
        }
    }

    static async SendTicketValidate(ticket) {
        try {
            const res = await Login.serviceValidate(ticket);
            return res.data
        }
        catch (error) {
            return TransformError(error);
        }
    }

    static async LogOut(ticket) {
        try {
            const res = await Login.logout(ticket);
            return res.data
        }
        catch (error) {
            return TransformError(error);
        }
    }
}