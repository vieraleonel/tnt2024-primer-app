import { Text, View, StyleSheet } from "react-native";
import Contants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={{ backgroundColor: "#484747", flex: 1 }}>
        <View style={{ height: Contants.statusBarHeight }} />
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
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
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  textBase: {
    color: "white",
  },
});

export default App;
