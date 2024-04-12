import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { FC, PropsWithChildren, useState } from "react";

const State = () => {
  const [activeText, setActiveText] = useState<string>("");
  console.log(`========= Renderizando State (${activeText}) =========`);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setActiveText("UNO")}>
        <Cuadrado bg={colors["bg-red-500"]} text="UNO" active={activeText}>
          <Text>CHILDREN</Text>
          <Text>CHILDREN</Text>
        </Cuadrado>
      </Pressable>

      <Pressable onPress={() => setActiveText("DOS")}>
        <Cuadrado bg={colors["bg-green-500"]} text="DOS" active={activeText} />
      </Pressable>

      <Pressable onPress={() => setActiveText("TRES")}>
        <Cuadrado
          bg={colors["bg-violet-600"]}
          text="TRES"
          active={activeText}
        />
      </Pressable>

      <CuadradoConHijos bg={colors["bg-red-500"]} />
    </View>
  );
};

type TCuadrado = PropsWithChildren<{ bg: string; text: string }>;
const Cuadrado: FC<TCuadrado> = ({ bg, text, children }) => {
  console.log("Renderizando cuadrado", text);
  return (
    <View style={[styles.cuadrado, { backgroundColor: bg }]}>
      <Text>{text}</Text>
      {children}
    </View>
  );
};

const CuadradoConHijos: FC<{ bg: string }> = ({ bg }) => {
  console.log("Renderizando cuadrado con hijos");
  return (
    <View style={[styles.cuadradoConHijos, { backgroundColor: bg }]}>
      <Cuadrado bg={colors["bg-green-500"]} text="HIJO 1" />
      <CuadradoConHijos2 bg="yellow" />
    </View>
  );
};

const CuadradoConHijos2: FC<{ bg: string }> = ({ bg }) => {
  console.log("Renderizando cuadrado con hijos 2");
  return (
    <View style={[styles.cuadradoConHijos2, { backgroundColor: bg }]}>
      <Cuadrado bg={colors["bg-green-500"]} text="HIJO 2.1" />
      <Cuadrado bg={colors["bg-violet-600"]} text="HIJO 2.2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  cuadrado: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  cuadradoConHijos: {
    width: 320,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  cuadradoConHijos2: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
});

const colors = {
  "bg-red-500": "rgb(239, 68, 68)",
  "bg-green-500": "rgb(34 197 94)",
  "bg-violet-600": "rgb(124 58 237)",
};

export default State;
