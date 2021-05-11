import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
//Component
import { registerScreen } from 'navigation/utils';
import { Box, Container, LoginBackground, Text, Input, Form } from 'components';
import { Colors } from 'styles';
import { Layout } from 'constant';
import { useAuth } from 'context';
import Storage from 'utils/Storage';
import { COMMON } from 'constant';

const ANI_SIZE_WIDTH = Layout.screen.width;
const Name = 'Login';

const options = {
    stackAnimation: 'fade',
};
const Login = () => {
    const [user, setUser] = useState("");


    return (
        <Container borderRadius={75} scroll footer={<Footer />}>
            <Box style={{ marginTop: 0, }} padding={30}>
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
                <Form containerStyle={{ backgroundColor: Colors.LightPink, marginTop: 30 }} />
                <Box center middle backgroundColor={Colors.White}
                    style={{
                        marginTop: 20,
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

const styles = StyleSheet.create({});

export default registerScreen(Name, Login, options);
