import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  FlatList,
} from "react-native";
import Contants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ImageSource } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";

type Category = {
  id: number;
  active: boolean;
  name: string;
};
interface Movie {
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

const orange = "#D98639";
const categories: Category[] = [
  { id: 1, active: true, name: "Action" },
  { id: 2, active: false, name: "Comedy" },
  { id: 3, active: false, name: "Romance" },
  { id: 4, active: false, name: "Thriller" },
  { id: 5, active: false, name: "Fantasy" },
  { id: 6, active: false, name: "Psi-Fi" },
  { id: 7, active: false, name: "Drama" },
];
const movies: Movie[] = [
  {
    title: "Eternals",
    image: require("@/assets/images/eternals.png"),
  },
  {
    title: "Spider-Man: No Way Home",
    image: require("@/assets/images/spidey.png"),
  },
  {
    title: "Matrix",
    image: require("@/assets/images/matrix.png"),
  },
];

const App = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ backgroundColor: "#1E1F27", flex: 1 }}>
      <StatusBar style="light" />
      <View style={{ height: Contants.statusBarHeight + 10 }} />
      <View style={{ paddingHorizontal: 30, gap: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={styles.textBase}>All Movies</Text>
          <Text style={styles.textBase}>For Kids</Text>
          <View>
            <View
              style={{
                position: "absolute",
                height: 15,
                width: 15,
                right: -7,
                top: -12,
                borderRadius: 50,
                backgroundColor: "#FC1E1E",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.textBase, { fontSize: 10 }]}>2</Text>
            </View>
            <Text style={styles.textBase}>My Tickets</Text>
          </View>
        </View>
        <Text style={styles.sectionHeader}>Coming Soon</Text>
        <ImageBackground
          source={require("@/assets/images/batman.png")}
          style={{
            width: width - 60,
            height: (width - 60) / 1.6,
            borderRadius: 10,
            justifyContent: "space-between",
            padding: 15,
          }}
          contentFit="cover"
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.textBase}>The Batman</Text>
            <AntDesign name="sharealt" size={24} color="white" />
          </View>

          <View
            style={{
              width: 34,
              height: 34,
              backgroundColor: orange,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              paddingLeft: 4,
              alignSelf: "center",
            }}
          >
            <FontAwesome name="play" size={20} color="white" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 5,
            }}
          >
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={24}
              color="white"
            />
            <Text style={styles.textBase}>Tickets Available</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ height: 20 }} />
      <ScrollView horizontal style={{ maxHeight: 30 }}>
        {categories.map((category) => (
          <CategoryBadge key={category.id} category={category} />
        ))}
      </ScrollView>
      <View style={{ height: 20 }} />
      <Text style={[styles.sectionHeader, { paddingHorizontal: 30 }]}>
        Now Showing
      </Text>
      <FlatList
        style={{ maxHeight: 300 }}
        horizontal
        data={movies}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <MovieCard title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

type CategoryBadgeProps = { category: Category };
const CategoryBadge: FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <View
      key={category.id}
      style={category.active ? styles.categoryActive : styles.categoryInactive}
    >
      <Text style={styles.categoryText}>{category.name}</Text>
    </View>
  );
};

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
const MovieCard = ({ title, image }: MovieCardProps) => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      width: 150,
    }}
  >
    <Image source={image} style={styles.movieCard} />
    <Text style={styles.textBase}>{title}</Text>
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
const styles = StyleSheet.create({
  textBase: {
    color: "white",
    fontSize: 15,
  },
  sectionHeader: {
    color: "white",
    fontSize: 22,
  },
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

export default App;
