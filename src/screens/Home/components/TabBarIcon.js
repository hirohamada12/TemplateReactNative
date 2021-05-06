import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

const TabBarIcon = ({color, ...props}) => {
    return <Image style={{tintColor: color}} {...props} />;
};
TabBarIcon.propTypes = {
    color: PropTypes.string,
};

export default TabBarIcon;
