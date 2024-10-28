import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../utils/AppColor';
import InternalHeader from '../../../components/InternalHeader';
import {ScrollView} from 'react-native';
import CustomSearch from '../../../components/CustomSearch';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../utils/ResponsiveSize';
import Data from '../../../assets/json/BuySubscription.json';
import FontFamily from '../../../utils/FontFamily';
import CustomButton from '../../../components/CustomButton';
import {ImagePath} from '../../../utils/ImagePath';
import { useNavigation } from '@react-navigation/native';

const BuySubscription = () => {
    const navigation = useNavigation();
  const [searchText, setSearchtext] = useState('');
  const buy = 'Buy Now ->';

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemHolder}>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.priceText}>${item?.price}</Text>
        <View style={styles.view}>
          <Text style={styles.keyText}>Validity:</Text>
          <Text style={[styles.keyText, {fontSize: textScale(12)}]}>
            {item?.validity}
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.keyText}>Item Type:</Text>
          <Text style={[styles.keyText, {fontSize: textScale(12)}]}>
            {item?.item_type}
          </Text>
        </View>
        <Text style={styles.descriptionText}>{item?.description}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Buy Subscription Details',{item:item}) }
          style={styles.buttonHolder}>
          <Text style={styles.buttonText}>{buy}</Text>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 2,
            position: 'absolute',
            right: moderateScale(20),
            width: moderateScale(83),
            height: moderateScale(83),
            top: moderateScale(-20),
            borderRadius: moderateScale(50000),
            backgroundColor: Colors.statusBarColor,
            borderColor: Colors.borderColor,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Image source={ImagePath.printer} resizeMode='cover' style={{width:moderateScale(30),height:moderateScale(30)}}/>
          </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <InternalHeader title={'Buy Subscription'} />
      <View style={{flex: 1}}>
        <View style={styles.searchHolder}>
          <CustomSearch
            value={searchText}
            onChange={text => setSearchtext(text)}
          />
        </View>
        <FlatList
          data={Data.subscriptionBundles}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default BuySubscription;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchHolder: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: moderateScaleVertical(10),
  },
  itemHolder: {
    width: '95%',
    alignSelf: 'center',
    padding: moderateScale(10),
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(20),
    backgroundColor: Colors.white,
  },
  nameText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.black,
    marginTop: moderateScaleVertical(15),
  },
  priceText: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(24),
    color: Colors.statusBarColor,
    marginVertical: moderateScaleVertical(4),
  },
  keyText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(12),
    color: Colors.black,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  descriptionText: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(11),
    color: Colors.searchTextColor,
    letterSpacing: textScale(1),
    marginVertical: moderateScaleVertical(5),
  },
  buttonText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(13),
    color: Colors.statusBarColor,
    textAlign: 'right',
    padding: moderateScale(5),
  },
  buttonHolder:{
    width: '30%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  }
});
