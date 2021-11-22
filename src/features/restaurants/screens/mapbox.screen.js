import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setConnected(true);

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiemFtYW5zaGFoZWQiLCJhIjoiY2t3NG1ya2diNWFmNzMybW94N3F5MHR0bSJ9.svNKuuQGdPXTiefkv1ZG8Q"
);

export const MapBoxScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});
