import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../utils/AppColor';
import InternalHeader from '../../components/InternalHeader';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../utils/ResponsiveSize';
import FontFamily from '../../utils/FontFamily';
import Data from '../../assets/json/SavedCard.json';
import {CheckBox} from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../components/CustomButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImagePath} from '../../utils/ImagePath';

const PayOutStanding = () => {
  const [cvv, setCvv] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandCreditCard, setExpandCreditCard] = useState(false);
  // const [expandUPI, setExpandUPI] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expandUPISection, setExpandUPISection] = useState(false);
  const [selectUPIId,setSelectUPIId ]= useState(false)
  const [checked, setChecked] = useState(false);
  const [upiId, setUPIId] = useState('');
  const [gPayId,SetGPayId] = useState(false);
  const [expiryMonth,setExpiryMonth] = useState("");
  const [cardCvv,setCardCvv] = useState("")

  const handleCreditCard = () => {
    setExpandCreditCard(!expandCreditCard);
    setExpandUPISection(false);
  };

  const renderItem = ({item}) => {
    const isSelected = selectedItem === item.id;

    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => setSelectedItem(item.id)}
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.white,
            padding: moderateScale(5),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CheckBox
            checked={isSelected}
            onPress={() => setSelectedItem(item.id)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <View style={{gap: moderateScaleVertical(10)}}>
            <Text style={styles.bankText}>
              {item?.bankName} {item?.cardType}
            </Text>
            <Text style={styles.cardNumberText}>{item?.cardNumber}</Text>
          </View>
          <View style={{gap: moderateScaleVertical(10)}}>
            <Text style={styles.cardTypeText}>{item?.cardName}</Text>
            <Text
              style={[
                styles.cardNumberText,
                {
                  width: isSelected ? moderateScale(80) : moderateScale(120),
                  textAlign: 'right',
                },
              ]}>
              {item?.accountHolderName}
            </Text>
          </View>
          {isSelected && (
            <View style={styles.textInputHolder}>
              <TextInput
                placeholder="CVV"
                value={cvv}
                onChangeText={text => setCvv(text)}
                placeholderTextColor={Colors.black}
                keyboardType="number-pad"
                maxLength={3}
                style={styles.textInput}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: Colors.background}} />
      <StatusBar
        backgroundColor={Colors.background}
        barStyle={'dark-content'}
      />
      <InternalHeader title={'Pay Outstanding'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upperDesignView} />
        <View style={styles.amountHolder}>
          <Text style={styles.text}>Total amount to be paid</Text>
          <Text style={styles.amountText}>$61.06</Text>
        </View>
        {/* Select payment Options */}
        <View style={styles.lowerView}>
          <View style={styles.textHolder}>
            <Text style={styles.text2}>Select </Text>
            <Text style={[styles.text2, {fontFamily: FontFamily.Roboto_Bold}]}>
              Payment Options
            </Text>
          </View>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.textHolder}>
            <Text style={styles.text2}>Other </Text>
            <Text style={[styles.text2, {fontFamily: FontFamily.Roboto_Bold}]}>
              Payment Method
            </Text>
          </View>
          <View style={styles.outerView}>
            <TouchableOpacity
              style={styles.innerView}
              onPress={handleCreditCard}>
              <Entypo
                name="credit-card"
                size={textScale(35)}
                color={Colors.black}
              />
              <Text style={styles.text3}>Credit/Debit Card</Text>
              <View style={{width: '10%', alignItems: 'center'}}>
                <Feather
                  name={expandCreditCard ? 'chevron-up' : 'chevron-down'}
                  color={Colors.black}
                  size={textScale(20)}
                />
              </View>
            </TouchableOpacity>
            {expandCreditCard && (
              <View style={styles.view2}>
                <Text style={styles.text4}>Card Number</Text>
                <TextInput
                  placeholder="Card Number"
                  value={cardNumber}
                  onChangeText={text => setCardNumber(text)}
                  placeholderTextColor="gray"
                  keyboardType="number-pad"
                  style={[styles.textInput2, {width: '100%'}]}
                />
                <View style={styles.view}>
                  <View style={styles.view1}>
                    <Text style={styles.text4}>Expiry date:</Text>
                    <TextInput
                      placeholder="MM/YY"
                      value={expiryMonth}
                      onChangeText={text => setExpiryMonth(text)}
                      placeholderTextColor="gray"
                      keyboardType="number-pad"
                      style={styles.textInput2}
                    />
                  </View>
                  <View style={styles.view1}>
                    <Text style={styles.text4}>CVV Code:</Text>
                    <TextInput
                      placeholder="***"
                      value={cardCvv}
                      maxLength={3}
                      onChangeText={text => setCardCvv(text)}
                      placeholderTextColor="gray"
                      keyboardType="number-pad"
                      style={styles.textInput2}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => setChecked(true)}
                  style={[
                    styles.view,
                    {justifyContent: 'flex-start', gap: moderateScale(5)},
                  ]}>
                  <MaterialCommunityIcons
                    name={
                      checked ? 'checkbox-outline' : 'checkbox-blank-outline'
                    }
                    size={textScale(20)}
                    color={Colors.statusBarColor}
                  />
                  <Text style={styles.text4}>
                    Save this card for faster payments
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.outerView}>
            <TouchableOpacity
              style={styles.innerView}
              onPress={() => setExpandUPISection(!expandUPISection)}>
              <Entypo
                name="credit-card"
                size={textScale(35)}
                color={Colors.black}
              />
              <Text style={styles.text3}>Google Pay/BHIM UPI</Text>
              <View style={{width: '10%', alignItems: 'center'}}>
                <Feather
                  name={expandUPISection ? 'chevron-up' : 'chevron-down'}
                  color={Colors.black}
                  size={textScale(20)}
                />
              </View>
            </TouchableOpacity>
            {expandUPISection && (
              <>
                <View style={styles.view3}>
                  <CheckBox
                    checked={selectUPIId}
                    onPress={() => setSelectUPIId(!selectUPIId)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <View style={styles.imageHolder}>
                    <Image
                      source={ImagePath.upi}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </View>
                  <Text style={styles.text5}>Enter UPI ID</Text>
                </View>
                <TextInput
                  placeholder="Enter UPI ID here"
                  placeholderTextColor={'gray'}
                  value={upiId}
                  onChangeText={text => setUPIId(text)}
                  style={styles.textInput3}
                />
                <View style={styles.view3}>
                <CheckBox
                    checked={gPayId}
                    onPress={() => SetGPayId(!gPayId)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                   <View style={styles.imageHolder}>
                    <Image
                      source={ImagePath.gPay}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </View>
                  <Text style={styles.text5}>Google Pay</Text>
                </View>
              </>
            )}
          </View>
        </View>

        <View style={styles.buttonHolder}>
          <CustomButton
            name={'Pay Now'}
            handleAction={() => console.log('Pay Now Button')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PayOutStanding;

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
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
    textAlign: 'center',
  },
  amountText: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(22),
    color: Colors.white,
  },
  amountHolder: {
    borderWidth: 2,
    marginTop: moderateScale(100),
    width: moderateScale(286),
    height: moderateScale(76),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    borderColor: Colors.statusBarColor,
    backgroundColor: Colors.statusBarColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScaleVertical(5),
  },
  lowerView: {
    marginVertical: moderateScaleVertical(50),
    width: '95%',
    alignSelf: 'center',
    gap: moderateScale(20),
  },
  text2: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(15),
  },
  textHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(2),
    padding: moderateScale(10),
  },
  item: {
    borderWidth: 2,
    backgroundColor:Colors.white,
    borderColor: Colors.white,
    width: '95%',
    alignSelf: 'center',
    marginVertical: moderateScaleVertical(5),
    borderRadius: moderateScale(5),
    elevation: moderateScale(5),
    overflow: 'hidden',
  },
  bankText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(10),
    color: Colors.black,
  },
  cardNumberText: {
    fontFamily: FontFamily.Roboto_Light,
    fontSize: textScale(10),
    color: '#2A2A2B',
  },
  cardTypeText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(12),
    color: Colors.blue,
    textAlign: 'right',
  },
  textInput: {
    borderWidth: 2,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.background,
    borderColor: Colors.background,
    fontFamily: FontFamily.Roboto_Medium,
    textAlign: 'center',
    fontSize: textScale(12),
    color:Colors.black
  },
  textInputHolder: {
    gap: moderateScaleVertical(10),
    width: moderateScale(60),
    alignItems: 'center',
  },
  outerView: {
    borderWidth: 2,
    width: '95%',
    alignSelf: 'center',
    gap: moderateScale(10),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    elevation: moderateScale(5),
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  text3: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(12),
    color: Colors.black,
    width: '70%',
  },
  buttonHolder: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(20),
  },
  text4: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(10),
  },
  textInput2: {
    borderWidth: 2,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.background,
    borderColor: Colors.background,
    fontFamily: FontFamily.Roboto_Regular,
    width: moderateScale(84),
    height: moderateScale(34),
    fontSize: textScale(10),
    color:Colors.black
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScaleVertical(10),
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
  },
  view2: {
    padding: moderateScale(10),
    gap: moderateScaleVertical(5),
  },
  text5: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(11),
    color: Colors.black,
    marginHorizontal: moderateScale(10),
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  imageHolder: {
    borderWidth: 1,
    borderRadius: 5000,
    padding: moderateScale(5),
    borderColor: Colors.borderColor,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  image:{
    width: moderateScale(24),
    height: moderateScale(24),
  },
  textInput3:{
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    borderColor: Colors.borderColor2,
    height: moderateScale(35),
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(10),
    paddingHorizontal:moderateScale(10)
  }
});
