import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WrapperContainer from "../../components/WrapperContainer";
import InternalHeader from "../../components/InternalHeader";

const Notification = () => {
  return (
    <WrapperContainer>
      <InternalHeader title={"Notification Center"} />
    </WrapperContainer>
  );
};

export default Notification;

const styles = StyleSheet.create({});
