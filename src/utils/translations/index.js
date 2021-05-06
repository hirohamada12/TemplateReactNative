const DEFAULT_LOCALE = 'en';
const viTranslationMessages = require('./vi.json');
const enTranslationMessages = require('./en.json');

const appLocales = ['vi', 'en'];

const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages =
        locale !== DEFAULT_LOCALE
            ? formatTranslationMessages(DEFAULT_LOCALE, viTranslationMessages)
            : {};
    return Object.keys(messages).reduce((formattedMessages, key) => {
        let message = messages[key];
        if (!message && locale !== DEFAULT_LOCALE) {
            message = defaultFormattedMessages[key];
        }
        return Object.assign(formattedMessages, {[key]: message});
    }, {});
};

const translationMessages = {
    vi: formatTranslationMessages('vi', viTranslationMessages),
    en: formatTranslationMessages('en', enTranslationMessages),
};

// eslint-disable-next-line no-undef
exports.translationMessages = translationMessages;
// eslint-disable-next-line no-undef
exports.formatTranslationMessages = formatTranslationMessages;
// eslint-disable-next-line no-undef
exports.appLocales = appLocales;
