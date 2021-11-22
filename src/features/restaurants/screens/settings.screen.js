import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import * as Location from "expo-location";

// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// ...
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Settings = () => {
  const [myLocation, setMyLocation] = useState(null);
  const [locErr, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErr("Permission to access location was denied");
        return;
      }

      let locationTracked = await Location.getCurrentPositionAsync({});
      setMyLocation(locationTracked);
    })();
  }, []);

  let locationDisplay = "waiting...";
  if (locErr) {
    locationDisplay = locErr;
  } else if (myLocation) {
    locationDisplay = JSON.stringify(myLocation.coords.latitude);
  }

  const [pin, setPin] = useState({
    latitude: 23.762906,
    longitude: 90.3786772,
  });

  return (
    <View
      // style={styles.container}
      style={{ marginTop: 50, flex: 1 }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingTop: 35,
            fontSize: 23,
            color: "red",
            textAlign: "center",
            marginBottom: 134,
          }}
        >
          latitude: {myLocation.coords.latitude} ; longitude:
          {myLocation.coords.longitude}
        </Text>
      </View>
    </View>
  );
};
