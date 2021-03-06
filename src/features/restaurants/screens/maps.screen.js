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

export const MapScreen = () => {
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
  let locationLat = 23.762906;
  let locationLong = 90.3786772;
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
      {/* <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingTop: 35,
            fontSize: 18,
            color: "red",
            textAlign: "center",
            marginBottom: 134,
          }}
        >
          Location Display: {locationDisplay}
        </Text>
      </View> */}
      <MapView
        // android will show google map by default
        provider={PROVIDER_GOOGLE} // remove PROVIDER_GOOGLE import if not using Google Maps
        style={styles.map}
        region={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {/* everything that is inside map_view HERE */}
        <Marker
          coordinate={pin}
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag recorded! ", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>This is a pin msg text !</Text>
          </Callout>
        </Marker>

        <Circle center={pin} radius={300} />
      </MapView>
    </View>
  );
};
