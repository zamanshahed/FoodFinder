import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useState } from "react/cjs/react.development";
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
  const [pin, setPin] = useState({
    latitude: 23.762906,
    longitude: 90.3786772,
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
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
