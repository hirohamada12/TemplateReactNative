import React, {Component} from 'react';
import {View} from 'react-native';
import stylesheet from './index.style';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';

export default class Box extends Component {
    getStyle = () => {
        return stylesheet;
    };

    handleMargins() {
        const {margin} = this.props;
        if (typeof margin === 'number') {
            return {
                marginTop: margin,
                marginRight: margin,
                marginBottom: margin,
                marginLeft: margin,
            };
        }

        if (typeof margin === 'object') {
            const marginSize = Object.keys(margin).length;
            switch (marginSize) {
                case 1:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[0],
                        marginBottom: margin[0],
                        marginLeft: margin[0],
                    };
                case 2:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[0],
                        marginLeft: margin[1],
                    };
                case 3:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[1],
                    };
                default:
                    return {
                        marginTop: margin[0],
                        marginRight: margin[1],
                        marginBottom: margin[2],
                        marginLeft: margin[3],
                    };
            }
        }
    }

    handlePaddings() {
        const {padding} = this.props;
        if (typeof padding === 'number') {
            return {
                paddingTop: padding,
                paddingRight: padding,
                paddingBottom: padding,
                paddingLeft: padding,
            };
        }

        if (typeof padding === 'object') {
            const paddingSize = Object.keys(padding).length;
            switch (paddingSize) {
                case 1:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[0],
                        paddingBottom: padding[0],
                        paddingLeft: padding[0],
                    };
                case 2:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[0],
                        paddingLeft: padding[1],
                    };
                case 3:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[2],
                        paddingLeft: padding[1],
                    };
                default:
                    return {
                        paddingTop: padding[0],
                        paddingRight: padding[1],
                        paddingBottom: padding[2],
                        paddingLeft: padding[3],
                    };
            }
        }
    }


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
            flex && {flex},
            flex === false && {flex: 0}, // reset / disable flex
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            borderRadius && {borderRadius},
            left && styles.left,
            right && styles.right,
            spaceBetween && styles.spaceBetween,
            card && styles.card,
            shadow && styles.shadow,
            width && {width},
            height && {height},
            margin && {...this.handleMargins()},
            padding && {...this.handlePaddings()},
            space && {justifyContent: `space-${space}`},
            color && styles[color], // predefined styles colors for backgroundColor
            color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
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
