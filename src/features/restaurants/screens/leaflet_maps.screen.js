import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const LeafletMapScreen = () => {
  const onLoad = (event) => {
    // log a message showing the map has been loaded
    console.log("onLoad received : ", event);

    // optionally set state
    this.setState(
      {
        ...this.state,
        mapState: { ...this.state.mapState, mapLoaded: true },
      },
      () => {
        // send an array of map layer information to the map
        this.webViewLeaflet.sendMessage({
          mapLayers,
        });
      }
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          //   marginTop: "50%",
          backgroundColor: "cyan",
          width: "100%",
          height: "100%",
        }}
      >
        <Text>Leaflet Map is Loading....</Text>

        <WebViewLeaflet />
      </View>
    </SafeAreaView>
  );
};
