import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={() => ({
        headerTitleAlign: "center",
        headerTitleStyle: { ...styles.title },
        headerLeftContainerStyle: { paddingLeft: 10 },
        headerRightContainerStyle: { paddingRight: 10 },
        tabBarShowLabel: false,
        tabBarStyle: { height: 58, justifyContent: "center" },
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarActiveTintColor: "#FF6C00",
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
          tabBarIcon: () => {
            return (
              <View style={{ ...styles.createBtn }}>
                <AntDesign name="plus" size={13} color={"#ffffff"} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
    lineHeight: 22,
    color: "#212121",
  },
  createBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
