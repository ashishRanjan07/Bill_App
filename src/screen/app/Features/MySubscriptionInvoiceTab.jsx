import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../utils/AppColor';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../utils/ResponsiveSize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {ImagePath} from '../../../utils/ImagePath';
import {Image} from 'react-native';
import FontFamily from '../../../utils/FontFamily';

const MySubscriptionInvoiceTab = ({route}) => {
  const invoice = route.params;
  const [selected, setSelected] = useState();
  const [expand, setExpand] = useState();
  const handleSelection = detail => {
    setSelected(detail);
  };
  const handleShowDetails = detail => {
    setExpand(detail);
  };
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      {Object.keys(invoice).map(key => {
        const detail = invoice[key];
        return (
          <View style={styles.contentHolder}>
            <TouchableOpacity
              onPress={() => handleSelection(detail)}
              style={styles.checkBoxHolder}>
              <MaterialCommunityIcons
                name={
                  selected?.id === detail?.id
                    ? 'checkbox-outline'
                    : 'checkbox-blank-outline'
                }
                color={Colors.searchTextColor}
                size={textScale(25)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleShowDetails(detail)}
              style={styles.detailHolder}>
              <View style={styles.innerDetailsHolder}>
                <ImageBackground
                  source={ImagePath.smallBack}
                  resizeMode="contain"
                  style={styles.backgroundImageStyle}>
                  <Image
                    source={ImagePath.printer}
                    resizeMode="cover"
                    style={styles.innerImageStyle}
                  />
                </ImageBackground>
                <View style={styles.descriptionHolder}>
                  <View style={styles.textHolder}>
                    <Text style={styles.text}>Amount</Text>
                    <Text style={styles.priceText}>{detail?.amount}</Text>
                  </View>
                  <View style={styles.textHolder}>
                    <Text style={styles.text}>Due Date</Text>
                    <Text style={styles.text}>{detail?.billDate}</Text>
                  </View>
                  {expand?.id === detail?.id && (
                    <View style={styles.textHolder}>
                      <Text style={styles.text}>Bill Status</Text>
                      <Text style={styles.text}>{detail?.bill_status}</Text>
                    </View>
                  )}
                  {expand?.id === detail?.id && (
                    <View style={styles.textHolder}>
                      <Text style={styles.text}>Bill Number</Text>
                      <Text style={styles.text}>{detail?.bill_number}</Text>
                    </View>
                  )}
                </View>
              </View>
              <View>
                <Feather
                  name={
                    expand?.id === detail?.id ? 'chevron-up' : 'chevron-down'
                  }
                  color={Colors.searchTextColor}
                  size={textScale(25)}
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MySubscriptionInvoiceTab;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(12),
    color: Colors.black,
  },
  priceText: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(12),
    color: Colors.red,
  },
  contentHolder: {
    borderWidth: moderateScale(1),
    width: '95%',
    alignSelf: 'center',
    marginTop: moderateScaleVertical(10),
    backgroundColor: Colors.white,
    borderColor: Colors.borderColor2,
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    elevation: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  checkBoxHolder: {
    width: '10%',
    alignItems: 'center',
  },
  detailHolder: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerDetailsHolder: {
    width: '80%',
    flexDirection: 'row',
    gap: moderateScale(5),
  },
  backgroundImageStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerImageStyle: {
    width: moderateScale(30),
    height: moderateScale(32),
  },
  descriptionHolder: {
    width: '70%',
    paddingVertical: moderateScaleVertical(10),
    gap: moderateScaleVertical(10),
  },
  textHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
