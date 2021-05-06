import {useIntl} from 'react-intl';


const trans = (key, _prams) => {
    const intl = useIntl();
    return intl.formatMessage(key, _prams);
};
export default trans;
