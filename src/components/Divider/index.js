import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import equals from 'react-fast-compare';
import PropTypes from 'prop-types';
import {Div} from 'react-native-magnus';
import {Colors} from 'styles';

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
    },
});

const DividerComponent = ({height, bg, ...props}) => {
    return (
        <Div
            h={height * StyleSheet.hairlineWidth}
            bg={bg}
            style={styles.wrap}
        />
    );
};
DividerComponent.defaultProps = {
    height: 1,
    bg: Colors.Gray,
};
DividerComponent.propTypes = {
    /**
     * Background for divider
     * @default #bbb
     */
    bg: PropTypes.string,

    /**
     * Height of divider
     * @default 1
     */
    height: PropTypes.number,
};
export const Divider = memo(DividerComponent, equals);