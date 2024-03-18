import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Contants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const orange = "#D98639";
const categories = [
  "Action",
  "Comedy",
  "Romance",
  "Thriller",
  "Fantasy",
  "Psi-Fi",
  "Drama",
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
        <Image
          source={require("@/assets/images/batman.png")}
          style={{
            width: width - 60,
            height: (width - 60) / 1.6,
            resizeMode: "cover",
            borderRadius: 10,
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
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
        </Image>
      </View>
      <View style={{ height: 20 }} />
      <ScrollView horizontal style={{ maxHeight: 30 }}>
        {categories.map((category, index) => (
          <View
            style={
              index === 0 ? styles.categoryActive : styles.categoryInactive
            }
          >
            <Text
              style={
                index === 0
                  ? styles.categoryActiveText
                  : styles.categoryInactiveText
              }
            >
              {category}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ height: 20 }} />
      <Text style={[styles.sectionHeader, { paddingHorizontal: 30 }]}>
        Now Showing
      </Text>
      <ScrollView horizontal style={{ maxHeight: 300 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            width: 150,
          }}
        >
          <Image
            source={require("@/assets/images/eternals.png")}
            style={styles.movieCard}
          />
          <Text style={styles.textBase}>Eternals</Text>
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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            width: 200,
          }}
        >
          <Image
            source={require("@/assets/images/spidey.png")}
            style={styles.movieCard}
          />
          <Text style={styles.textBase}>Spider-Man: No Way Home</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
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
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        >
          <Image
            source={require("@/assets/images/matrix.png")}
            style={styles.movieCard}
          />
          <Text style={styles.textBase}>Matrix</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
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
      </ScrollView>
    </View>
  );
};

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
  categoryActiveText: {
    color: "white",
    fontSize: 15,
  },
  categoryInactive: {
    padding: 5,
    marginHorizontal: 5,
  },
  categoryInactiveText: {
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
