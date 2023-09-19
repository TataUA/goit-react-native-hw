import React, { useState } from "react";
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
import { styles } from "./RegistrationScreenStyles";

const RegistrationScreen = ({ navigation }) => {
  const [avatar, setAavatar] = useState(null);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const handleSubmitForm = () => {
    console.log({ login, email, password });
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground
          source={require("../../images/photo-bg.png")}
          style={styles.image}
        >
          <View style={styles.box}>
            <KeyboardAvoidingView
              style={styles.keyboard}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={-280}
            >
              <View
                style={[
                  styles.inner,
                  isKeyboard && { ...styles.inner, marginBottom: 115 },
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

                <View style={styles.form}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={[
                        styles.input,
                        activeInput === "login" && styles.inputOnFocus,
                      ]}
                      onFocus={() => {
                        setActiveInput("login");
                        setIsKeyboard(true);
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
                        setIsKeyboard(true);
                      }}
                      onBlur={() => {
                        setActiveInput(null);
                      }}
                      onChangeText={(value) => setEmail(value)}
                      value={email}
                      placeholder="Адреса електронної пошти"
                      autoComplete="off"
                    />

                    <TextInput
                      style={[
                        styles.input,
                        activeInput === "password" && styles.inputOnFocus,
                      ]}
                      onFocus={() => {
                        setActiveInput("password");
                        setIsKeyboard(true);
                      }}
                      onBlur={() => {
                        setActiveInput(null);
                      }}
                      onChangeText={(value) => setPassword(value)}
                      secureTextEntry={hidePass ? true : false}
                      value={password}
                      placeholder="Пароль"
                      autoComplete="off"
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

                  <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={handleSubmitForm}
                  >
                    <Text style={styles.submitText}>Зареєструватися</Text>
                  </TouchableOpacity>
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
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
