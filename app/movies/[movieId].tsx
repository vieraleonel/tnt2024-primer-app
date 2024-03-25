import { View, Text } from "react-native";
import React from "react";
import { Link, Slot } from "expo-router";

const MovieId = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MovieId</Text>
      <Link href="/movies/latest">Latest</Link>
    </View>
  );
};

export default MovieId;
