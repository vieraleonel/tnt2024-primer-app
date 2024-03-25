import { Image, ImageSource } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles } from "@/src/theme/common";

interface MovieCardProps {
  title: string;
  image:
    | string
    | number
    | ImageSource
    | ImageSource[]
    | string[]
    | null
    | undefined;
}
export const MovieCard = ({ title, image }: MovieCardProps) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: 150,
      }}
    >
      <Image source={image} style={styles.movieCard} />
      <Text style={commonStyles.textBase}>{title}</Text>
      <View style={{ flexDirection: "row", gap: 10, width: 150 }}>
        <View style={styles.movieCardBadge}>
          <Text style={styles.movieCardBadgeText}>13+</Text>
        </View>
        <View style={styles.movieCardBadge}>
          <Text style={styles.movieCardBadgeText}>Action</Text>
        </View>
        <View style={styles.movieCardBadge}>
          <Text style={styles.movieCardBadgeText}>IMAX</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    height: 200,
    width: 150,
  },
  movieCardBadge: {
    backgroundColor: "#484747",
    padding: 5,
    borderRadius: 5,
  },
  movieCardBadgeText: {
    color: "white",
    borderRadius: 5,
  },
});
