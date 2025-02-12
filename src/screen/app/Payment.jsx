import {
  FlatList,
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
import Colors from "../../utils/AppColor";
import DrawerHeader from "../../components/DrawerHeader";
import Data from "../../assets/json/PaymentMethod.json";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../../components/CustomButton";

const Payment = () => {
  const [expand, setExpand] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardView}>
        <View style={styles.bankNameHolder}>
          <Text style={styles.bankNameText}>{item?.bankName}</Text>
          <Text style={styles.bankNameText}>{item?.cardType}</Text>
        </View>
        <View style={styles.gapHolder}>
          <Text style={styles.cardText}>Card Number</Text>
          <Text style={styles.cardNumberText}>{item?.cardNumber}</Text>
        </View>
        <View style={styles.bankNameHolder}>
          <View style={styles.gapHolder}>
            <Text style={styles.cardText}>NAME ON CARD</Text>
            <Text style={styles.cardNumberText}>{item?.cardHolderName}</Text>
          </View>
          <View style={styles.gapHolder}>
            <Text style={styles.cardText}>VALIDITY</Text>
            <Text style={styles.cardNumberText}>{item?.expiryDate}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.bankNameHolder}>
          <TouchableOpacity style={styles.buttonHolder}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: "50%", padding: moderateScale(10) }}
          >
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.main}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={Colors.background}
        />
        <DrawerHeader title={"Payment"} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Add Credit card  */}
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.cardView}
              onPress={() => setExpand(!expand)}
            >
              <View style={styles.bankNameHolder}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: moderateScale(10),
                  }}
                >
                  <AntDesign
                    name="creditcard"
                    color={Colors.black}
                    size={textScale(20)}
                  />
                  <Text style={styles.addCardText}>
                    {expand ? "Credit/Debit Card" : "Add new card"}
                  </Text>
                </View>

                <EvilIcons
                  name={expand ? "chevron-up" : "chevron-down"}
                  size={textScale(20)}
                  color={Colors.black}
                />
              </View>
              {expand && (
                <View style={styles.view2}>
                  <Text style={styles.text4}>Card Number</Text>
                  <TextInput
                    placeholder="Card Number"
                    value={cardNumber}
                    onChangeText={(text) => setCardNumber(text)}
                    placeholderTextColor="gray"
                    keyboardType="number-pad"
                    style={[styles.textInput2, { width: "100%" }]}
                  />
                  <Text style={styles.text4}>Name On Card</Text>
                  <TextInput
                    placeholder="Name on card"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholderTextColor="gray"
                    keyboardType="number-pad"
                    style={[styles.textInput2, { width: "100%" }]}
                  />
                  <View style={styles.view}>
                    <View style={styles.view1}>
                      <Text style={styles.text4}>Expiry date:</Text>
                      <TextInput
                        placeholder="MM/YY"
                        value={expiryMonth}
                        onChangeText={(text) => setExpiryMonth(text)}
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
                        onChangeText={(text) => setCardCvv(text)}
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
                      { justifyContent: "flex-start", gap: moderateScale(5) },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={
                        checked ? "checkbox-outline" : "checkbox-blank-outline"
                      }
                      size={textScale(20)}
                      color={Colors.statusBarColor}
                    />
                    <Text style={styles.text4}>Select as primary</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setChecked1(true)}
                    style={[
                      styles.view,
                      { justifyContent: "flex-start", gap: moderateScale(5) },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name={
                        checked1 ? "checkbox-outline" : "checkbox-blank-outline"
                      }
                      size={textScale(20)}
                      color={Colors.statusBarColor}
                    />
                    <Text style={styles.text4}>Set for recurring payments</Text>
                  </TouchableOpacity>
                  <CustomButton
                    name={"Saved Card"}
                    handleAction={() =>
                      console.log("clicked on the saved card section")
                    }
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTypeHolderText}>Primary Card</Text>
            <View style={styles.cardView}>
              <View style={styles.bankNameHolder}>
                <Text style={styles.bankNameText}>
                  {Data?.paymentMethods?.primaryCard?.bankName}
                </Text>
                <Text style={styles.bankNameText}>
                  {Data?.paymentMethods?.primaryCard?.cardType}
                </Text>
              </View>
              <View style={styles.gapHolder}>
                <Text style={styles.cardText}>Card Number</Text>
                <Text style={styles.cardNumberText}>
                  {Data?.paymentMethods?.primaryCard?.cardNumber}
                </Text>
              </View>
              <View style={styles.bankNameHolder}>
                <View style={styles.gapHolder}>
                  <Text style={styles.cardText}>NAME ON CARD</Text>
                  <Text style={styles.cardNumberText}>
                    {Data?.paymentMethods?.primaryCard?.cardHolderName}
                  </Text>
                </View>
                <View style={styles.gapHolder}>
                  <Text style={styles.cardText}>VALIDITY</Text>
                  <Text style={styles.cardNumberText}>
                    {Data?.paymentMethods?.primaryCard?.expiryDate}
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.bankNameHolder}>
                <TouchableOpacity style={styles.buttonHolder}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ width: "50%", padding: moderateScale(10) }}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: moderateScaleVertical(10) }}>
              <Text style={styles.cardTypeHolderText}>Saved Card</Text>
              <FlatList
                data={Data?.paymentMethods?.savedCards}
                renderItem={renderItem}
                keyExtractor={(item) => item?.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  cardTypeHolderText: {
    fontFamily: FontFamily?.Roboto_Medium,
    fontSize: textScale(15),
    color: Colors.black,
    padding: moderateScale(10),
  },
  cardView: {
    marginTop: moderateScaleVertical(10),
    gap: moderateScale(10),
    padding: moderateScale(10),
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors.white,
  },
  bankNameText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(16),
    color: Colors.black,
  },
  cardText: {
    fontFamily: FontFamily.Roboto_Light,
    fontSize: textScale(12),
    color: Colors.searchTextColor,
  },
  cardNumberText: {
    fontFamily: FontFamily.Roboto_Light,
    color: Colors.black,
    fontSize: textScale(14),
  },
  bankNameHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gapHolder: {
    gap: moderateScaleVertical(5),
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.searchTextColor,
    backgroundColor: Colors.searchTextColor,
  },
  buttonHolder: {
    width: "50%",
    borderRightWidth: 2,
    borderColor: Colors.searchTextColor,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.statusBarColor,
    fontSize: textScale(14),
  },
  card: {
    marginVertical: moderateScaleVertical(10),
    width: "95%",
    alignSelf: "center",
    borderRadius: moderateScale(10),
  },
  addCardText: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.black,
  },
  view2: {
    padding: moderateScale(10),
    gap: moderateScaleVertical(5),
  },

  text4: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(10),
    marginTop: moderateScaleVertical(10),
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
    color: Colors.black,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: moderateScaleVertical(10),
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "45%",
  },
});
