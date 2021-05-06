import {Colors, FontSize} from 'styles';

export default {
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    card: {
        borderRadius: FontSize.Medium,
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
    left: {
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    shadow: {
        shadowColor: Colors.black,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 4,
    },
    accent: {backgroundColor: Colors.accent},
    primary: {backgroundColor: Colors.Primary},
    secondary: {backgroundColor: Colors.Secondary},
    black: {backgroundColor: Colors.Black},
    white: {backgroundColor: Colors.White},
    gray: {backgroundColor: Colors.Gray},
};

