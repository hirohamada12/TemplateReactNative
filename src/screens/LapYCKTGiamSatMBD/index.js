import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Container, Button, Divider, SectionHeader, NewInput, CardItem, DeleteItem } from 'components';
import { registerScreen } from 'navigation/utils';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'styles';
import { style } from './style';
import { FormProvider, useForm } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';

const options = {
    stackAnimation: 'fade',
};

const LapYCKTGiamSatMBD = props => {

    const [userInfoForm, setUserInfo] = useState(true);//true se hien form tim kiem theo user
    const [cardList, setCards] = useState([
        {
            id: 'KH001',
            maKT: 'MaKTV001',
            ngayKT: '14/05/2021 17:09',
            tenKTV: ' Tran Duc Bo',
            diaChi: 'Nhà số 1- ngõ 1 - Cầu giấy - Hà nội',
            isChecked: false
        },
        {
            id: 'KH002',
            maKT: 'MaKTV002',
            ngayKT: '14/05/2021 17:09',
            tenKTV: ' Tran Duc Anh',
            diaChi: 'Nhà số 1- ngõ 1 - Cầu giấy - Hà nội',
            isChecked: false
        },
        {
            id: 'KH003',
            maKT: 'MaKTV003',
            ngayKT: '14/05/2021 17:09',
            tenKTV: ' Tran Duc Hai',
            diaChi: 'Nhà số 1- ngõ 1 - Cầu giấy - Hà nội',
            isChecked: false
        },
        {
            id: 'KH004',
            maKT: 'MaKTV004',
            ngayKT: '14/05/2021 17:09',
            tenKTV: ' Tran Duc Nghia',
            diaChi: 'Nhà số 1- ngõ 1 - Cầu giấy - Hà nội',
            isChecked: false
        },
    ]);
    const initialValidate = {
        maKH: yup.string().required(),
        maGCS: yup.string().required(),
        maTram: yup.string().required(),
        nhomNN: yup.string().required(),
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

    const deleteCard = (item, rowMap) => {
        const newCardList = cardList.filter((value) => value.id !== item.id);
        setCards(newCardList);
        if (rowMap[item.id]) {
            rowMap[item.id].closeRow();
        }
    }
    const UserInfo = () => (
        <FormProvider {...formMethods}>
            <View style={{ alignItems: 'center' }}>

                <View style={style.radioContainer}>
                    <RadioButton  //radio toogle form tim kiem theo user va ko theo user
                        value={userInfoForm}
                        status={userInfoForm ? 'unchecked' : 'checked'}
                        onPress={() => setUserInfo(prevState => !prevState)}
                        color={Colors.BlueSky}
                    />
                    <Text style={style.radioText}>Không có mã khách hàng</Text>
                </View>
                <SectionHeader containerStyle={style.sectionHeader} title='Thông tin tìm kiếm' imgSource={require("../../assets/icons/IdentityLogo.png")}
                    imageStyle={{ height: 15, aspectRatio: 1.4 }} textStyle={{ marginLeft: 15, fontSize: 14 }} />
                <NewInput name='maKH' label='Mã khách hàng' inputStyle={style.input} containerStyle={style.inputContainer} horizon={true} />
                <NewInput name='maGCS' label='Mã số GCS' inputStyle={style.input} containerStyle={style.inputContainer} horizon={true} />
                <NewInput name='maTram' label='Mã trạm' inputStyle={style.input} containerStyle={style.inputContainer} horizon={true} />
                <NewInput name='nhomNN' label='Nhóm NN' inputStyle={style.input} containerStyle={style.inputContainer} horizon={true} />
                <Button containerStyle={style.searchButton} textStyle={style.searchTitle} title='Tìm kiếm' />
            </View>
        </FormProvider>

    )

    return (
        <Container scroll hideFooter headerText="Lap bien ban" backButton>
            <View style={style.buttonContainer}>
                <Button containerStyle={{ flex: 1, borderWidth: 0 }} title="Thông tin khách hàng" />
                <Button containerStyle={{ flex: 1, borderWidth: 0 }} title="Tạo mới yêu cầu" />
            </View>
            <Divider height={3} />
            <UserInfo />
            <SwipeListView recalculateHiddenLayout={true} showsVerticalScrollIndicator={false} data={cardList} renderItem={({ item }) => <CardItem item={item} />} style={{ marginTop: 20 }}
                renderHiddenItem={({ item }, rowMap) => <DeleteItem onPress={() => deleteCard(item, rowMap)} />} keyExtractor={(item, index) => item + index} rightOpenValue={- SCREEN_WIDTH * 0.15}
                stopRightSwipe={-SCREEN_WIDTH * 0.15} disableRightSwipe={true} />
        </Container>
    )

}

export default registerScreen('LapYCKTGiamSat', LapYCKTGiamSatMBD, options);