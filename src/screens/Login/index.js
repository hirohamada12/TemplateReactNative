import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
//Component
import {registerScreen} from 'navigation/utils';
import {Box, Container, LoginBackground, Text} from 'components';
import {Colors} from 'styles';
import {Layout} from 'constant';
import {useAuth} from 'context';
import Storage from 'utils/Storage';
import {COMMON} from 'constant';

const ANI_SIZE_WIDTH = Layout.screen.width;
const Name = 'Login';

const options = {
    stackAnimation: 'fade',
};
const Login = () => {
    const {setUserInfo} = useAuth();
    const [isSigningInProgress, setIsSigningInProgress] = useState(false);
    const _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setIsSigningInProgress(true);
            // dispatch data user to hook
            setUserInfo(userInfo);
            //save data user to local storage
            await Storage.save(COMMON.USER_DATA, userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signing in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
            } else {
                alert('Something went wrong', error.toString());
                // some other error happened
            }
        }

    };
    return (
        <Container borderRadius={75} scroll footer={<Footer/>}>
            <Box style={{marginTop: 0}} padding={40}>
                <Text style={{
                    marginBottom: 8,
                }} bold h1 primary center>
                    HI !
                </Text>
                <Text bold h2 style={{
                    padding: 8,
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
                    <Box style={{width: 40, margin: 3, height: 4}}
                         backgroundColor={'rgb(46, 77, 159)'}/>
                    <Box style={{width: 40, margin: 3, height: 4}}
                         backgroundColor={'rgb(243,112, 34)'}/>
                    <Box style={{width: 40, margin: 3, height: 4}}
                         backgroundColor={'rgb(77,183, 72)'}/>
                </Box>
                <Box>
                    <Box center style={{marginBottom: 12}}>
                        <GoogleSigninButton
                            style={{width: 200, height: 50}}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Light}
                            onPress={_signIn}
                            disabled={isSigningInProgress}
                        />
                    </Box>
                </Box>
                <Box center middle backgroundColor={Colors.White}
                     style={{
                         marginTop: 20,
                     }}>
                    <LoginBackground width={300} height={170}/>
                </Box>
            </Box>
        </Container>
    );
};

const Footer = () => {
    return (
        <>
            <Box center>
                <Box middle style={{width: ANI_SIZE_WIDTH}}>
                    <Text body white center>Copyright © 2021 by Hiro</Text>
                </Box>
            </Box>
        </>
    );
};

const styles = StyleSheet.create({});

export default registerScreen(Name, Login, options);
