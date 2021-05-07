import { client } from './index';
import { ENV } from 'constant';
export default {
    ssoLogin: (username, password) =>
        client({
            method: 'POST',
            url: `sso/login`,
            data: {
                username, password,
                authMethod: "JWT"
            }
        }),

    serviceValidate: (ticket) =>
        base({
            method: 'GET',
            url: `sso/serviceValidate`,
            params: {
                appCode: ENV.APP_CODE, ticket
            }
        }),
    logout: ticket =>
        base({
            method: 'GET',
            url: 'sso/logout',
            params: {
                ticket
            }
        })

};