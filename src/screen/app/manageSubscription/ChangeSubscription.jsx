import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../../utils/AppColor";
import InternalHeader from "../../../components/InternalHeader";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../utils/ResponsiveSize";
import FontFamily from "../../../utils/FontFamily";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RadioButton } from "react-native-paper";
import CalendarPicker from "react-native-calendar-picker";
import CustomButton from "../../../components/CustomButton";

const ChangeSubscription = ({ route }) => {
  const { item } = route.params;
  console.log(item, "Line 6");
  const [checked, setChecked] = useState("first");
  const minDate = new Date();
  const [date, setDate] = useState();

  return (
    <View style={styles.main}>
      <SafeAreaView style={{ backgroundColor: Colors.background }} />
      <StatusBar
        backgroundColor={Colors.background}
        barStyle={"dark-content"}
      />
      <InternalHeader title={"Change Subscription"} />
      <ScrollView>
        <View
          style={{
            marginVertical: moderateScaleVertical(10),
            width: "95%",
            alignSelf: "center",
          }}
        >
          <View style={{ marginTop: moderateScaleVertical(20) }}>
            <Text style={styles.headerText}>Change your Subscription</Text>
            <>
              <View style={{ marginTop: moderateScaleVertical(15) }}>
                <Text style={styles.pText}>Product name</Text>
                <TouchableOpacity
                  style={{
                    // borderWidth: 2,
                    marginTop: moderateScaleVertical(6),
                    height: moderateScale(40),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: Colors.white,
                    borderRadius: moderateScale(5),
                  }}
                >
                  <Text style={[styles.pText, { width: "80%" }]}>
                    Printer as a service - Gold Package
                  </Text>
                  <View>
                    <FontAwesome
                      name="sort-down"
                      color={Colors.black}
                      size={textScale(14)}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.lowerContainer}>
                <Text style={styles.pText}>Price: $40</Text>
                <Text style={styles.pText}>
                  Description: Printer as a service by HP
                </Text>
              </View>
            </>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.borderColor2,
                backgroundColor: Colors.borderColor2,
                marginVertical: moderateScaleVertical(10),
              }}
            />
            <>
              <View style={{ marginTop: moderateScaleVertical(15) }}>
                <Text style={styles.pText}>Add new product</Text>
                <TouchableOpacity
                  style={{
                    // borderWidth: 2,
                    marginTop: moderateScaleVertical(6),
                    height: moderateScale(40),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    backgroundColor: Colors.white,
                    borderRadius: moderateScale(5),
                  }}
                >
                  <Text style={[styles.pText, { width: "80%" }]}>
                    Printer as a service - Platinum Package
                  </Text>
                  <View>
                    <FontAwesome
                      name="sort-down"
                      color={Colors.black}
                      size={textScale(14)}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.lowerContainer}>
                <Text style={styles.pText}>Price: $40</Text>
                <Text style={styles.pText}>
                  Description: Printer as a service by HP
                </Text>
              </View>
            </>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.borderColor2,
                backgroundColor: Colors.borderColor2,
                marginVertical: moderateScaleVertical(10),
              }}
            />
            <>
              <View style={{ marginTop: moderateScaleVertical(15) }}>
                <Text style={styles.pText}>Customer note</Text>
                <TextInput
                  multiline={true}
                  placeholder="Enter note"
                  placeholderTextColor={Colors.borderColor2}
                  style={styles.textInputBox}
                />
              </View>
            </>
            <Text style={styles.headerText}>When to apply changes?</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: moderateScale(10),
              }}
            >
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                color={Colors.statusBarColor}
              />
              <Text style={styles.pText}>Immediately</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: moderateScale(10),
              }}
            >
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                color={Colors.statusBarColor}
              />
              <Text style={styles.pText}>From date</Text>
            </View>
            {checked === "second" && (
              <CalendarPicker
                minDate={minDate}
                onDateChange={(date1) => {
                  // console.log(date1, 'Line12');
                  setDate(date1);
                }}
                firstDay={1}
                startFromMonday
                previousTitleStyle={styles.dateStyle}
                nextTitleStyle={styles.dateStyle}
                selectedDayColor={Colors.statusBarColor}
                selectedDayStyle={{ backgroundColor: Colors.statusBarColor }}
                selectedDayTextColor={Colors.white}
                selectedDayTextStyle={{
                  fontFamily: FontFamily.Roboto_Medium,
                  fontSize: textScale(12),
                }}
                todayBackgroundColor={Colors.red}
                todayTextStyle={{ color: date ? Colors.white : Colors.green }}
              />
            )}
            <View
              style={{
                width: "60%",
                marginVertical: moderateScaleVertical(10),
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <CustomButton name={"Change Subscription"} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangeSubscription;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(17),
    color: Colors.black,
  },
  pText: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(12),
    color: Colors.black,
  },
  lowerContainer: {
    gap: moderateScale(10),
    marginTop: moderateScaleVertical(10),
    marginHorizontal: moderateScale(10),
  },
  textInputBox: {
    borderWidth: 2,
    backgroundColor: Colors.white,
    marginVertical: moderateScaleVertical(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    borderColor: Colors.white,
    height: moderateScale(150),
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    fontSize: textScale(16),
    width: "98%",
    alignSelf: "center",
  },
  dateStyle: {
    color: Colors.black,
    fontSize: textScale(18),
    fontFamily: "NotoSans-Medium",
  },
  text: {
    fontFamily: "NotoSans-Medium",
    fontSize: textScale(15),
    color: Colors.white,
    textAlign: "center",
    padding: moderateScale(5),
    paddingVertical: moderateScaleVertical(10),
  },
});
