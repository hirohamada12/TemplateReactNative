import ActionUtil from '../ActionUtil';
import UserEffect from './UserEffect';
import { setAuthorization, _get, _post } from '../../API/'

export default class UserAction {
    static LOG_IN_REQUEST = 'Login_REQUEST';
    static LOG_IN_SUCCESS = 'Login_SUCESS';
    static LOG_IN_ERROR = "Login_ERROR";
    static LOG_IN_RESET = "Login_RESET";

    static TICKET_VALIDATE_REQUEST = 'TicketValidate_REQUEST';
    static TICKET_VALIDATE_SUCCESS = 'TicketValidate_SUCCESS';
    static TICKET_VALIDATE_ERROR = 'TicketValidate_ERROR';
    static TICKET_VALIDATE_RESET = 'TicketValidate_RESET';

    static LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
    static LOG_OUT_SUCCESS = 'LOG_OUT_SUCESS';
    static LOG_OUT_ERROR = 'LOG_OUT_ERROR';

    static LoginSSO(username, password) {
        return async (dispatch) => {
            const body = {
                username, password,
                authMethod: "JWT"
            }
            await ActionUtil.createThunkEffect(dispatch, UserAction.LOG_IN_REQUEST, _post, 'sso/login', body)
        }
    }

    static ValidateTicket(ticket) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, UserAction.TICKET_VALIDATE_REQUEST, _get, 'sso/serviceValidate', ticket)
        }
    }

    static LogoutSSO(ticket) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, UserAction.LOG_OUT_REQUEST, _get, 'sso/logout', ticket)
        }
    }
}



