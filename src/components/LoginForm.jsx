import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import { SubmitBtn } from "./SubmitBtn";

export const LoginForm = ({ navigation }) => {
  const [activeInput, setActiveInput] = useState(null);
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Увійти</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {}}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  activeInput === "email" && styles.inputOnFocus,
                ]}
                onFocus={() => {
                  setActiveInput("email");
                }}
                onBlur={() => {
                  setActiveInput(null);
                }}
                onChangeText={handleChange("email")}
                value={values.email}
                placeholder="Адреса електронної пошти"
              />

              <TextInput
                style={[
                  styles.input,
                  activeInput === "password" && styles.inputOnFocus,
                ]}
                onFocus={() => {
                  setActiveInput("password");
                }}
                onBlur={() => {
                  setActiveInput(null);
                }}
                onChangeText={handleChange("password")}
                secureTextEntry={hidePass ? true : false}
                value={values.password}
                placeholder="Пароль"
              />

              <TouchableOpacity
                style={styles.showBtn}
                onPress={() => {
                  setHidePass(!hidePass);
                }}
              >
                {hidePass ? (
                  <Text style={styles.showBtnText}>Показати</Text>
                ) : (
                  <Text style={styles.showBtnText}>Скрити</Text>
                )}
              </TouchableOpacity>
            </View>

            <SubmitBtn text={"Увійти"} onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <View style={styles.signIn}>
        <Text style={styles.signInText}>Немає акаунту?</Text>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => navigation.navigate("Registration")}
        >
          <Text style={styles.signInBtnLink}>Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    position: "relative",
    marginTop: "auto",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35.16,
    color: "#212121",
    textAlign: "center",
  },
  form: {
    display: "flex",
  },
  inputContainer: {
    position: "relative",
    display: "flex",
    gap: 16,
    marginBottom: 43,
  },
  input: {
    display: "flex",
    width: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  inputOnFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
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
  signIn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  signInBtn: {
    marginBottom: 111,
    alignItems: "center",
  },
  signInText: {
    marginRight: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
  },
  signInBtnLink: {
    textDecorationLine: "underline",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#1B4371",
    textAlign: "center",
  },
});
