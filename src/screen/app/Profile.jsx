import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/AppColor";
import DrawerHeader from "../../components/DrawerHeader";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from "../../utils/ResponsiveSize";
import WrapperContainer from "../../components/WrapperContainer";
import FontFamily from "../../utils/FontFamily";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/CustomButton";
import { showMessage } from "react-native-flash-message";

const Profile = () => {
  const [firstName, setFirstName] = useState("Ashish");
  const [lastName, setLastName] = useState("Ranjan");
  const [country, setCountry] = useState("US");
  const [mobile, setMobile] = useState("+91 6206416452");
  const [email, setEmail] = useState("aviashishranjan@gmail.com");
  const [activeEdit, setActiveEdit] = useState(false);

  const handleUpdate = () => {
    showMessage({
      type: "success",
      icon: "success",
      message: "Profile Details Update Successfully.",
    });
  };

  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <DrawerHeader title={"Profile"} />
        <View style={styles.contentHolder}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Profile Details</Text>
            <TouchableOpacity onPress={() => setActiveEdit(!activeEdit)}>
              <FontAwesome5
                name="user-edit"
                color={Colors.statusBarColor}
                size={textScale(25)}
              />
            </TouchableOpacity>
          </View>
          {/* Forms */}
          <View style={{ gap: moderateScale(5) }}>
            <Text style={styles.nameText}>First Name</Text>
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              keyboardType="default"
              keyboardAppearance="default"
              editable={activeEdit}
              placeholderTextColor={Colors.iconColor}
              style={[
                styles.textInputBox,
                {
                  borderColor: activeEdit
                    ? Colors.statusBarColor
                    : Colors.background,
                },
              ]}
            />
          </View>
          <View style={{ gap: moderateScale(5) }}>
            <Text style={styles.nameText}>Last Name</Text>
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              keyboardType="default"
              keyboardAppearance="default"
              editable={activeEdit}
              placeholderTextColor={Colors.iconColor}
              style={[
                styles.textInputBox,
                {
                  borderColor: activeEdit
                    ? Colors.statusBarColor
                    : Colors.background,
                },
              ]}
            />
          </View>
          <View style={{ gap: moderateScale(5) }}>
            <Text style={styles.nameText}>Mobile Number</Text>
            <TextInput
              placeholder="Mobile Number"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
              keyboardType="number-pad"
              keyboardAppearance="default"
              editable={activeEdit}
              maxLength={10}
              placeholderTextColor={Colors.iconColor}
              style={[
                styles.textInputBox,
                {
                  borderColor: activeEdit
                    ? Colors.statusBarColor
                    : Colors.background,
                },
              ]}
            />
          </View>
          <View style={{ gap: moderateScale(5) }}>
            <Text style={styles.nameText}>Email Id</Text>
            <TextInput
              placeholder="Email Id"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="default"
              keyboardAppearance="default"
              editable={activeEdit}
              placeholderTextColor={Colors.iconColor}
              style={[
                styles.textInputBox,
                {
                  borderColor: activeEdit
                    ? Colors.statusBarColor
                    : Colors.background,
                },
              ]}
            />
          </View>
          <View style={{ gap: moderateScale(5) }}>
            <Text style={styles.nameText}>Country</Text>
            <TextInput
              placeholder="Country Name"
              value={country}
              onChangeText={(text) => setCountry(text)}
              keyboardType="default"
              keyboardAppearance="default"
              editable={activeEdit}
              placeholderTextColor={Colors.iconColor}
              style={[
                styles.textInputBox,
                {
                  borderColor: activeEdit
                    ? Colors.statusBarColor
                    : Colors.background,
                },
              ]}
            />
          </View>
          {activeEdit == true && (
            <CustomButton name={"Update"} handleAction={handleUpdate} />
          )}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  text: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(18),
    color: Colors.statusBarColor,
    textAlign: "left",
    letterSpacing: scale(1),
  },
  contentHolder: {
    borderWidth: 2,
    marginVertical: moderateScaleVertical(10),
    width: "95%",
    alignSelf: "center",
    padding: moderateScale(10),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderRadius: moderateScale(10),
    gap: moderateScale(10),
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.black,
    textAlign: "left",
  },
  textInputBox: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    fontSize: textScale(14),
    borderWidth: 2,
    borderRadius: moderateScale(5),
    borderColor: Colors.background,
    backgroundColor: Colors.background,
    padding: moderateScale(10),
  },
});
