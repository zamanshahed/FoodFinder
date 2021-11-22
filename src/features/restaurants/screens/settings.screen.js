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
  let locationLat = 1;
  let locationLong = 2;
  if (locErr) {
    locationDisplay = locErr;
  } else if (myLocation) {
    locationDisplay = JSON.stringify(myLocation);
    locationLat = myLocation.coords.latitude;
    locationLong = myLocation.coords.longitude;
  }

  const [pin, setPin] = useState({
    latitude: locationLat,
    longitude: locationLong,
  });

  useEffect(() => {
    setPin({
      latitude: locationLat,
      longitude: locationLong,
    });
  }, [locationLat, locationLong]);

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
          latitude: {locationLat}, longitude: {locationLong}
        </Text>
      </View>
    </View>
  );
};
