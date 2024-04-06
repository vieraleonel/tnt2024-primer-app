import { View, Text } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const MovieId = () => {
  const { movieId, nombre } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`MovieId: ${movieId} ---- ${nombre}`}</Text>
      <Link href="/movies/latest">Latest</Link>
    </View>
  );
};

export default MovieId;
