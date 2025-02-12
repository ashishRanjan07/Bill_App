import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/AppColor";
import DrawerHeader from "../../components/DrawerHeader";
import Data from "../../assets/json/MySubscription.json";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import BottomSubscriptionCancelModal from "../../components/BottomSubscriptionCancelModal";
import { showMessage } from "react-native-flash-message";

const ManageSubscription = () => {
  const navigation = useNavigation();
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleCancelSubscription = (item) => {
    setShowCancelModal(true);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemHolder}
        onPress={() =>
          navigation.navigate("Change Subscription", { item: item })
        }
      >
        <View style={styles.headerContainer}>
          <Text style={[styles.text, { fontFamily: FontFamily.Roboto_Medium }]}>
            Subscription ID:
          </Text>
          <Text style={styles.text}>{item?.subscription_id}</Text>
        </View>
        <View style={styles.lowerContentHolder}>
          <Text style={styles.text2}>Valid From</Text>
          <Text
            style={[styles.text2, { fontFamily: FontFamily.Roboto_Regular }]}
          >
            {item?.validFrom}
          </Text>
        </View>
        <View style={styles.lowerContentHolder}>
          <Text style={styles.text2}>Expire On</Text>
          <Text
            style={[styles.text2, { fontFamily: FontFamily.Roboto_Regular }]}
          >
            {item?.expireOn}
          </Text>
        </View>
        <View style={styles.iconHolder}>
          <View style={styles.pIH}>
            <Switch
              disabled={true}
              trackColor={{ false: "#767577", true: Colors.Primary }}
              thumbColor={
                item?.autoRenew ? Colors.statusBarColor : Colors.black
              }
              ios_backgroundColor="#3e3e3e"
              onValueChange={item?.autoRenew}
              value={item?.autoRenew}
            />
            <Text style={styles.secondaryText}>Auto- Renew</Text>
          </View>
          <TouchableOpacity
            style={styles.pIH}
            onPress={() => handleCancelSubscription(item)}
          >
            <AntDesign
              name="delete"
              size={textScale(20)}
              color={Colors.black}
            />
            <Text style={styles.secondaryText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={Colors.background}
        />
        <DrawerHeader title={"Manage Subscription"} />
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item?.id}
        />
        <BottomSubscriptionCancelModal 
        visible={showCancelModal} 
        hideModal={()=>setShowCancelModal(false)}
        handleCancel={()=>{
          console.log("Clciked on the cancel Subsscription Modal");
          showMessage({
            message: 'Cancel subscription',
            type: 'success',
            icon:'success'
          });
          setShowCancelModal(false)
        }}
        />
      </SafeAreaView>
    </View>
  );
};

export default ManageSubscription;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
  },
  text2: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    fontSize: textScale(14),
    width: "40%",
  },
  itemHolder: {
    width: "90%",
    alignSelf: "center",
    marginVertical: moderateScaleVertical(5),
    borderRadius: moderateScaleVertical(10),
    overflow: "hidden",
    backgroundColor: Colors.white,
    elevation: moderateScale(10),
    shadowRadius: moderateScale(3),
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  headerContainer: {
    borderWidth: 2,
    backgroundColor: Colors.statusBarColor,
    borderColor: Colors.statusBarColor,
    paddingHorizontal: moderateScale(10),
    height: moderateScale(38),
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(10),
  },
  lowerContentHolder: {
    paddingHorizontal: moderateScale(10),
    height: moderateScale(38),
    alignItems: "center",
    flexDirection: "row",
    gap: moderateScale(10),
  },
  secondaryText: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(14),
  },
  iconHolder: {
    width: "50%",
    alignSelf: "flex-end",
    marginVertical: moderateScaleVertical(10),
    padding: moderateScale(10),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pIH: {
    alignItems: "center",
    gap: moderateScale(5),
  },
});
