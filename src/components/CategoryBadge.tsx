import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Category } from "@/src/service/category.service";

type CategoryBadgeProps = { category: Category };
export const CategoryBadge: FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <View
      key={category.id}
      style={category.active ? styles.categoryActive : styles.categoryInactive}
    >
      <Text style={styles.categoryText}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryActive: {
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  categoryInactive: {
    padding: 5,
    marginHorizontal: 5,
  },
  categoryText: {
    color: "white",
    fontSize: 15,
  },
});
