import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { SubmitBtn } from "./SubmitBtn";

export const RegistrationForm = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null);
  const [activeInput, setActiveInput] = useState(null);
  const [hidePass, setHidePass] = useState(true);

  return (
    <View
      style={[
        styles.inner,
        activeInput && { ...styles.inner, marginBottom: 145 },
      ]}
    >
      <View style={styles.avatar}>
        <Image style={styles.photo} />
        <TouchableOpacity
          style={[avatar ? styles.buttonClose : styles.buttonAdd]}
          onPress={null}
        >
          <AntDesign
            name="plus"
            size={23}
            color={avatar ? "#BDBDBD" : "#FF6C00"}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Реєстрація</Text>

      <Formik
        initialValues={{ login: "", email: "", password: "" }}
        onSubmit={(values) => {}}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  activeInput === "login" && styles.inputOnFocus,
                ]}
                onFocus={() => {
                  setActiveInput("login");
                }}
                onBlur={() => {
                  setActiveInput(null);
                }}
                onChangeText={handleChange("login")}
                value={values.login}
                placeholder="Логін"
              />

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

            <SubmitBtn text={"Зареєструватися"} onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <View style={styles.signIn}>
        <Text style={styles.signInText}>Вже є акаунт?</Text>
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.signInBtnLink}>Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    position: "relative",
    marginTop: "auto",
    paddingTop: 32,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: [{ translateX: -44 }, { translateY: -60 }],
    margin: "auto",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  buttonAdd: {
    position: "absolute",
    top: "0",
    left: "0",
    transform: [{ translateX: 107.5 }, { translateY: 81 }],
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#FF6C00",
  },
  buttonClose: {
    position: "absolute",
    top: "0",
    left: "0",
    transform: [{ translateX: 107.5 }, { translateY: 81 }, { rotate: "45deg" }],
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#BDBDBD",
  },
  text: {
    marginTop: 92,
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
    marginBottom: 45,
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
