import { Colors, FontSize } from 'styles';

export default {
    // default style
    text: {
        fontSize: FontSize.Smaller,
        color: Colors.Black,
    },
    label: {
        fontSize: FontSize.Smaller,
        color: Colors.Gray,
    },
    // variations
    regular: {
        fontWeight: 'normal',
    },
    bold: {
        fontWeight: 'bold',
    },
    semibold: {
        fontWeight: '500',
    },
    medium: {
        fontWeight: '500',
    },
    light: {
        fontWeight: '200',
    },
    // position
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    // colors
    primary: { color: Colors.Primary },
    secondary: { color: Colors.Secondary },
    black: { color: Colors.Black },
    white: { color: Colors.White },
    gray: { color: Colors.Gray },
    // fonts
    h1: FontSize.h1,
    h2: FontSize.h2,
    h3: FontSize.h3,
    title: FontSize.Title,
    body: FontSize.Body,
    caption: FontSize.Caption,
    small: FontSize.Small,
};
