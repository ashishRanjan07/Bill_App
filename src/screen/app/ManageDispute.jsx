import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../utils/AppColor";
import DrawerHeader from "../../components/DrawerHeader";
import WrapperContainer from "../../components/WrapperContainer";
import Data from "../../assets/json/ManageDispute.json";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import { useNavigation } from "@react-navigation/native";

const ManageDispute = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Manage Dispute Details", { item: item })
        }
        style={[
          styles.itemHolder,
          {
            borderColor:
              (item?.status === "closed" && Colors.green) ||
              (item?.status === "resolved" && Colors.statusBarColor) ||
              (item?.status === "pending" && Colors.red),
          },
        ]}
      >
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Case Id</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.case_id}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Dispute Amount</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.dispute_amount}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Dispute Date</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.dispute_date}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Reason</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.reason}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Current Status</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer>
      <DrawerHeader title={"Manage Dispute"} />
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.case_id}
        />
      </View>
    </WrapperContainer>
  );
};

export default ManageDispute;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  itemHolder: {
    borderWidth: moderateScale(2),
    borderColor: Colors.white,
    elevation: moderateScale(10),
    backgroundColor: Colors.white,
    width: "95%",
    alignSelf: "center",
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(5),
    padding: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(12),
    textTransform: "capitalize",
  },
  innerView: {
    width: "50%",
    padding: moderateScale(10),
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
