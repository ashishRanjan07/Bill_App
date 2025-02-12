import React, { useState } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Colors from "../../utils/AppColor";
import DrawerHeader from "../../components/DrawerHeader";
import Data from "../../assets/json/SwapBatteryHistory.json";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import WrapperContainer from "../../components/WrapperContainer";

const SwapHistory = () => {
  const [selected, setSelected] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleItemSelection = (item) => {
    setSelected(item);
    setShowModal(true);
  };

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item?.vehicleID}
        style={styles.item}
        onPress={() => handleItemSelection(item)}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.key}>Date:</Text>
          <Text style={styles.value}>{item?.dateOfSwap}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.key}>Old battery no.:</Text>
          <Text style={styles.value}>{item?.previousBatteryNumber}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.key}>New battery no.:</Text>
          <Text style={styles.value}>{item?.newBatteryNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer>
      <DrawerHeader title={"Swap History"} />
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item?.vehicleID}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={showModal}
        statusBarTranslucent
        onRequestClose={() => {
          setShowModal(false);
          setSelected();
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setShowModal(false);
            setSelected();
          }}
        >
          <View style={styles.overlay}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContainer}>
                <Text style={styles.headerText}>
                  Swap Battery Details for Date {selected?.dateOfSwap}
                </Text>
                <View style={styles.tableContainer}>
                  {selected &&
                    Object.keys(selected).map((key, index) => (
                      <View style={styles.row} key={index}>
                        <Text style={styles.tableKey}>{formatKey(key)}:</Text>
                        <Text style={styles.tableValue}>{selected[key]}</Text>
                      </View>
                    ))}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </WrapperContainer>
  );
};

export default SwapHistory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  item: {
    borderWidth: 2,
    width: "90%",
    alignSelf: "center",
    marginVertical: moderateScaleVertical(5),
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    paddingHorizontal: "5%",
  },
  key: {
    fontFamily: FontFamily.Roboto_Bold,
    color: Colors.black,
    fontSize: textScale(16),
    width: moderateScale(200),
  },
  value: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.black,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: Colors.white,
    padding: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    gap: moderateScale(20),
    maxHeight: "60%",
  },
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    textAlign: "center",
    color: Colors.black,
  },
  tableContainer: {
    marginTop: moderateScaleVertical(10),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateScaleVertical(8),
  },
  tableKey: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(14),
    color: Colors.black,
  },
  tableValue: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.black,
  },
});
