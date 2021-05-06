import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Colors} from 'styles';
import {Input, Icon} from 'react-native-magnus';
import {useController, useFormContext} from 'react-hook-form';
import PropTypes from 'prop-types';

const SelectField = (props) => {
    const {
        label,
        style,
        name,
        defaultValue,
        rules,
        suffix,
        prefix,
        ...restOfProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef(null);
    const focusAnim = useRef(new Animated.Value(0)).current;

    const formContext = useFormContext();

    const {control, errors} = formContext;


    const {field} = useController({name, rules, defaultValue, control});

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || !!field.value ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start();
    }, [focusAnim, isFocused, field.value]);

    const _openSelect = () => {
        setIsFocused(true);
    };
    let color = isFocused ? Colors.Blue : '#B9C4CA';
    if (errors[name]) {
        color = Colors.Red;
    }
    return (
        <TouchableWithoutFeedback onPress={_openSelect}>
            <View style={style}>
                <Input
                    pointerEvents={'none'}
                    borderWidth={1}
                    rounded={4}
                    borderColor={color}
                    p={10}
                    ref={inputRef}
                    {...restOfProps}
                    onChangeText={field.onChange}
                    value={field.value}
                    onBlur={(event) => {
                        setIsFocused(false);
                        field.onBlur?.(event);
                    }}
                    suffix={<Icon name="chevron-right" color="gray900" fontFamily="Feather"/>}
                />
                <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
                    <Animated.View
                        style={[
                            styles.labelContainer,
                            {
                                transform: [
                                    {
                                        scale: focusAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 0.75],
                                        }),
                                    },
                                    {
                                        translateY: focusAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [10, -12],
                                        }),
                                    },
                                    {
                                        translateX: focusAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [14, 0],
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.label,
                                {
                                    color,
                                },
                            ]}
                        >
                            {label}
                            {errors[name] ? '*' : ''}
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
                {!!errors[name] && <Text style={styles.error}>{errors[name]?.message}</Text>}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    labelContainer: {
        position: 'absolute',
        paddingHorizontal: 8,
        backgroundColor: 'white',
    },
    label: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 14,
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        fontSize: 12,
        color: '#B00020',
        fontFamily: 'Avenir-Medium',
    },
});
SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
    rules: PropTypes.object,
    suffix: PropTypes.any,
    prefix: PropTypes.any,

};
export default SelectField;
