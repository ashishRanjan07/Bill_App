import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import WrapperContainer from "../../../components/WrapperContainer";
import DrawerHeader from "../../../components/DrawerHeader";
import Data from "../../../assets/json/SolutionOrder.json";
import CustomSearch from "../../../components/CustomSearch";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../utils/ResponsiveSize";
import Colors from "../../../utils/AppColor";
import { ImagePath } from "../../../utils/ImagePath";
import FontFamily from "../../../utils/FontFamily";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SolutionOrder = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemHolder}
        onPress={() =>
          navigation.navigate("Solution Order Details", { data: item })
        }
      >
        <View style={styles.upperView} />
        <View style={styles.view}>
          <View style={styles.innerView}>
            <View style={{ width: "50%" }}>
              <Text style={styles.text}>Name</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.text}>{item?.product_name}</Text>
            </View>
          </View>
          <View style={styles.innerView}>
            <View style={{ width: "50%" }}>
              <Text style={styles.text}>Price</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.text}>{item?.price}</Text>
            </View>
          </View>
          <View style={styles.innerView}>
            <View style={{ width: "50%" }}>
              <Text style={styles.text}>Product Description</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={styles.text} numberOfLines={2}>
                {item?.product_description}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.imageHolder}>
          <Image
            source={ImagePath.rPrinter}
            resizeMode="contain"
            style={styles.imageView}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <DrawerHeader title={"Solution Order"} />
      <View style={styles.contentHolder}>
        <CustomSearch
          value={searchText}
          onChange={(text) => setSearchText(text)}
        />
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.order_id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </WrapperContainer>
  );
};

export default SolutionOrder;

const styles = StyleSheet.create({
  itemHolder: {
    borderWidth: 2,
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(5),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    overflow: "hidden",
    elevation: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  contentHolder: {
    width: "90%",
    alignSelf: "center",
    marginVertical: moderateScaleVertical(15),
    gap: moderateScaleVertical(20),
    flex: 1,
  },
  imageHolder: {
    borderWidth: 2,
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    width: "35%",
    height: "35%",
    top: "5%",
    backgroundColor: Colors.statusBarColor,
    borderRadius: moderateScale(100000000),
    borderColor: Colors.white,
  },
  upperView: {
    padding: moderateScale(10),
    height: moderateScale(70),
    backgroundColor: Colors.statusBarColor,
  },
  imageView: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(12),
    color: Colors.black,
  },
  innerView: {
    marginVertical: moderateScaleVertical(5),
    flexDirection: "row",
    justifyContent: "center",
  },
  view: {
    padding: moderateScale(10),
    backgroundColor: Colors.white,
    paddingTop: "15%",
  },
});
