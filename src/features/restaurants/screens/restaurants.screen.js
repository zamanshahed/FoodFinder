import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

const marTop = StatusBar.currentHeight;
const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SearchbarContainer}>
        <Searchbar />
      </View>
      <View style={styles.ListContainer}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? marTop : 0,
    backgroundColor: "#f7f1e3",
  },
  SearchbarContainer: {
    padding: 15,
  },
  ListContainer: {
    flex: 1,
    paddingLeft: 8,
  },
});
