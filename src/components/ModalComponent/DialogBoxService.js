import trans from 'translations/trans';

import {Colors} from 'styles';

/**
 * @author ANHVTN11
 * 01/11/2019
 * */

let _messages;

function alert(message = '', _action = null, title = trans.modal.titleDefault, btnClose = trans.modal.buttonCancel) {
    _messages?.tip({
        title: title,
        content: message,
        btn: {
            text: btnClose,
            callback: _action,
        },
    });
}

function error(message = '', _action = null, title = trans.modal.titleError, btnClose = trans.modal.buttonCancel) {
    _messages?.tip({
        title: title,
        content: message,
        icon: 'exclamation-circle',
        color: Colors.Red,
        btn: {
            text: btnClose,
            callback: _action,
        },
    });
}

function showLoading(isLoading = true, type = true) {
    _messages?.loading(isLoading);
}

function hideLoading(isLoading = false) {
    _messages?.loading(isLoading);
}

function confirm(message = '',
                 _confirm = null,
                 _cancel = null,
                 title = trans.modal.titleDefault,
                 txtOK = trans.modal.buttonConfirm,
                 txtCancel = trans.modal.buttonCancel) {
    _messages?.confirm({
        title: title,
        content: message,
        ok: {
            text: txtOK,
            callback: _confirm,
        },
        cancel: {
            text: txtCancel,
            callback: _cancel,
        },
    });
}


function setDialogRef(dialogRef) {
    _messages = dialogRef;
}

export default {
    confirm,
    hideLoading,
    showLoading,
    error,
    alert,
    setDialogRef,
};
