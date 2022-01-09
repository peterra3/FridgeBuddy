import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Item from "../components/Item";

const FridgeScreen = () => {
  const [item, setItem] = useState();
  const [fridgeItems, setFridgeItems] = useState([]);

  const handleAddItem = () => {
    Keyboard.dismiss();
    setFridgeItems([...fridgeItems, Item]);
    setItem(null);
  };

  const completeItem = (index) => {
    let itemsCopy = [...fridgeItems];
    itemsCopy.splice(index, 1);
    setFridgeItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Items */}
        <View style={styles.ItemsWrapper}>
          <View style={styles.items}>
            {/* This is where the Items will go! */}
            <Item text={"Fish"} />

            <Item text={"Beef"} />
            <Item text={"Lizard"} />
          </View>
        </View>
      </ScrollView>

      {/* Write a Item */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeItemWrapper}
      ></KeyboardAvoidingView>
    </View>
  );
};

export default FridgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  ItemsWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 0,
  },
  writeItemWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
