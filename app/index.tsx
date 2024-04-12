import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
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
import { Link, useRouter } from "expo-router";
import { useState } from "react";

const orange = "#D98639";

const App = () => {
  const movies = getMovies();
  const router = useRouter();

  const goToSubCategoryPage = () => {
    router.push("/categories/123");
  };
  console.log("App");
  return (
    <View style={{ backgroundColor: "#1E1F27", flex: 1 }}>
      {/* <Stack.Screen options={{ title: "PORTADA", headerShown: false }} /> */}
      <StatusBar style="dark" />
      <View style={{ height: 90 }} />
      <View style={{ paddingHorizontal: 30, gap: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Link href="/state" asChild>
            <Text style={commonStyles.textBase}>state</Text>
          </Link>
          <Link href="/about" asChild>
            <Text style={commonStyles.textBase}>about</Text>
          </Link>
          <Link href="/movies/456?nombre=untdf" asChild>
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
            <Text style={commonStyles.textBase}>Category</Text>
          </Pressable>
        </View>
        <CuadradoPressable />
        <Text style={styles.sectionHeader}>Coming Soon</Text>
        <FeaturedMovieCard />
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

const FeaturedMovieCard = () => {
  const { width } = useWindowDimensions();
  console.log("FeatureImage");
  return (
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
  );
};

const CategoryList = () => {
  let categories = getCategories().map((category) => {
    return { ...category, active: false };
  });

  const [dynamicCategories, setDynamicCategories] = useState(categories);

  // function handlePressCategory(catId: number) {
  //   console.log("handlePressCategory");
  //   function handlePressInner() {
  //     const newCategories = dynamicCategories.map((c) => {
  //       return { ...c, active: c.id === catId };
  //     });
  //     setDynamicCategories(newCategories);
  //   }
  //   return handlePressInner;
  // }

  const handlePressCategory = (catId: number) => () => {
    console.log("handlePressCategory");
    const newCategories = dynamicCategories.map((c) => {
      return { ...c, active: c.id === catId };
    });
    setDynamicCategories(newCategories);
  };

  console.log("CategoryList");
  return (
    <ScrollView horizontal style={{ maxHeight: 30 }}>
      {dynamicCategories.map((category) => (
        <Pressable key={category.id} onPress={handlePressCategory(category.id)}>
          <CategoryBadge category={category} />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const CuadradoPressable = () => {
  const [activo, setActivo] = useState(false);
  console.log("CuadradoPressable");
  return (
    <Pressable onPress={() => setActivo(!activo)}>
      <View
        style={{
          backgroundColor: activo ? "red" : "blue",
          width: 30,
          height: 30,
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    color: "white",
    fontSize: 22,
  },
});

export default App;
