import {
  Image,
  ImageBackground,
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
import FontFamily from '../../utils/FontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
  width,
} from '../../utils/ResponsiveSize';
import {ImagePath} from '../../utils/ImagePath';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <ImageBackground source={ImagePath.background} style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <SafeAreaView/>
      {/* <View style={styles.backIconHolder}>
          <Ionicons
            name="arrow-back"
            size={textScale(25)}
            color={Colors.white}
          />
        </View> */}
      <ScrollView style={styles.scrollViewHolder}>
       
        <View style={styles.logoHolder}>
          <Image
            source={ImagePath.logo}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textInput}>
          <View>
            <TextInput
              placeholder="First Name"
              placeholderTextColor={Colors.white}
              value={firstName}
              onChangeText={text => setFirstName(text)}
              keyboardType="default"
              style={styles.inputBox}
            />
          </View>
          <View>
            <TextInput
              placeholder="Last name"
              placeholderTextColor={Colors.white}
              value={lastName}
              onChangeText={text => setLastName(text)}
              keyboardType="default"
              style={styles.inputBox}
            />
          </View>
          <View style={styles.typeHolder}>
            <View style={{width: '45%'}}>
              <Text style={styles.text2}>Select Type</Text>
            </View>
            <TouchableOpacity style={styles.dropDownHolder}>
              <Text style={styles.text2}>Corporate</Text>
              <AntDesign
                name="caretdown"
                size={textScale(15)}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.typeHolder}>
            <View style={{width: '45%'}}>
              <Text style={styles.text2}>Select Country</Text>
            </View>
            <TouchableOpacity style={styles.dropDownHolder}>
              <Text style={styles.text2}>UK</Text>
              <AntDesign
                name="caretdown"
                size={textScale(15)}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Email ID"
              placeholderTextColor={Colors.white}
              value={mobile}
              onChangeText={text => setMobile(text)}
              maxLength={10}
              keyboardType="number-pad"
              style={styles.inputBox}
            />
          </View>
          <View>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor={Colors.white}
              value={mobile}
              onChangeText={text => setMobile(text)}
              maxLength={10}
              keyboardType="number-pad"
              style={styles.inputBox}
            />
          </View>
          <View>
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.white}
              value={password}
              onChangeText={text => setPassword(text)}
              keyboardType="default"
              secureTextEntry={true}
              style={styles.inputBox}
            />
          </View>

          <TouchableOpacity
            style={styles.ppHolder}
            onPress={() => setChecked(!checked)}>
            <MaterialCommunityIcons
              name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={textScale(20)}
              color={Colors.white}
            />
            <Text style={styles.text}>
              By proceeding you agree to our Terms of Service and Privacy
              Policy.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonHolder}>
          <CustomButton
            name={'Sign Up'}
            handleAction={() => navigation.navigate('RegisterVerification')}
          />
        </View>
        <TouchableOpacity style={styles.dAccountHolder} onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.text2}>Already registered?</Text>
          <Text style={[styles.text2, {color: Colors.statusBarColor}]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputBox: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
    padding: moderateScale(10),
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderColor,
  },
  buttonHolder: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: moderateScaleVertical(27),
  },
  scrollViewHolder: {
    borderColor: 'red',
    flex: 1,
  },
  logoHolder: {
    marginTop: moderateScaleVertical(50),
    alignItems: 'center',
  },
  imageStyle: {
    width: moderateScale(180),
    height: moderateScale(62),
  },
  backIconHolder: {
    // marginBottom: moderateScaleVertical(30),
    marginLeft: moderateScale(20),
    width: '10%',
    alignItems: 'center',
  },
  textInput: {
    marginTop: moderateScaleVertical(37),
    width: '90%',
    alignSelf: 'center',
    gap: moderateScale(15),
    // alignItems:'flex-start'
  },
  text: {
    width: '90%',
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(12),
    color: Colors.white,
    lineHeight: scale(20),
  },
  ppHolder: {
    marginTop: moderateScaleVertical(15),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  dAccountHolder: {
    width: '90%',
    marginTop: moderateScaleVertical(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(5),
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(61),
  },
  text2: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
  },
  typeHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dropDownHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderColor,
    paddingBottom: moderateScaleVertical(10),
  },
});
