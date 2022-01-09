import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Image,
  set,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignInScreen");
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#DC143C" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/FridgeBuddyIcon.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View animation="fadeInUp" style={styles.titleContainer}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.title}>Fridge Buddy</Text>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC143C",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    right: 10,
    bottom: 60,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    alignSelf: "center",
  },
  titleContainer: {
    alignItems: "center",
    bottom: 100,
  },
});
