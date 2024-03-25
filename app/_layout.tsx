import { Stack } from "expo-router";
import { View, Text } from "react-native";

const AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(institutional)/about"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default AppLayout;
