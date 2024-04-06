import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
import Contants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CategoryBadge } from "@/src/components/CategoryBadge";
import { getCategories } from "@/src/service/category.service";
import { getMovies } from "@/src/service/movie.service";
import { MovieCard } from "@/src/components/MovieCard";
import { commonStyles } from "@/src/theme/common";
import { useState } from "react";

const orange = "#D98639";

const App = () => {
  const { width } = useWindowDimensions();
  const movies = getMovies();
  const router = useRouter();

  const goToSubCategoryPage = () => {
    router.push("/categories/123/456");
  };
  return (
    <View style={{ backgroundColor: "#1E1F27", flex: 1 }}>
      {/* <Stack.Screen options={{ title: "PORTADA", headerShown: false }} /> */}
      <StatusBar style="dark" />
      <View style={{ height: 90 }} />
      <View style={{ paddingHorizontal: 30, gap: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Link href="/about" asChild>
            <Text style={commonStyles.textBase}>about</Text>
          </Link>
          <Link href="/movies/456" asChild>
            <Text style={commonStyles.textBase}>Movie Show</Text>
          </Link>
          <Pressable onPress={goToSubCategoryPage}>
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
              <Text style={[commonStyles.textBase, { fontSize: 10 }]}>2</Text>
            </View>
            <Text style={commonStyles.textBase}>SubCategories</Text>
          </Pressable>
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
            <Text style={commonStyles.textBase}>The Batman</Text>
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
            <Text style={commonStyles.textBase}>Tickets Available</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ height: 20 }} />
      <CategoryList />
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

const CategoryList = () => {
  let categories = getCategories().map((category) => {
    return { ...category, active: false };
  });

  const [dynamicCategories, setDynamicCategories] = useState(categories);

  return (
    <ScrollView horizontal style={{ maxHeight: 30 }}>
      {dynamicCategories.map((category) => (
        <Pressable
          key={category.id}
          onPress={() => {
            // const newCategories = dynamicCategories.map((c) => ({
            //   ...c,
            //   active: c.id === category.id,
            // }));
            const newCategories = dynamicCategories.map((c) => {
              return { ...c, active: c.id === category.id };
            });
            setDynamicCategories(newCategories);
          }}
        >
          <CategoryBadge category={category} />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    color: "white",
    fontSize: 22,
  },
});

export default App;
