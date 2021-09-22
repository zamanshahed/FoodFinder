
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,  
  SafeAreaView,  
  StatusBar
} from "react-native";
const marTop = StatusBar.currentHeight;

export default function App() {
  console.log(marTop);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: "cyan", paddingLeft: 8 }}>
          <Text
            style={{
              color: "red",
              fontSize: 20,
              backgroundColor: "cyan",
              padding: 5,
            }}
          >
            Search
          </Text>
        </View>
        <View style={{ backgroundColor: "grey", flex: 1, paddingLeft: 8 }}>
          <Text style={{ color: "#fff", fontSize: 20, padding: 5 }}>
            Booted on to Main Thread!
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: marTop,
  },
});
