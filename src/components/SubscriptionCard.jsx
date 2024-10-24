import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../utils/ResponsiveSize';
import FontFamily from '../utils/FontFamily';
import Colors from '../utils/AppColor';
import {ImagePath} from '../utils/ImagePath';

const SubscriptionCard = ({item, option}) => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={item?.status === 'Over Due' ? ImagePath.bgRed : ImagePath.bgBlue}
      key={item.id}
      style={styles.item}>
      <View style={styles.contentHolder}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: moderateScale(5),
          }}>
          <Text style={styles.text}>Subscription ID</Text>
          <Text style={[styles.text, {fontFamily: FontFamily.Roboto_Regular}]}>
            :{item?.subscription_id}
          </Text>
        </View>
        <Text style={styles.text2}>${item?.amount}</Text>
        <View
          style={{
            marginTop: moderateScaleVertical(29),
            width: moderateScale(300),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {option === 'shipping' && (
            <>
              <View>
                <Text style={styles.text}>Valid From</Text>
                <Text
                  style={[
                    styles.text,
                    {fontFamily: FontFamily.Roboto_Regular},
                  ]}>
                  {item?.validFrom}
                </Text>
              </View>
              <View>
                <Text style={styles.text}>Expires On</Text>
                <Text
                  style={[
                    styles.text,
                    {fontFamily: FontFamily.Roboto_Regular},
                  ]}>
                  {item?.expireOn}
                </Text>
              </View>
            </>
          )}
          {option==="details" && (
            <View>
                <Text style={styles.text}>{item?.name}</Text>
                </View>
          )}
        </View>
      </View>
      {item?.status === 'Over Due' && (
        <View style={styles.dueHolder}>
          <Text style={styles.text3}>{item?.status}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  item: {
    width: moderateScale(375),
    height: moderateScale(185),
    alignSelf: 'center',
    marginTop: moderateScaleVertical(20),
  },
  contentHolder: {
    marginTop: moderateScaleVertical(38),
    marginLeft: moderateScale(33),
    width: '60%',
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(12),
    color: Colors.black,
  },
  text2: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(22),
    color: Colors.black,
  },
  text3: {
    color: Colors.white,
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(14),
  },
  dueHolder: {
    borderWidth: 1,
    position: 'absolute',
    bottom: -10,
    right: moderateScale(31),
    width: '30%',
    backgroundColor: Colors.red,
    borderColor: Colors.red,
    height: moderateScale(31),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
