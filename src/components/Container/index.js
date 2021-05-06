// @flow
import React, {useEffect, useRef} from 'react';
import Box from '../Box';
import {Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StatusBar} from 'react-native';
import styles from './index.style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, FontSize} from 'styles';

const bg = require('../../assets/images/logo_fis.jpg');


const {width} = Dimensions.get('window');

type ContainerProps = {
    children: React<Node>;
    footer?: React<Node>;
    hideFooter?: boolean;
    borderRadius?: number;
    scroll?: boolean;
}
const Container = ({children, hideFooter, borderRadius, footer, scroll}: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const scrollRef = useRef();
    const _keyboardDidShow = () => {
        scrollRef.current?.scrollToEnd({animated: true});
    };
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        return () => {
            Keyboard.removeListener('keyboardDidHide', _keyboardDidShow);
        };
    }, []);

    return (
        <Box flex={1} backgroundColor={Colors.White}>
            <StatusBar barStyle={'light-content'}/>
            <KeyboardAvoidingView enabled style={{flexGrow: 1}} keyboardVerticalOffset={2}
                                  behavior={`${Platform.OS === 'android' ? 'height' : 'padding'}`}>
                <Box flex={1}>
                    <ScrollView ref={scrollRef} style={{flex: 1}} bounces={false} keyboardShouldPersistTaps="always">

                        <Box flex={1} style={{overflow: 'hidden'}}>
                            {
                                scroll ?
                                    <Box style={styles.header}>
                                        <Image source={bg} style={styles.imagebgHeader}/>
                                    </Box>
                                    :
                                    <Box>

                                    </Box>
                            }
                            <Box flex={1} backgroundColor={Colors.white}
                                 style={{
                                     borderBottomRightRadius: borderRadius,
                                     borderBottomLeftRadius: borderRadius,
                                 }}>
                                {children}
                            </Box>
                        </Box>
                    </ScrollView>
                </Box>
            </KeyboardAvoidingView>
            {
                !hideFooter &&
                <Box style={{
                    paddingTop: FontSize.Small,
                }} backgroundColor={Colors.Primary}>
                    {footer}
                    <Box style={{height: insets.bottom}}/>
                </Box>
            }
        </Box>

    );
};
export default Container;
