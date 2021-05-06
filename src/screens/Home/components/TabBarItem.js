import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Colors} from 'styles';
import PropTypes from 'prop-types';


const TabBarItem = ({active, options, ...rest}) => {
    return (
        <TouchableWithoutFeedback {...rest}>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 80,
                    height: 56,
                }}>
                {options.tabBarIcon
                    ? options.tabBarIcon({
                        focused: !active,
                        color: active ? Colors.Primary : Colors.Gray,
                        size: 0,
                    })
                    : null}
            </View>
        </TouchableWithoutFeedback>
    );
};
TabBarItem.propTypes = {
    active: PropTypes.bool,
    options: PropTypes.any,
};
export default TabBarItem;
