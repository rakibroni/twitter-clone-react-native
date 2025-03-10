import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { tweets } from "../../data/tweets";
import Tweet from "../../components/Tweet"; // Ensure Tweet is wrapped in React.memo
import { useNavigation } from "@react-navigation/native";

function Following() {
  const navigation = useNavigation();
  // Function to render each tweet item
  const renderItem = ({ item }) => <Tweet tweet={item} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={tweets.slice(0, 30)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        getItemLayout={(data, index) => ({
          length: 70, // Adjust this value based on your Tweet component height
          offset: 70 * index,
          index,
        })}
        initialNumToRender={10} // Number of items to render initially
        maxToRenderPerBatch={5} // Control how many items are rendered in each batch
        removeClippedSubviews={true} // Optimize memory usage
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
});

export default Following;
