import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/AppColor";
import DrawerHeader from "../../components/DrawerHeader";
import WrapperContainer from "../../components/WrapperContainer";
import CustomSearch from "../../components/CustomSearch";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from "../../utils/ResponsiveSize";
import Data from "../../assets/json/FAQ.json";
import FontFamily from "../../utils/FontFamily";
import Entypo from "react-native-vector-icons/Entypo";

const FAQ = () => {
  const [searchText, setSearchText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filterFAQData = () => {
    return Object.keys(Data.faq).map((sectionKey) => {
      const sectionData = Data.faq[sectionKey];

      const filteredData = Array.isArray(sectionData)
        ? sectionData.filter((item) =>
            item.question.toLowerCase().includes(searchText.toLowerCase())
          )
        : [];

      return { sectionKey, sectionData: filteredData };
    });
  };

  const renderItem = ({ item, index }) => {
    const isExpanded = expandedIndex === index;
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => setExpandedIndex(isExpanded ? null : index)}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View style={{ width: "90%" }}>
            <Text style={styles.questionText}>{item.question}</Text>
          </View>
          <View>
            <Entypo
              name={isExpanded ? "chevron-up" : "chevron-down"}
              color={Colors.searchTextColor}
              size={textScale(20)}
            />
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <Text style={styles.answerText}>{item.answer}</Text>
        )}
      </View>
    );
  };

  const renderSectionHeader = (sectionTitle) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionTitle}</Text>
      </View>
    );
  };

  return (
    <WrapperContainer>
      <DrawerHeader title={"FAQ"} />
      <View style={styles.main}>
        <View style={styles.contentHolder}>
          <CustomSearch
            value={searchText}
            onChange={(text) => setSearchText(text)}
          />
          <FlatList
            data={filterFAQData()}
            renderItem={({ item }) => (
              <View>
                {renderSectionHeader(item.sectionKey)}
                <FlatList
                  data={item.sectionData}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentHolder: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
    marginVertical: moderateScaleVertical(10),
    gap: moderateScaleVertical(20),
  },
  sectionHeader: {
    marginVertical: moderateScaleVertical(10),
    paddingVertical: moderateScaleVertical(5),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(2),
    borderColor: Colors.white,
  },
  sectionHeaderText: {
    fontSize: textScale(18),
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.statusBarColor,
    paddingHorizontal: moderateScale(10),
    textTransform: "capitalize",
  },
  itemContainer: {
    marginBottom: moderateScaleVertical(10),
    paddingHorizontal: 10,
    borderWidth: moderateScale(1.5),
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    elevation: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  questionText: {
    fontSize: textScale(14),
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    letterSpacing: scale(1),
    lineHeight: scale(20),
  },
  answerText: {
    fontSize: textScale(12),
    marginTop: moderateScaleVertical(5),
    letterSpacing: scale(1),
    lineHeight: scale(18),
  },
});
