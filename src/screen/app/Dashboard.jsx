import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../utils/AppColor";
import DrawerHeader from "../../components/DrawerHeader";
import { fetchUserData } from "../../utils/CommonFunction";
import FontFamily from "../../utils/FontFamily";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import { ImagePath } from "../../utils/ImagePath";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BoxItem from "../../components/BoxItem";
import { BarChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchUserDataFunction("user");
  }, []);
  const fetchUserDataFunction = async (id) => {
    const response = await fetchUserData(id);
    setUserData(response);
  };
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={styles.main}>
      <SafeAreaView />
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={Colors.background}
      />
      <DrawerHeader title={"Home"} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerTextView}>
          <Text style={styles.text}>Hello,</Text>
          <Text style={[styles.text, { fontFamily: FontFamily.Roboto_Medium }]}>
            {userData?.email}
          </Text>
        </View>
        {/* Card */}
        <ImageBackground
          source={ImagePath.homeCard}
          resizeMode="cover"
          style={styles.backgroundImageStyle}
        >
          <View style={styles.detailsHolder}>
            <View style={styles.cardTextView}>
              <Text style={styles.cardText}>Total Subscription </Text>
              <Text
                style={[
                  styles.cardText,
                  { fontFamily: FontFamily.Roboto_Bold },
                ]}
              >
                Balance
              </Text>
            </View>
            <View style={styles.cardTextView}>
              <MaterialIcons
                name="account-balance-wallet"
                size={textScale(40)}
                color={Colors.white}
              />
              <Text style={styles.amountText}>$29,402,00</Text>
            </View>
          </View>
          <View style={styles.buttonHolder}>
            <TouchableOpacity
              style={{ width: "50%", alignItems: "center" }}
              onPress={() => navigation.navigate("View Details")}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: "50%", alignItems: "center" }}
              onPress={() => navigation.navigate("Pay Outstanding")}
            >
              <Text style={styles.buttonText}>Pay Outstanding</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* Feature */}
        <View style={styles.itemBoxHolder}>
          <Text style={styles.fText}>Features</Text>
          <View style={styles.boxHolder}>
            <BoxItem
              name="My Subscription"
              image={ImagePath.mySubscription}
              handleAction={() => navigation.navigate("My Subscription")}
            />
            <BoxItem
              name="Buy Subscription"
              image={ImagePath.buySubscription}
              handleAction={() => navigation.navigate("Buy Subscription")}
            />
            <BoxItem
              name="Payment History"
              image={ImagePath.history}
              handleAction={() => navigation.navigate('Payment History')}
            />
            <BoxItem
              name="Invoice"
              image={ImagePath.invoice}
              handleAction={() => console.log("Clicked")}
            />
            <BoxItem
              name="Offers"
              image={ImagePath.offer}
              handleAction={() => console.log("Clicked")}
            />
            <BoxItem
              name="Pre Bills"
              image={ImagePath.preBill}
              handleAction={() => navigation.navigate('Pre Bills')}
            />
          </View>
        </View>
        {/* Billing History */}
        <View
          style={[
            styles.itemBoxHolder,
            { marginTop: moderateScaleVertical(10) },
          ]}
        >
          <Text style={styles.fText}>Billing History</Text>
          <BarChart
            width={screenWidth * 0.9}
            height={screenWidth / 2}
            data={data}
            chartConfig={{
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              color: () => Colors.statusBarColor,
              labelColor: () => Colors.black,
              barPercentage: 0.5,
              barRadius: 5,
            }}
            withHorizontalLabels={true}
            fromZero={true}
            withCustomBarColorFromData={false}
            flatColor={true}
            withInnerLines={false}
            showBarTops={false}
            showValuesOnTopOfBars={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  headerTextView: {
    marginLeft: moderateScale(16),
    marginVertical: moderateScaleVertical(10),
    padding: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(18),
  },
  backgroundImageStyle: {
    width: moderateScale(370),
    height: moderateScale(200),
    alignSelf: "center",
    borderRadius: moderateScale(15),
    overflow: "hidden",
  },
  cardText: {
    fontFamily: FontFamily.Roboto_Light,
    color: Colors.white,
    fontSize: textScale(18),
  },
  cardTextView: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountText: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(24),
    color: Colors.white,
    marginLeft: moderateScale(9.5),
  },
  detailsHolder: {
    marginTop: moderateScaleVertical(26.5),
    marginLeft: moderateScale(24.5),
    gap: moderateScale(10),
  },
  buttonText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(15),
    color: Colors.white,
  },
  buttonHolder: {
    marginTop: moderateScaleVertical(32),
    height: moderateScale(57),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fText: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(18),
    color: Colors.black,
  },
  boxHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: moderateScale(5),
  },
  itemBoxHolder: {
    marginTop: moderateScaleVertical(26.5),
    width: "95%",
    alignSelf: "center",
    padding: moderateScale(10),
    gap: moderateScaleVertical(10),
  },
});
