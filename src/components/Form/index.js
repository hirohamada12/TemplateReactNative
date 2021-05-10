import React from 'react';
import { Text } from 'react-native';
import { Input, Box, Screen, SelectInput } from 'components';
import { Button } from '../Button';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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



export const Form = ({ property, validate }) => {
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

        <Box style={{ width: '100%', height: '100%', borderWidth: 1, borderColor: 'black', justifyContent: 'space-between', paddingVertical: 10 }} center >
            <FormProvider {...formMethods}>
                {Object.keys(data).map((property, index) => <Input index={index} name={property} label={property} style={{ height: '25%', width: '80%' }} />)}
                <Button customContainer={{ width: '60%', height: '25%' }} title="Dang nhap" onPress={formMethods.handleSubmit(onSubmit, onErrors)} />

            </FormProvider>
        </Box>

    )
}