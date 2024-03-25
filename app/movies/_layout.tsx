import { Slot, Stack } from "expo-router";
import { View, Text } from "react-native";

const MoviesLayout = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ height: 100, backgroundColor: "yellow" }} />
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
      <View style={{ height: 100, backgroundColor: "yellow" }} />
    </View>
  );
};

export default MoviesLayout;
