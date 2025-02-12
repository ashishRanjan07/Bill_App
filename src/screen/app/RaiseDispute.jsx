import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import WrapperContainer from "../../components/WrapperContainer";
import InternalHeader from "../../components/InternalHeader";
import { ScrollView } from "react-native";
import FontFamily from "../../utils/FontFamily";
import Colors from "../../utils/AppColor";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import AntDesign from "react-native-vector-icons/AntDesign";
import BottomListModal from "../../components/BottomListModal";
import DocumentPicker, { types } from "react-native-document-picker";
import Entypo from "react-native-vector-icons/Entypo";
import CustomButton from "../../components/CustomButton";

const RaiseDispute = () => {
  const [amount, setAmount] = useState();
  const [customerNotes, setCustomerNote] = useState();
  const [showModal, setShowModal] = useState(false);
  const [fileResponse, setFileResponse] = useState([]);
  const [reason, setRegion] = useState();
  const [showDisputeType, setShowDisputeType] = useState(false);
  const [disputeValue, setDisputeValue] = useState("");
  const [showPriorityType, setShowPriorityType] = useState(false);
  const [priorityValue, setPriorityValue] = useState("");

  const pickerType = [
    { id: 1, name: "File" },
    { id: 2, name: "Image" },
  ];
  const disputeType = [
    { id: 1, name: "Dispute Type 1" },
    { id: 2, name: "Dispute Type 2" },
  ];
  const priorityType = [
    { id: 1, name: "priority Type 1" },
    { id: 2, name: "priority Type 2" },
  ];

  const handleSelection = useCallback(async (text) => {
    console.log(text, "Line 180");
    try {
      if (text?.name === "File") {
        const response = await DocumentPicker.pick({
          presentationStyle: "fullScreen",
          type: [
            types.pdf,
            types.plainText,
            types.zip,
            types.doc,
            types.docx,
            types.json,
          ],
          allowMultiSelection: true,
        });
        setFileResponse(response);
        console.log(response, "Line 49");
      } else if (text?.name === "Image") {
        const response = await DocumentPicker.pick({
          presentationStyle: "fullScreen",
          type: [types.images],
          allowMultiSelection: true,
        });
        setFileResponse(response);
        console.log(response, "Line 56");
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User canceled the picker");
      } else {
        console.warn(err);
      }
    } finally {
      setShowModal(false);
    }
  }, []);

  const handleDisputeSelection = (text) => {
    setDisputeValue(text?.name);
    setShowDisputeType(false);
  };

  const handlePrioritySelection = (text) => {
    setPriorityValue(text?.name);
    setShowPriorityType(false);
  };

  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <InternalHeader title={"Raise Dispute"} />
        <Text style={styles.headerText}>Dispute Information</Text>
        <ScrollView>
          <View style={styles.view}>
            <Text style={styles.text}>Invoice Number</Text>
            <TextInput
              placeholder="6000230303056"
              placeholderTextColor={Colors.searchTextColor}
              editable={false}
              style={styles.textInputBox}
            />
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Dispute Amount</Text>
            <TextInput
              placeholder="Amount"
              placeholderTextColor={Colors.searchTextColor}
              keyboardType="number-pad"
              style={styles.textInputBox}
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Reason</Text>
            <TextInput
              placeholder="Reason"
              placeholderTextColor={Colors.searchTextColor}
              keyboardType="default"
              style={styles.textInputBox}
              value={reason}
              onChangeText={(text) => setRegion(text)}
            />
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Customer Notes</Text>
            <TextInput
              placeholder="Customer Notes"
              placeholderTextColor={Colors.searchTextColor}
              keyboardType="default"
              style={[styles.textInputBox, { height: moderateScale(75) }]}
              multiline={true}
              value={customerNotes}
              onChangeText={(text) => setCustomerNote(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.selectTab}
            onPress={() => setShowDisputeType(true)}
          >
            <Text style={styles.text}>
              {disputeValue ? disputeValue : "Dispute Type"}
            </Text>
            <Entypo
              name="chevron-down"
              size={textScale(18)}
              color={Colors.searchTextColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectTab}
            onPress={() => setShowPriorityType(true)}
          >
            <Text style={styles.text}>
              {priorityValue ? priorityValue : "Select Priority"}
            </Text>
            <Entypo
              name="chevron-down"
              size={textScale(18)}
              color={Colors.searchTextColor}
            />
          </TouchableOpacity>
          {/* Add Attachment */}
          <TouchableOpacity
            style={styles.attachmentHolder}
            onPress={() => setShowModal(true)}
          >
            <View style={styles.innerAttachment}>
              <Text style={styles.text2}>📎 Add Attachments</Text>
              <AntDesign
                name="plussquareo"
                size={textScale(25)}
                color={Colors.statusBarColor}
              />
            </View>
            {fileResponse.map((file, index) => (
              <Text
                key={index.toString()}
                style={styles.uri}
                numberOfLines={1}
                ellipsizeMode={"middle"}
              >
                {file?.name}
              </Text>
            ))}
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              alignSelf: "center",
              marginVertical: moderateScaleVertical(10),
            }}
          >
            <CustomButton
              name={"Raise Dispute"}
              handleAction={() => console.log("Clicked on the Raise Dispute")}
            />
          </View>
        </ScrollView>
        <BottomListModal
          visible={showModal}
          message={"Please select the File Sector Method"}
          data={pickerType}
          hideModal={() => setShowModal(!showModal)}
          handleSelection={handleSelection}
        />
        <BottomListModal
          visible={showDisputeType}
          message={"Please select the Dispute type"}
          data={disputeType}
          hideModal={() => setShowDisputeType(!showDisputeType)}
          handleSelection={handleDisputeSelection}
        />
        <BottomListModal
          visible={showPriorityType}
          message={"Please select the Priority"}
          data={priorityType}
          hideModal={() => setShowPriorityType(!showPriorityType)}
          handleSelection={handlePrioritySelection}
        />
      </View>
    </WrapperContainer>
  );
};

export default RaiseDispute;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    fontSize: textScale(18),
    padding: moderateScale(10),
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.searchTextColor,
  },
  textInputBox: {
    borderWidth: 2,
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.searchTextColor,
    fontSize: textScale(14),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  view: {
    padding: moderateScale(10),
    width: "95%",
    gap: moderateScale(5),
    alignSelf: "center",
  },
  attachmentHolder: {
    borderWidth: 2,
    borderRadius: moderateScale(10),
    borderStyle: "dashed",
    borderColor: Colors.back,
    width: "95%",
    alignSelf: "center",
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(15),
  },
  innerAttachment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text2: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(12),
    textTransform: "capitalize",
  },
  uri: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.statusBarColor,
    fontSize: textScale(12),
    marginVertical: moderateScale(5),
  },
  selectTab: {
    width: "90%",
    alignSelf: "center",
    padding: moderateScale(10),
    backgroundColor: Colors.white,
    marginVertical: moderateScaleVertical(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
