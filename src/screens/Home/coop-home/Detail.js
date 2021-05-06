import React from 'react';
import {Div, Image, Header, Button, Icon, Text, Skeleton} from 'react-native-magnus';
import {Colors} from 'styles';
import {registerScreen} from 'navigation/utils';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native';

const Name = 'ProductDetail';

const ScreenOptions = {
    headerTitle: 'ProductDetail',
    headerStyle: {backgroundColor: Colors.White},
    headerShown: false,
};
/**
 *
 * @param route  Chứa thông tin route và param truyền từ danh sách
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */

const Detail = ({route, navigation}) => {
    const {product} = route?.params;
    return (
        <SafeAreaView style={{flex: 0, backgroundColor: Colors.White}}>
            <Div bg={Colors.White} flex={0}>
                <Header
                    alignment="left"
                    shadow={0}
                    prefix={
                        <Button bg="transparent" onPress={() => navigation.goBack()}>
                            <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl"/>
                        </Button>
                    }
                    suffix={
                        <Button bg="transparent">
                            <Icon name="more-vertical" fontFamily="Feather"/>
                        </Button>
                    }
                >
                    {product.title}
                </Header>
                {/*<Div mt="md" p={10}>*/}
                {/*    <Skeleton.Box h={350} w={'100%'}/>*/}
                {/*    <Skeleton.Box mt="sm"/>*/}
                {/*    <Skeleton.Box mt="sm" w="80%"/>*/}
                {/*    <Skeleton.Box mt="sm"/>*/}
                {/*</Div>*/}
                <Div p={10}>
                    <Image style={{width: '100%', height: 350}} source={{uri: product.image}}/>
                    <Text fontSize={20} fontWeight={'bold'} m={10}>
                        {product.price}{' $'}
                    </Text>
                    <Text fontSize={14} fontWeight={'bold'} mb={10}>
                        Description
                    </Text>
                    <Text body>{product.description}</Text>
                </Div>
            </Div>
        </SafeAreaView>
    );
};

Detail.propTypes = {
    route: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

export default registerScreen(Name, Detail, ScreenOptions);