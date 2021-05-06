import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Divider} from 'components';
import PropTypes from 'prop-types';
import {Div, Text} from 'react-native-magnus';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FontSize, Colors} from 'styles';
import trans from 'translations/trans';

const RowButtonComponent = ({
                                txSub,
                                txTitle,
                                icon,
                                showDivider,
                            }) => {
    return (
        <Div mt={10} px={16}>
            <TouchableOpacity>
                <Div row>
                    {icon && (
                        <Div flex={1}>
                            <Icon size={FontSize.IconDefault} color={Colors.Primary} name={icon}/>
                        </Div>
                    )}
                    <Div flex={5}>
                        <Text fontSize={FontSize.Body}>
                            {(txTitle)}
                        </Text>
                        {txSub && (
                            <>
                                <Div h={5}/>
                                <Text fontSize={FontSize.Smallest}>
                                    {(txSub)}
                                </Text>
                            </>
                        )}
                    </Div>
                </Div>
            </TouchableOpacity>
            <Div h={10}/>
            {showDivider && (
                <Div h={1}>
                    {icon && <Div flex={1}/>}
                    <Div flex={5}>
                        <Divider height={1}/>
                    </Div>
                </Div>
            )}
        </Div>
    );
};
RowButtonComponent.defaultProps = {
    showDivider: true,
};
RowButtonComponent.propTypes = {
    txSub: PropTypes.string,
    txTitle: PropTypes.string,
    icon: PropTypes.any,
    showDivider: PropTypes.bool,
};

export const RowButton = RowButtonComponent;
