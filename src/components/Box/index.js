import React, { Component } from 'react';
import { handleMargins, handlePaddings } from '../../styles'
import { View } from 'react-native';
import stylesheet from './index.style';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';


export default class Box extends Component {
    getStyle = () => {
        return stylesheet;
    };

    render() {
        const styles = this.getStyle();
        const {
            flex,
            row,
            column,
            center,
            middle,
            left,
            right,
            card,
            shadow,
            color,
            space,
            style,
            padding,
            margin,
            children,
            spaceBetween,
            width,
            height,
            animated,
            borderRadius,
            ...props
        } = this.props;

        const blockStyles = [
            flex && { flex },
            flex === false && { flex: 0 }, // reset / disable flex
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            borderRadius && { borderRadius },
            left && styles.left,
            right && styles.right,
            spaceBetween && styles.spaceBetween,
            card && styles.card,
            shadow && styles.shadow,
            width && { width },
            height && { height },
            margin && { ...handleMargins(margin) },
            padding && { ...handlePaddings(padding) },
            space && { justifyContent: `space-${space}` },
            color && styles[color], // predefined styles colors for backgroundColor
            color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
            style, // rewrite predefined styles
        ];

        if (animated) {
            return (
                <Animated.View style={blockStyles} {...props}>
                    {children}
                </Animated.View>
            );
        }
        return (
            <View style={blockStyles} {...props}>
                {children}
            </View>
        );
    }
}
Box.propTypes = {
    flex: PropTypes.number,
    row: PropTypes.bool,
    column: PropTypes.bool,
    center: PropTypes.bool,
    middle: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    card: PropTypes.bool,
    shadow: PropTypes.bool,
    color: PropTypes.string,
    space: PropTypes.bool,
    style: PropTypes.object,
    padding: PropTypes.number,
    margin: PropTypes.number,
    children: PropTypes.any,
    spaceBetween: PropTypes.number,
    animated: PropTypes.bool,
    borderRadius: PropTypes.number,
    width: PropTypes.any,
    height: PropTypes.any,
};
