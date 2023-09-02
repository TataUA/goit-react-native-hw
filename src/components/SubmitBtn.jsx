import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SubmitBtn = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
      <Text style={styles.submitText}>{text}</Text>
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
