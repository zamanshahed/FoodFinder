import React from "react";
import {
  useFonts,
  BellotaText_700Bold,
  Comfortaa_400Regular,
  Aldrich_400Regular,
} from "@expo-google-fonts/dev";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";

const Settings = () => {
  return <Text>Settings Screen !</Text>;
};
const Maps = () => {
  return <Text>Maps Here !</Text>;
};

const Tab = createBottomTabNavigator();

function MainBottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    BellotaText_700Bold,
    Comfortaa_400Regular,
    Aldrich_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        {/* <RestaurantsScreen /> */}
        <NavigationContainer>
          <MainBottomTab />
        </NavigationContainer>
      </>
    );
  }
}
