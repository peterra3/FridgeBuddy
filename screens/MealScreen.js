import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import ItemSearchBarScreen from "./ItemSearchBarScreen";

const MealsScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("ItemSearchBarScreen")}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
