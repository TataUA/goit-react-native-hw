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
import { styles } from "./LoginScreenStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const handleSubmitForm = () => {
    console.log({ email, password });
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
              keyboardVerticalOffset={-290}
            >
              <View
                style={[
                  styles.inner,
                  isKeyboard && { ...styles.inner, marginBottom: 70 },
                ]}
              >
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
                    <Text style={styles.submitText}>Увійти</Text>
                  </TouchableOpacity>
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
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
