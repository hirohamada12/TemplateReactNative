import React from 'react';
import * as PropTypes from 'prop-types';


export const LanguageContext = React.createContext();

class LanguageProvider extends React.Component {
    constructor(props) {
        super(props);
        let language = 'vi';
        this.state = {
            language: language,
        };
    }

    componentDidMount = async () => {
        const language = 'vi';
        this.setState({
            language: language || 'vi',
        });
    };

    getChildContext = () => {
        const {language} = this.state;
        if (language && language !== 'vi') {
            return {
                language: 'en',
            };
        }
        return {
            language: this.state.language,
        };
    };

    render() {
        if (!this.state.language) {
            return null;
        }
        return (
            <LanguageContext.Provider
                value={{
                    state: this.state,
                    updateLanguage: language => this.setState({language: language}),
                }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

LanguageProvider.childContextTypes = {
    language: PropTypes.string,
};

LanguageProvider.propTypes = {
    language: PropTypes.string,
};

export default LanguageProvider;
