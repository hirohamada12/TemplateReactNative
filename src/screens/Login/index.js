import React, { useState } from 'react';
import { View } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
//Component
import { registerScreen } from 'navigation/utils';
import { Box, Container, LoginBackground, Text, Input, Form } from 'components';
import { Colors } from 'styles';
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
    }
    const formMethods = useForm({
        resolver: yupResolver(yup.object().shape(initialValidate)),
        defaultValues: {
            username: "", password: ""
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
                        {/* <DropdownPicker name='picker' label="Chọn" valueList={[{
                            value: 'Banana',
                        }, {
                            value: 'Mango',
                        }, {
                            value: 'Pear',
                        }]}
                            containerStyle={{ marginBottom: 10, }} /> */}
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
