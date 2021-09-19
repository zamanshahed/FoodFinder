import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [uuid, setUuid] = useState("0");
  return (
    <View style={styles.container}>
      {uuid === "2" && (
        <TouchableOpacity
          onPress={() => {
            setUuid("0");
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Booted on to Main Thread: tap to turn off!
          </Text>
        </TouchableOpacity>
      )}

      {uuid === "1" && (
        <TouchableOpacity
          onPress={() => {
            setUuid("2");
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Boot success: tap to open Main Thread !
          </Text>
        </TouchableOpacity>
      )}

      {uuid === "0" && (
        <TouchableOpacity
          onPress={() => {
            setUuid("1");
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Subject turned off: tap to boot again !
          </Text>
        </TouchableOpacity>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
