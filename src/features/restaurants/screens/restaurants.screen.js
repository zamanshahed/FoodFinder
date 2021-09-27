import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import { theme } from "../../../infrustructure/theme";

const marTop = StatusBar.currentHeight;
const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.SearchbarContainer}>
        <Searchbar />
      </View>
      <View style={styles.ListContainer}>
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
          ]}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 5 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    marginTop: isAndroid ? marTop : 0,
    backgroundColor: theme.colors.bg.secondary,
  },
  SearchbarContainer: {
    padding: theme.sizes.one,
  },
  ListContainer: {
    flex: 1,
    padding: theme.sizes.one,
  },
});
