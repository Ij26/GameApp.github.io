// App.js
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import GameFeedScreen from "./screens/GameFeedScreen";
import GameDetailScreen from "./screens/GameDetailScreen";
import GameDashboardScreen from "./screens/GameDashboardScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameFeed" component={GameFeedScreen} />
        <Stack.Screen name="GameDetail" component={GameDetailScreen} />
        <Stack.Screen name="GameDashboard" component={GameDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
