import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import InternalHeader from '../../../components/InternalHeader';
import Colors from '../../../utils/AppColor';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../utils/ResponsiveSize';
import {ImagePath} from '../../../utils/ImagePath';
import FontFamily from '../../../utils/FontFamily';
import WrapperContainer from '../../../utils/WrapperContainer';

const BuySubscriptionDetails = ({route}) => {
  const {item} = route.params;
  console.log(item, 'Line 22');

  const renderItem = ({item}) => {
    return(
      <View>
        <Text style={{color:'red'}}>Ashiihs Rnajn </Text>
      </View>
    )
  }

  return (
    // <SafeAreaView style={styles.main}>
    <WrapperContainer>

   
      <InternalHeader title={'Buy Subscription'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upperDesignView} />
        <View style={{marginTop: '15%'}}>
          <View style={styles.imageHolder}>
            <Image
              source={ImagePath.printer}
              style={styles.imageStyle}
              resizeMode="cover"
            />
          </View>
          <View style={styles.headerHolder}>
            <Text style={styles.text}>{item?.productName}</Text>
          </View>
          <FlatList
          data={item?.details}
          renderItem={renderItem}
          keyExtractor={(item,index)=> index}
          />
        </View>
      </ScrollView>
      </WrapperContainer>
  );
};

export default BuySubscriptionDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  upperDesignView: {
    position: 'absolute',
    width: '100%',
    height: moderateScale(150),
    backgroundColor: Colors.white,
    borderBottomEndRadius: moderateScale(100),
    borderBottomStartRadius: moderateScale(100),
  },
  imageHolder: {
    borderWidth: 2,
    width: moderateScale(137),
    height: moderateScale(137),
    alignSelf: 'center',
    borderRadius: moderateScale(1000),
    borderColor: Colors.statusBarColor,
    backgroundColor: Colors.statusBarColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: moderateScale(70),
    height: moderateScale(65),
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(17),
    color: Colors.black,
  },
  headerHolder: {
    marginTop: moderateScaleVertical(10),
    alignItems: 'center',
    alignSelf: 'center',
  },
});
