import { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import SubmitBtn from "../../components/SubmitBtn";

const CreatePostsScreen = () => {
  const [picture, setPicture] = useState("");
  const [desctiption, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function handleDataReset() {
    setPicture("");
    setDescription("");
    setLocation("");
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <View style={styles.wrapperPhoto}>
            <Image style={styles.photo} resizeMode="cover"></Image>
            {!picture ? (
              <Image
                source={require("../../images/camera_empty.png")}
                style={styles.camera}
              />
            ) : (
              <Image
                source={require("../../images/camera_with_post.png")}
                style={styles.camera}
              />
            )}
          </View>

          {!picture ? (
            <Text style={styles.text}>Завантажте фото</Text>
          ) : (
            <Text style={styles.text}>Редагувати фото</Text>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              value={desctiption}
              onChangeText={(value) => {
                setDescription(value);
              }}
              style={styles.input}
            />
            {!desctiption ? (
              <Text style={styles.placeholder}>Назва...</Text>
            ) : (
              ""
            )}

            <TextInput
              value={location}
              onChangeText={(value) => {
                setLocation(value);
              }}
              style={[styles.input, styles.inputLocation]}
            />
            <Icon
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.icon}
            />
            {!location ? (
              <Text style={[styles.placeholder, styles.placeholderLocation]}>
                Місцевість...
              </Text>
            ) : (
              ""
            )}
          </View>

          <SubmitBtn
            submitForm={() => {}}
            title="Опубліковати"
            styleBtn={
              !picture || !desctiption || !location ? styles.submit_btn : null
            }
            styleTitle={
              !picture || !desctiption || !location ? styles.submit_title : null
            }
          />

          <TouchableOpacity
            onPress={() => {
              handleDataReset();
            }}
            style={styles.trash}
          >
            <Icon
              name="trash-2"
              size={24}
              color="#BDBDBD"
              style={styles.icon_trash}
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  wrapperPhoto: {
    position: "relative",
    marginBottom: 8,
  },
  photo: {
    width: "100%",
    height: 240,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  camera: {
    width: 60,
    height: 60,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  text: {
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
  },
  keyboard: {
    flex: 1,
  },
  inputContainer: { position: "relative" },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  inputLocation: {
    paddingLeft: 28,
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
  },
  icon: {
    position: "absolute",
    top: 68,
    left: 0,
    transform: [{ translateY: 14 }],
  },
  placeholder: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ translateY: 14 }],
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
  },
  placeholderLocation: {
    top: 68,
    left: 28,
  },
  submit_btn: {
    marginBottom: 120,
    backgroundColor: "#F6F6F6",
  },
  submit_title: {
    color: "#BDBDBD",
  },
  trash: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 70,
    height: 40,
    display: "flex",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
  icon_trash: {
    textAlign: "center",
    paddingVertical: 8,
  },
});
