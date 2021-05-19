// @flow
import React, { useEffect, useRef } from 'react';

import Box from '../Box';
import {
    Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StatusBar,
    View, Text, TouchableOpacity,
} from 'react-native';
import styles from './index.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, FontSize } from 'styles';
// import LeftArrow from '../../assets/icons-svg/icon-left-arrow.svg';
const LeftArrow = require('../../assets/icons-svg/icon-left-arrow.svg').default;

const bg = require('../../assets/images/logo_fis.jpg');


const { width } = Dimensions.get('window');

type ContainerProps = {
    children: React<Node>;
    footer?: React<Node>;
    hideFooter?: boolean;
    borderRadius?: number;
    scroll?: boolean;
    backButton?: Boolean;
    headerText?: string,
    scrollToEnd?: boolean

}
const Container = ({ children, hideFooter, borderRadius, footer, scroll, scrollToEnd, headerText, backButton, backButtonPress }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const scrollRef = useRef();
    const _keyboardDidShow = () => {
        if (scrollToEnd) scrollRef.current?.scrollToEnd({ animated: true });
    };
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        return () => {
            Keyboard.removeListener('keyboardDidHide', _keyboardDidShow);
        };
    }, []);

    return (
        <Box flex={1} backgroundColor={Colors.White}>
            <View style={styles.header2}>
                <Text style={{ color: Colors.BlueSky, fontSize: 20 }} numberOfLines={2}>{headerText}</Text>
                {backButton && <TouchableOpacity onPress={backButtonPress} style={styles.backButton}>
                    <LeftArrow width='100%' height='100%' />
                </TouchableOpacity>}
            </View>
            <KeyboardAvoidingView enabled style={{ flexGrow: 1 }} keyboardVerticalOffset={2}
                behavior={`${Platform.OS === 'android' ? 'height' : 'padding'}`}>
                <Box flex={1}>
                    <ScrollView ref={scrollRef} style={{ flex: 1 }} bounces={false} keyboardShouldPersistTaps="always" nestedScrollEnabled={true}>

                        <Box flex={1} style={{ overflow: 'hidden' }}>

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
                    <Box style={{ height: insets.bottom }} />
                </Box>
            }
        </Box>

    );
};
export default Container;
