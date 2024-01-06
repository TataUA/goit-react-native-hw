import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <View styles={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
        <Text>Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Map")}>
        <Text>Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
});

export default PostsScreen;
