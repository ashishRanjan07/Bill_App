import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import WrapperContainer from "../../components/WrapperContainer";
import InternalHeader from "../../components/InternalHeader";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import Colors from "../../utils/AppColor";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import BottomListModal from "../../components/BottomListModal";
import DocumentPicker, { types } from "react-native-document-picker";
import CustomButton from "../../components/CustomButton";
import { showMessage } from "react-native-flash-message";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ManageDisputeDetails = ({ route }) => {
  const navigation = useNavigation();
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [fileResponse, setFileResponse] = useState([]);

  const pickerType = [
    { id: 1, name: "File" },
    { id: 2, name: "Image" },
  ];

  const { item } = route.params;
  console.log(item, "Line 7");

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

  return (
    <WrapperContainer>
      <InternalHeader title={"Manage Dispute Details"} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.contentHolder}>
          <Text style={styles.textStyle}>CASE ID: {item?.case_id}</Text>
          <View
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
          </View>
        </View>
        <TouchableOpacity
          style={styles.attachmentHolder}
          onPress={() => setShowModal(true)}
        >
          <View style={styles.innerAttachment}>
            <Text style={styles.text}>📎 Add Attachments</Text>
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
        {/* Add Notes */}
        <View style={styles.noteHolder}>
          <Text style={styles.text}>Addition Notes</Text>
          <TextInput
            placeholder="Additional Notes"
            placeholderTextColor={Colors.black}
            value={additionalNotes}
            onChangeText={(text) => setAdditionalNotes(text)}
            multiline={true}
            keyboardType="default"
            style={styles.textInputBox}
          />
        </View>
        {/* Note History */}
        <View
          style={{
            borderWidth: 2,
            marginVertical: moderateScaleVertical(10),
            width: "95%",
            alignSelf: "center",
            padding: moderateScale(10),
            borderRadius: moderateScale(5),
            backgroundColor: Colors.white,
            borderColor: Colors.white,
            gap:moderateScaleVertical(10)
          }}
        >
          <Text style={[styles.text, { textAlign: "center" }]}>
            Note History
          </Text>
          <View style={styles.entityHolder}>
            <FontAwesome
              name="user"
              color={Colors.statusBarColor}
              size={textScale(25)}
            />
            <View style={{ width: "80%", gap: moderateScaleVertical(5) }}>
              <Text style={styles.text}>Ashish Ranjan</Text>
              <Text style={styles.text}>Hi Teams</Text>
              <Text style={styles.text}>12:36pm</Text>
            </View>
          </View>
          <View style={styles.entityHolder}>
            <FontAwesome
              name="user"
              color={Colors.statusBarColor}
              size={textScale(25)}
            />
            <View style={{ width: "80%", gap: moderateScaleVertical(5) }}>
              <Text style={styles.text}>Executive Agent</Text>
              <Text style={styles.text}>Hi Ashish Ranjan, How can i help you?</Text>
              <Text style={styles.text}>12:37pm</Text>
            </View>
          </View>
        </View>
        <View style={{ width: "95%", alignSelf: "center",marginBottom:moderateScaleVertical(10) }}>
          <CustomButton
            name={"Submit"}
            handleAction={() => {
              console.log("Clicked on the Submit Button");
              showMessage({
                type: "success",
                icon: "success",
                message: "Manage Dispute Applied Successfully!",
              });
            }}
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
    </WrapperContainer>
  );
};

export default ManageDisputeDetails;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.statusBarColor,
    fontSize: textScale(16),
    letterSpacing: scale(1),
  },
  contentHolder: {
    padding: moderateScale(10),
    gap: moderateScale(10),
  },
  itemHolder: {
    borderWidth: moderateScale(2),
    borderColor: Colors.white,
    elevation: moderateScale(10),
    backgroundColor: Colors.white,
    width: "100%",
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
  uri: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.statusBarColor,
    fontSize: textScale(12),
    marginVertical: moderateScale(5),
  },
  textInputBox: {
    borderWidth: 2,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(12),
    color: Colors.black,
    padding: moderateScale(10),
    letterSpacing:scale(1),
    lineHeight:scale(22)
  },
  noteHolder: {
    borderWidth: 2,
    borderColor: Colors.statusBarColor,
    marginVertical: moderateScaleVertical(10),
    width: "95%",
    alignSelf: "center",
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    gap: moderateScaleVertical(10),
  },
  entityHolder: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(15),
    backgroundColor: Colors.background,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
});
