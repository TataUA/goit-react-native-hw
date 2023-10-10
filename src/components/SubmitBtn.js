import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

const SubmitBtn = ({ submitForm, title }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={submitForm}>
      <Text style={styles.submitText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    width: "100%",
    height: 51,
    marginBottom: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  submitText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#fff",
    textAlign: "center",
  },
});

export default SubmitBtn;
