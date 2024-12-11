import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

// import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Calculator from "@/components/Calculator";

export default function HomeScreen() {
  return (
    <ScrollView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tip Calculator App</ThemedText>
      </ThemedView>

      <Calculator />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
