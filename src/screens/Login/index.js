import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
//Component
import { registerScreen } from 'navigation/utils';
import { Box, Container, LoginBackground, Text, Input, DropdownPicker, ModalPicker, DateTimePicker } from 'components';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
import { Layout } from 'constant';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { styles } from './style';
import { Button, NewInput } from 'components';
import * as yup from 'yup';
const ANI_SIZE_WIDTH = Layout.screen.width;
const Name = 'Login';

const options = {
    stackAnimation: 'fade',
};
const Login = () => {

    const initialValidate = {
        username: yup.string().required(),
        password: yup.string().required(),
        picker: yup.string().required()
    }
    const formMethods = useForm({
        resolver: yupResolver(yup.object().shape(initialValidate)),
        defaultValues: {
            username: "", password: "", picker: ""
        }
    })

    const onSubmit = data => {
        console.log('data', data);
    };

    const onErrors = data => {
        console.log('data', data);
    };

    return (
        <Container borderRadius={75} scroll footer={<Footer />}>
            <Box style={{ marginTop: 0, borderWidth: 1 }} padding={30}>
                <Text bold h2 style={{
                    padding: 1,
                }} primary center>
                    Vui lòng đăng nhập
                </Text>
                <Box row center middle backgroundColor={Colors.White}
                    style={{
                        height: 5,
                        paddingLeft: 20,
                        paddingRight: 20,
                        alignItems: 'center',
                        marginBottom: 24,

                    }}>
                    <Box style={{ width: 40, margin: 3, height: 4 }}
                        backgroundColor={'rgb(46, 77, 159)'} />
                    <Box style={{ width: 40, margin: 3, height: 4 }}
                        backgroundColor={'rgb(243,112, 34)'} />
                    <Box style={{ width: 40, margin: 3, height: 4 }}
                        backgroundColor={'rgb(77,183, 72)'} />
                </Box>
                <FormProvider {...formMethods}>
                    <View style={styles.formContainer} >
                        <NewInput name='username' label='Tên đăng nhập' inputStyle={styles.inputStyle} containerStyle={{ marginBottom: 10 }} horizon={true} />
                        <NewInput name='password' label='Mật khẩu' inputStyle={styles.inputStyle} containerStyle={{ marginBottom: 10 }} />
                        {/* <DropdownPicker name='picker' label="Chọn" itemList={[{
                            value: 'Banana', label: '1'
                        }, {
                            value: 'Mango', label: '2'
                        }, {
                            value: 'Pear', label: '3'
                        },
                        {
                            value: 'Sen', label: '4'
                        },
                        {
                            value: 'Rarr', label: '5'
                        }]}
                            width={SCREEN_WIDTH / 1.4} height={SCREEN_HEIGHT / 25} pickerStyle={{ marginTop: 2 }} errorStyle={{ marginBottom: 5 }} /> */}
                        {/* <ModalPicker name='modalpicker' label='Chon' /> */}
                        <DateTimePicker name='picker' label='Date' containerStyle={{ marginBottom: 10 }} inputStyle={{ marginTop: 5 }} />
                        <Button title='Đăng nhập' onPress={formMethods.handleSubmit(onSubmit, onErrors)} containerStyle={{ marginVertical: 10 }} />
                    </View>

                </FormProvider>
                <Box center middle backgroundColor={Colors.White}
                    style={{
                        marginTop: 20, zIndex: -100
                    }}>
                    <LoginBackground width={300} height={170} />
                </Box>
            </Box>
        </Container>
    );
};

const Footer = () => {
    return (
        <>
            <Box center>
                <Box middle style={{ width: ANI_SIZE_WIDTH }}>
                    <Text body white center>Copyright © 2021 by Hiro</Text>
                </Box>
            </Box>
        </>
    );
};


export default registerScreen(Name, Login, options);
