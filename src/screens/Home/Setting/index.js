import React from 'react';
import {Text, Image, Div} from 'react-native-magnus';
import {Colors, FontSize} from 'styles';
import Animated, {
    useAnimatedStyle,
    useAnimatedScrollHandler,
    useSharedValue,
    interpolate,
    Extrapolate,
    withTiming,
    useDerivedValue,
} from 'react-native-reanimated';
import {useWindowDimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//Component
import {RowButton} from './RowButton';
import {registerScreen} from 'navigation/utils';

//Config Screen
const Name = 'Settings';

const SettingPram = {
    [Name]: {
        headerTitle: 'Settings',
        headerStyle: {backgroundColor: Colors.White},
        headerShown: true,
    },
};
//

const MIN_HEADER_HEIGHT = 60;

const PERCENT_HEIGHT = 0.6;

const SIZE_AVATAR_ROUND = 90;

const OFFSET_TO_START_ANIMATION = 150;

const Settings = () => {
    const offsetY = useSharedValue(0);
    const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();
    const heightHeader = useDerivedValue(() =>
        interpolate(
            offsetY.value,
            [0, SCREEN_HEIGHT * PERCENT_HEIGHT - MIN_HEADER_HEIGHT],
            [SCREEN_HEIGHT * PERCENT_HEIGHT, MIN_HEADER_HEIGHT],
            Extrapolate.CLAMP,
        ),
    );
    const wrapHeaderStyle = useAnimatedStyle(() => ({
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: Colors.Primary,
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        width: SCREEN_WIDTH,
        height: heightHeader.value,
    }));
    const wrapAvatarStyle = useAnimatedStyle(() => ({
        overflow: 'hidden',
        transform: [
            {
                scale:
                    offsetY.value < OFFSET_TO_START_ANIMATION
                        ? withTiming(1)
                        : interpolate(
                        offsetY.value,
                        [
                            OFFSET_TO_START_ANIMATION,
                            SCREEN_HEIGHT * PERCENT_HEIGHT - MIN_HEADER_HEIGHT,
                        ],
                        [1, 0.5],
                        Extrapolate.CLAMP,
                        ),
            },
        ],
        marginLeft:
            offsetY.value < OFFSET_TO_START_ANIMATION
                ? withTiming(0)
                : interpolate(
                offsetY.value,
                [
                    OFFSET_TO_START_ANIMATION,
                    SCREEN_HEIGHT * PERCENT_HEIGHT - MIN_HEADER_HEIGHT,
                ],
                [1, 25],
                Extrapolate.CLAMP,
                ),

        width:
            offsetY.value < OFFSET_TO_START_ANIMATION
                ? withTiming(SCREEN_WIDTH)
                : withTiming(SIZE_AVATAR_ROUND),
        height:
            offsetY.value < OFFSET_TO_START_ANIMATION
                ? withTiming(SCREEN_HEIGHT * PERCENT_HEIGHT)
                : withTiming(SIZE_AVATAR_ROUND),
        borderRadius:
            offsetY.value < OFFSET_TO_START_ANIMATION
                ? withTiming(0)
                : withTiming(SIZE_AVATAR_ROUND / 2),
    }));
    const wrapTextStyle = useAnimatedStyle(() => ({
        zIndex: 3,
        transform: [
            {
                translateY:
                    offsetY.value < OFFSET_TO_START_ANIMATION
                        ? withTiming(0)
                        : withTiming(0),
            },
            {
                translateX:
                    offsetY.value < OFFSET_TO_START_ANIMATION
                        ? withTiming(-(SCREEN_WIDTH - 20))
                        : withTiming(0),
            },
        ],
    }));
    const spaceView = useAnimatedStyle(() => ({
        height:
            offsetY.value < OFFSET_TO_START_ANIMATION
                ? withTiming(150)
                : withTiming(0),
    }));
    const textStyle = useAnimatedStyle(() => ({
        color: '#FFFFFF',
        fontSize:
            offsetY.value < OFFSET_TO_START_ANIMATION
                ? withTiming(25)
                : withTiming(18),
        fontWeight: 'bold',
    }));
    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            offsetY.value = event.contentOffset.y;
        },
    });
    return (
        <Div flex={1} bg={Colors.white}>
            <Animated.View style={[wrapHeaderStyle]}>
                <Animated.View style={wrapAvatarStyle}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                    }}
                           source={{uri: 'https://lh3.googleusercontent.com/a-/AOh14GjNhBN8P8RH8QiuM6V6aTPtjJEjFmfmddjmGM3D0w=s120'}}/>
                </Animated.View>
                <Animated.View style={[wrapTextStyle]}>
                    <Animated.View style={[spaceView]}/>
                    <Animated.Text style={[textStyle]}>P_N_A</Animated.Text>
                    <Div row>
                        <Div h={10} w={10} mr={5} rounded={5}
                             justifyContent={'center'}
                             alignSelf={'center'}
                             bg={Colors.Green}
                             color={Colors.Green}/>
                        <Text color={Colors.White}>
                            Đang hoạt động
                        </Text>
                    </Div>
                </Animated.View>
            </Animated.View>
            <Div position={'absolute'} top={15} right={10}>
                <Icon size={FontSize.IconDefault} color={Colors.Primary} name={'search'}/>
            </Div>
            <Div position={'absolute'} top={15} left={10}>
                <Icon size={FontSize.IconDefault} color={Colors.Primary} name={'arrow-back'}/>
            </Div>
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={onScroll}
                contentContainerStyle={{paddingTop: SCREEN_HEIGHT * PERCENT_HEIGHT}}
                overScrollMode={'never'}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                <Div bg={Colors.White} shadow={'sm'}>
                    <Div pt={10} px={16}>
                        <Text
                            color={'#3498db'}
                            fontWeight={'bold'}
                        >
                            Anhvtn11@fpt.com.vn
                        </Text>
                    </Div>
                    <RowButton
                        txTitle={'+84 98 601997'}
                        txSub={'Sửa số điện thoại'}
                    />
                    <RowButton txTitle={'@Anhvtn11'} txSub={'Sửa tên đăng nhập'}/>
                    <RowButton
                        showDivider={false}
                        txTitle={'Change is Good!'}
                        txSub={'Sửa bio'}
                    />
                </Div>
                <Div h={10}/>
                <Div bg={'white'} shadow={'sm'}>
                    <Div pt={10} px={16}>
                        <Text
                            color={'#3498db'}
                            fontWeight={'bold'}
                        >
                            Cài đặt
                        </Text>
                    </Div>
                    <RowButton icon={'lock'} txTitle={'Bảo mật'}/>
                    <RowButton icon={'chart-pie'} txTitle={'Sử dụng dữ liệu'}/>
                    <RowButton icon={'facebook-messenger'} txTitle={'Tin nhắn'}/>
                    <RowButton icon={'folder'} txTitle={'Thư mục'}/>
                    <RowButton icon={'mobile'} txTitle={'Thiết bị'}/>
                    <RowButton
                        showDivider={false}
                        icon={'language'}
                        txTitle={'Ngôn ngữ'}
                    />
                </Div>
                <Div h={10}/>
                <Div bg={Colors.White} shadow={'sm'}>
                    <Div pt={10} px={16}>
                        <Text
                            color={'#3498db'}
                            fontWeight={'bold'}
                        >
                            Hỗ Trợ
                        </Text>
                    </Div>
                    <RowButton icon={'inbox'} txTitle={'ASK'}/>
                    <RowButton icon={'question'} txTitle={'FAQ'}/>
                    <RowButton
                        showDivider={false}
                        icon={'shield-alt'}
                        txTitle={'Privacy'}
                    />
                </Div>
                <Div>
                    <Div paddingVertical={10} paddingHorizontal={16} middle>
                        <Text
                            color={Colors.Gray}
                            fontSize={'sm'}
                        >
                            Version: 1.0.1
                        </Text>
                    </Div>
                </Div>
            </Animated.ScrollView>
        </Div>
    );
};


export default registerScreen(Name, Settings, SettingPram);
