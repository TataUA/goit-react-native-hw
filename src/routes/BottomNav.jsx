import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import NestedNav from "./NestedNav";
import CreatePostsScreen from "../Screens/userScreens/CreatePostsScreen";
import ProfileScreen from "../Screens/userScreens/ProfileScreen";
import BackBtn from "../components/BackBtn";
import PostsScreen from "../Screens/userScreens/PostsScreen";
import { TouchableOpacity } from "react-native";

const Tabs = createBottomTabNavigator();

const BottomNav = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={() => ({
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#E8E8E8",
        },
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
          headerLeft: () => {},
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
          headerLeft: () => <BackBtn />,
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
      <Tabs.Screen
        name="NestedNav"
        component={NestedNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return null;
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

export default BottomNav;
