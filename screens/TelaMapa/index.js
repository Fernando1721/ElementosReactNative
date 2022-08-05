import { mapa } from "./css/Styles.js";
import * as React from "react";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import { StyleSheet, Text, View, } from "react-native";

export default function App() {
  return (
    <View style={mapa.container}>
      <MapView style={mapa.map}
        
     initialRegion={{
          latitude: -23.575606851435392,
          longitude: -46.53610290222348,
          latitudeDelta: 0.0021,
          longitudeDelta: 0.0021,
        }}
        >
        <Marker
          title="Casa do pai"
          description="Casinha"
          coordinate={{
            latitude: -23.575606851435392,
            longitude: -46.53610290222348,
          }}
          
        />
      </MapView>
    </View>
  );
}
