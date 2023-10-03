import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

const HidePassBtn = ({ onPress, hidePass }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {hidePass ? (
        <Text style={styles.showBtnText}>Показати</Text>
      ) : (
        <Text style={styles.showBtnText}>Скрити</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  showBtnText: {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: [{ translateX: -16 }, { translateY: -32 }],
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
  },
});

export default HidePassBtn;
