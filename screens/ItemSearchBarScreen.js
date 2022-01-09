import React, { useState } from "react";
import http from "../components/http";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

const ItemSearchBarScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [page, setPage] = useState(0);

  const onEndReached = () => {
    setPage(page + 1);
  };
  const onChangeSearch = (query) => setSearchQuery(query);

  const getResults = (query) => {
    const results = http
      .get("/foods/search", {
        params: {
          expression: query,
          page: page,
        },
      })
      .then((res) => {
        if (res.data.foods.food) {
          setResults(results.concat(res.data.foods.food));
        }
      });
  };

  const renderItem = ({ item, index }) => {
    let lizard = item.food_name;
    return <Text>{lizard}</Text>;
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={getResults}
      />
      <FlatList
        data={
          //the array to render

          results
        }
        renderItem={
          //each item from the array will be rendered here

          renderItem
        }
        //keyExtractor={
        // Extract keys for each item in the array
        //}

        onEndReachedThreashold={0.75}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default ItemSearchBarScreen;
