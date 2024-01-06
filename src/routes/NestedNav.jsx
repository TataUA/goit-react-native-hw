import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import PostsScreen from "../Screens/userScreens/PostsScreen";
import MapScreen from "../Screens/nestedScreens/MapScreen";
import CommentsScreen from "../Screens/nestedScreens/CommentsScreen";

const NestedStack = createStackNavigator();

const NestedNav = () => {
  const navigation = useNavigation();
  return (
    <NestedStack.Navigator
      screenOptions={() => ({
        headerStyle:{
          borderBottomWidth: 1,
          borderBottomColor:"#E8E8E8",
        },
        headerTitleAlign: "center",
        headerTitleStyle: { ...styles.title },
        headerRightContainerStyle: { paddingRight: 10 },
      })}
    >
      {/* <NestedStack.Screen
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
      /> */}
      <NestedStack.Screen name="Map" component={MapScreen} />
      <NestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          tabBarStyle: { display: "none" },
        }}
      />
    </NestedStack.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontFamily: "Roboto-Medium",
    lineHeight: 22,
    color: "#212121",
  },
});

export default NestedNav;
