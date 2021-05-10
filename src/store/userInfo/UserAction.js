import ActionUtil from '../ActionUtil';
import UserEffect from './UserEffect';

export default class UserAction {
    static LOG_IN_REQUEST = 'Login_REQUEST';
    static LOG_IN_SUCCESS = 'Login_SUCESS';
    static LOG_IN_ERROR = "Login_ERROR";
    static LOG_IN_RESET = "Login_RESET";

    static TICKET_VALIDATE_REQUEST = 'TicketValidate_REQUEST';
    static TICKET_VALIDATE_SUCCESS = 'TicketValidate_SUCCESS';
    static TICKET_VALIDATE_ERROR = 'TicketValidate_ERROR';
    static TICKET_VALIDATE_RESET = 'TicketValidate_RESET';

    static LOG_OUT_BEGIN = 'LOG_OUT_BEGIN';
    static LOG_OUT_SUCCESS = 'LOG_OUT_SUCESS';
    static LOG_OUT_FAILED = 'LOG_OUT_FAILED';

    static LoginSSO(username, pass) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, UserAction.LOG_IN_REQUEST, UserEffect.DoLogin, username, pass)
        }
    }

    static ValidateTicket(ticket) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, UserAction.TICKET_VALIDATE_BEGIN, UserEffect.SendTicketValidate, ticket)
        }
    }

    static LogoutSSO(ticket) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, UserAction.LOG_OUT_BEGIN, UserEffect.LogOut, ticket)
        }
    }
}



