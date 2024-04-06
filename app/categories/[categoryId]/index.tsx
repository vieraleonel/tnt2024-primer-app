import { View, Text } from "react-native";
import React from "react";
import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router";

const CategoryIndex = () => {
  const { categoryId } = useLocalSearchParams();
  return (
    <View>
      <Text>CategoryIndex</Text>
      <Text>{categoryId}</Text>
      <Link href="/categories/123/456">subCategory</Link>
    </View>
  );
};

export default CategoryIndex;
