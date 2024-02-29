import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Components/Screens/Home";
import FavUsers from "./Components/Screens/FavUsers";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Nav = createDrawerNavigator();
export default function App() {
  return (
    <>
      {/* <View style={styles.container}> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Fav" component={FavUsers} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({});
