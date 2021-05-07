import React from 'react';
import * as PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Text } from 'react-native';


export class LanguageProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { language } = this.context;
        const _language = language === 'vi' || !language ? 'vi' : 'en';
        const { messages, children } = this.props;
        return (
            <IntlProvider
                locale={_language}
                key={_language}
                messages={messages.translationMessages[_language]}
                textComponent={Text}>
                {React.Children.only(children)}
            </IntlProvider>
        );
    }
}

LanguageProvider.propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object,
    children: PropTypes.element.isRequired,
};

LanguageProvider.contextTypes = {
    language: PropTypes.string,
};

export default LanguageProvider;
