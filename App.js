import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import MainNav from "./src/routes/MainNav";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <MainNav />;
}
