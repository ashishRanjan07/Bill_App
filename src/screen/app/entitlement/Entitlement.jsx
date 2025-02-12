import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import WrapperContainer from "../../../components/WrapperContainer";
import DrawerHeader from "../../../components/DrawerHeader";
import Data from "../../../assets/json/EntitleMent.json";
import { moderateScale, textScale } from "../../../utils/ResponsiveSize";
import FontFamily from "../../../utils/FontFamily";
import Colors from "../../../utils/AppColor";
import BottomListModal from "../../../components/BottomListModal";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

const Entitlement = () => {
  const navigation = useNavigation();
  const [selectedValue,setSelectedValue] = useState();

  const actionData = [
    { id: 1, name: "View" },
    { id: 2, name: "Change Status" },
  ];
  const [showAction, setShowAction] = useState(false);
  const handleSelection = useCallback(async (text) => {
    try {
      if (text?.name === "View") {
        console.log(selectedValue, "Selected Value for Navigation"); 
        navigation.navigate("View EntitlementDetails",{item:selectedValue});
      }
      if (text?.name === "Change Status") {
        showMessage({
            message:"Clicked on the Change Status",
            type:'info',
            icon:'info'
        })
      }
    } catch (error) {
        console.log(error,"Line 33")
    } finally {
      setShowAction(false);
    }
  }, [selectedValue]);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
            setShowAction(true);
            setSelectedValue(item);
        }}
        key={item?.entitlement_number}
        style={styles.itemHolder}
      >
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Entitlement Number</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.entitlement_number}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Offering</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.offering}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Valid From</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.valid_from}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Valid To</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.valid_to}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Status</Text>
          </View>
          <View style={styles.innerView}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    (item?.status === "active" && Colors.green) ||
                    (item?.status === "inactive" && Colors.orange) ||
                    (item?.status === "Suspended" && Colors.red),
                },
              ]}
            >
              {item?.status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <DrawerHeader title={"Entitlement"} />
      <View style={styles.main}>
        <FlatList
          data={Data.entitlements}
          renderItem={renderItem}
          keyExtractor={(item) => item?.entitlement_number}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomListModal
        data={actionData}
        visible={showAction}
        message={"Please select the appropriate Action"}
        hideModal={() => setShowAction(!showAction)}
        handleSelection={handleSelection}
      />
    </WrapperContainer>
  );
};

export default Entitlement;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  innerView: {
    width: "50%",
    padding: moderateScale(10),
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(12),
    textTransform: "capitalize",
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
});
