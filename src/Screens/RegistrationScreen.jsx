import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import SubmitBtn from "../components/SubmitBtn";
import HidePassBtn from "../components/HidePassBtn";
import { StyleSheet } from "react-native";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [avatar, setAavatar] = useState(null);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [activeInput, setActiveInput] = useState(null);

  const handleSubmitForm = () => {
    console.log({ login, email, password });
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-180}
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
                    onChangeText={(value) => setLogin(value)}
                    value={login}
                    placeholder="Логін"
                    autoComplete="off"
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

                <SubmitBtn
                  submitForm={() => {
                    handleSubmitForm();
                    navigation.navigate("BottomNav");
                  }}
                  title="Зареєструватися"
                />
              </View>

              <TouchableOpacity
                style={styles.signInBtn}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.signInBtnLink}>Вже є акаунт? Увійти</Text>
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
  signInBtn: {
    marginBottom: 45,
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

export default RegistrationScreen;
