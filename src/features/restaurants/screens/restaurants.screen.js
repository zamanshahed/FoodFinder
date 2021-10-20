import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info-card.component";
import { theme } from "../../../infrustructure/theme";
import { RestaurantContext } from "../../services/restaurants/restaurants.context";

const marTop = StatusBar.currentHeight;
const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  console.log(restaurantContext);
  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.SearchbarContainer}>
        <Searchbar />
      </View>
      <View style={styles.ListContainer}>
        <FlatList
          data={restaurantContext.restaurants}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => item.name}
          // contentContainerStyle={{ padding: 5 }}
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
    // paddingHorizontal: theme.sizes.one,
    padding: theme.sizes.one,
  },
  ListContainer: {
    flex: 1,
    // padding: theme.sizes.one,
  },
});
