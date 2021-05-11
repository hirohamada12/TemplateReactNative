import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Input, Box, Screen, SelectInput, NewInput } from 'components';
import { Button } from '../Button';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
const initialValidate = {
    username: yup.string().required(),
    password: yup.string().required(),
}
const initialProperty = {
    username: {
        default: "",
        type: 'input',
    },
    password: {
        default: "",
        type: 'password'
    }
}



export const Form = ({ property, validate, containerStyle }) => {
    //containerStyle: predefined style cho toan bo form

    const data = property === undefined ? initialProperty : property;
    const valueList = Object.values(data);
    const defaultValues = Object.keys(data).reduce((prev, current, index) => ({
        ...prev, [current]: valueList[index].default
    }), {})
    const formMethods = useForm({
        resolver: yupResolver(yup.object().shape(validate === undefined ? initialValidate : validate)),
        defaultValues
    })

    const onSubmit = data => {
        console.log('data', data);
    };

    const onErrors = data => {
        console.log('data', data);
    };

    return (
        <FormProvider {...formMethods}>
            <View style={[styles.formContainer, containerStyle]} center >
                {Object.keys(data).map((property, index) => <NewInput index={index} name={property} label={property}
                    inputStyle={styles.inputStyle} containerStyle={{ marginBottom: 10 }} />)}
                <Button title="Dang nhap" onPress={formMethods.handleSubmit(onSubmit, onErrors)} containerStyle={{ marginVertical: 10 }} />
            </View>

        </FormProvider>
    )
}

//default style
const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center', paddingVertical: 10,
        borderRadius: 15
    },
    inputStyle: {
        borderColor: Colors.LightGray, borderWidth: 1,
        borderRadius: 10
    }
})