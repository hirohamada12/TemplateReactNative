import ActionUtil from '../ActionUtil';
import UserEffect from './UserEffect';

export default class UserAction {
    static LOG_IN_BEGIN = 'LOG_IN_BEGIN';
    static LOG_IN_SUCCESS = 'LOG_IN_SUCESS';
    static LOG_IN_FAILED = "LOG_IN_FAILED";

    static TICKET_VALIDATE_BEGIN = 'TICKET_VALIDATE_BEGIN';
    static TICKET_VALIDATE_SUCCESS = 'TICKET_VALIDATE_SUCCESS';
    static TICKET_VALIDATE_FAILED = 'TICKET_VALIDATE_FAILED';

    static LOG_OUT_BEGIN = 'LOG_OUT_BEGIN';
    static LOG_OUT_SUCCESS = 'LOG_OUT_SUCESS';
    static LOG_OUT_FAILED = 'LOG_OUT_FAILED';

    static LoginSSO(username, pass) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, UserAction.LOG_IN_BEGIN, UserEffect.DoLogin, username, pass)
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



