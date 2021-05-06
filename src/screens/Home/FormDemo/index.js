// @flow
import React from 'react';
import {Button, Div} from 'react-native-magnus';
import {Colors} from 'styles';
import {registerScreen} from 'navigation/utils';
import {Input, Screen, SelectInput} from 'components';

import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as t from 'translations/msg';
import trans from 'translations/trans';

const Name = 'FormDemo';

const FormDemoParam = {
    [Name]: {
        headerTitle: 'Form',
        headerStyle: {backgroundColor: Colors.White},
        headerShown: true,
    },
};


const FormSchema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup
        .number()
        .required()
        .positive()
        .integer(),
});

const FormDemo = ({...props}) => {

    const FormFiles = {
        firstName: 'firstName',
        age: 'age',
    };

    const formMethods = useForm(
        {
            resolver: yupResolver(FormSchema),
        },
    );


    const onSubmit = data => {
        console.log('data', data);
    };

    const onErrors = data => {
        console.warn('data', data);
    };

    return (
        <Screen preset={'scroll'}>
            <Div flex={1} p="xs">
                <FormProvider {...formMethods}>
                    <Input
                        label={(trans(t.form.firstName))}
                        name={FormFiles.firstName}
                        defaultValue={''}
                    />
                    <SelectInput
                        style={{marginTop: 10}}
                        label={(trans(t.form.firstName))}
                        name={FormFiles.firstName}
                        defaultValue={''}
                    />
                    <Input
                        style={{marginTop: 10}}
                        label={(trans(t.form.age))}
                        name={FormFiles.age}
                        defaultValue={''}
                    />
                </FormProvider>
                <Button
                    mt="lg"
                    px="xl"
                    py="lg"
                    block
                    bg="white"
                    onPress={formMethods.handleSubmit(onSubmit, onErrors)}
                    borderWidth={1}
                    borderColor="red500"
                    color="red500"
                    underlayColor="red100"
                >
                    Submit
                </Button>
            </Div>
        </Screen>
    );
};

export default registerScreen(Name, FormDemo, FormDemoParam[Name]);
