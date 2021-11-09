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
import TabIcon from "react-native-vector-icons/Ionicons";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { RestaurantContextProvider } from "./src/features/services/restaurants/restaurants.context";
import { MapScreen } from "./src/features/restaurants/screens/maps.screen";

import { Text } from "react-native";
import { theme } from "./src/infrustructure/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>Settings Screen !</Text>
    </SafeAreaView>
  );
};
// const Maps = () => {
//   return (
//     <SafeAreaView>
//       <Text>Maps Here !</Text>
//     </SafeAreaView>
//   );
// };

const Tab = createBottomTabNavigator();

function MainBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.ui.success,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={RestaurantsScreen}
        options={{
          tabBarLabel: "Restaurants",
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Maps",
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="map-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <TabIcon name="settings-sharp" size={size} color={color} />
          ),
        }}
      />
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
        <RestaurantContextProvider>
          <NavigationContainer>
            <MainBottomTab />
          </NavigationContainer>
        </RestaurantContextProvider>
      </>
    );
  }
}
