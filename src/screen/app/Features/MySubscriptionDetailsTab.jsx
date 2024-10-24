import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../../utils/AppColor';
import {moderateScale, moderateScaleVertical, textScale} from '../../../utils/ResponsiveSize';
import FontFamily from '../../../utils/FontFamily';

const MySubscriptionDetailsTab = ({route}) => {
  const details = route.params;
//   console.log(details, 'Line 9');

  return (
    <ScrollView style={styles.main}>
      <View
        style={{
          marginVertical: moderateScaleVertical(24),
          width: '95%',
          alignSelf: 'center',
          gap: moderateScaleVertical(5),
          //   flex: 1,
        }}>
        <Text style={styles.text}>{details?.[0].name}</Text>
        <Text style={styles.text2}>
          Subscription ID: {details?.[0].subscription_id}
        </Text>
        {Object.keys(details).map(key => {
          const detail = details[key];
          return (
            <View key={detail.id} style={styles.detailContainer}>
              <Text style={styles.title}>{detail.title}</Text>
              <View
                style={{
                  borderWidth: 1,
                  marginTop: moderateScaleVertical(9),
                  borderColor: Colors.borderColor2,
                  backgroundColor: Colors.borderColor2,
                }}
              />
              {detail.billDetails.map((billDetail, index) => (
                <View style={styles.listItem} key={index}>
                <Text key={index} style={styles.text3}>
                  {billDetail.name}: 
                </Text>
                <Text style={styles.text3}>{billDetail.nameValue}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MySubscriptionDetailsTab;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    width: '100%',
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(18),
    color: Colors.statusBarColor,
  },
  text2: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.black,
  },
  title: {
    fontFamily: FontFamily.Roboto_Bold,
    color: Colors.black,
    fontSize: textScale(14),
  },
  detailContainer: {
    marginTop: moderateScaleVertical(15),
  },
  text3: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.black,
  },
  listItem:{
    marginTop:moderateScaleVertical(9),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:moderateScale(5)
  }
});
