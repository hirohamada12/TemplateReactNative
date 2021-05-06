import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, TouchableWithoutFeedback, useWindowDimensions} from 'react-native';
import {registerScreen} from 'navigation/utils';
import {clearStore, getAll} from 'store/common/actions/DemoAction';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Box, Text} from 'components';
import {Colors} from 'styles';
import PropTypes from 'prop-types';

const Name = 'CoopHome';

const ScreenOptions = {
    headerTitle: 'Home',
    headerStyle: {backgroundColor: Colors.White},
    headerShown: true,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        backgroundColor: 'white',
    },
    text: {
        marginTop: 5,
        marginVertical: 5,
    },
});

const CoopHome = ({navigation}) => {
    const dispatch = useDispatch();
    const {width, height} = useWindowDimensions();
    const [state, setState] = useState([]);

    const products = useSelector(
        state => state.productReducer.products,
        shallowEqual,
    );

    const getAllProduct = () => {
        dispatch(getAll());
    };

    useEffect(() => {
        setState(products);
        return () => {
            dispatch(clearStore);
        };
    }, [products]);

    useEffect(() => {
        getAllProduct();
    }, []);

    const _openDetail = (item) => {
        navigation?.navigate('ProductDetail', {
            product: item,
        });
    };

    // eslint-disable-next-line react/prop-types
    const renderProduct = ({item}, key) => {
        return (
            <TouchableWithoutFeedback onPress={() => _openDetail(item)}>
                <Box padding={10} style={{marginVertical: 8, marginHorizontal: 8}} borderRadius={10} shadow
                     height={'auto'}
                     width={(width / 2) - 16}
                     backgroundColor={Colors.White} key={key}>

                    <Image style={[styles.image, {width: '100%', height: 200}]} source={{uri: item.image}}/>
                    <Text style={styles.text} bold h2>{item.title}</Text>
                    <Text h3 bold style={styles.text} body>
                        {item.price}{' $'}
                    </Text>
                </Box>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <Box style={styles.container}>
            <FlatList style={{width: '100%', height: '100%'}}
                      data={state}
                      numColumns={2}
                      renderItem={renderProduct}
                      keyExtractor={item => String(item.id)}/>
        </Box>
    );
};

CoopHome.propTypes = {
    route: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

export default registerScreen(Name, CoopHome, ScreenOptions);
