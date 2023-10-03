import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import SubmitBtn from "../components/SubmitBtn";
import HidePassBtn from "../components/HidePassBtn";
import { StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [activeInput, setActiveInput] = useState(null);

  const handleSubmitForm = () => {
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-220}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <ImageBackground
            source={require("../images/photo-bg.png")}
            style={styles.image}
          >
            <View style={styles.inner}>
              <Text style={styles.text}>Увійти</Text>

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
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                    placeholder="Адреса електронної пошти"
                    autoComplete="off"
                    keyboardType="email-address"
                    autoCapitalize="none"
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
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={hidePass ? true : false}
                    value={password}
                    placeholder="Пароль"
                    autoComplete="off"
                    autoCapitalize="none"
                  />

                  <HidePassBtn
                    onPress={() => setHidePass(!hidePass)}
                    hidePass={hidePass}
                  />
                </View>

                <SubmitBtn submitForm={handleSubmitForm} title="Увійти" />
              </View>

              <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.signInBtnLink}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  keyboard: {
    flex: 1,
  },
  inner: {
    position: "relative",
    marginTop: "auto",
    paddingTop: 32,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  text: {
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
  signInBtn: {
    marginBottom: 111,
    alignItems: "center",
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

export default LoginScreen;
