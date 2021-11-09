import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  Text,
} from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info-card.component";
import { theme } from "../../../infrustructure/theme";
import { RestaurantContext } from "../../services/restaurants/restaurants.context";

const marTop = StatusBar.currentHeight;
const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, errorCaught } = useContext(RestaurantContext);
  // console.log(restaurantContext);

  return (
    <SafeAreaView style={styles.mainScreen}>
      {isLoading && (
        <>
          <View style={styles.ActivityIndicatorStyling}>
            <ActivityIndicator animating={true} size={30} />
          </View>
        </>
      )}
      {!isLoading && (
        <>
          <View style={styles.SearchbarContainer}>
            <Searchbar />
          </View>
          <View style={styles.ListContainer}>
            <FlatList
              data={restaurants}
              renderItem={({ item }) => {
                // console.log(item);
                return <RestaurantInfo restaurant={item} />;
              }}
              keyExtractor={(item) => item.name}
              // contentContainerStyle={{ padding: 5 }}
            />
          </View>
        </>
      )}
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
  ActivityIndicatorStyling: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
});
