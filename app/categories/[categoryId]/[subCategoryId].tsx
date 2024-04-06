import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";

const SubCategoryId = () => {
  const { categoryId, subCategoryId } = useLocalSearchParams();
  return (
    <View>
      <Text>SubCategoryId</Text>
      <Text>{categoryId}</Text>
      <Text>{subCategoryId}</Text>
      <Text></Text>
    </View>
  );
};

export default SubCategoryId;
