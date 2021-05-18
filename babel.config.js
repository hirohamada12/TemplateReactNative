module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    'plugins': [
        [
            'module-resolver',
            {
                'root': [
                    '.',
                ],
                'alias': {
                    'assets/*': './src/assets/*',
                    'images': './src/assets/images',
                    'icons': './src/assets/icons',
                    'navigation': './src/navigation',
                    'navigation/*': './src/navigation/*',
                    'screens': './src/screens',
                    'screens/*': './src/screens/*',
                    'splash': './src/modules/splash',
                    'utils': './src/utils',
                    'utils/*': './src/utils/*',
                    'translations': './src/utils/translations',
                    'translations/*': './src/utils/translations/*',
                    'msg': './src/utils/translations/msg',
                    'languages': './languages',
                    'styles': './src/styles',
                    'styles/*': './src/styles/*',
                    'components': './src/components',
                    'constant': './src/constant',
                    'context': './src/context',
                    'api': './src/API',
                    'store': './src/store',
                    'store/*': './src/store/*',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
    'env': {
        'production': {
            'plugins': [
                'transform-remove-console', 'react-native-paper/babel'
            ],
        },
    },
};
