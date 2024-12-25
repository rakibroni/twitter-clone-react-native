import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import ImageGrid from "../profile/ImageGrid";

const Communities = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Posts" },
    { key: "second", title: "second" },
  ]);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [200, 0],
    extrapolate: "clamp",
  });

  // Render tab content with an Animated FlatList
  const renderTabContent = (data) => (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      )}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: false,
        }
      )}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return (
          <View className="bg-white">
            <ImageGrid scrollY={scrollY} />
          </View>
        );
      case "second":
        return renderTabContent(
          [...Array(20)].map((_, index) => ({
            id: index,
            title: `Tagged2 ${index + 1}`,
          }))
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Animated Header */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Image
          source={require("../../assets/cover.jpeg")}
          style={styles.coverPhoto}
        />
        <Text style={styles.headerText}>Profile Header</Text>
      </Animated.View>

      {/* TabView */}
      <TabView
        initialLayout={{ width: Dimensions.get("window").width }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            labelStyle={styles.label}
            tabStyle={styles.tab} // Add tab styles here
            style={{ backgroundColor: "#f8f8f8" }}
            scrollEnabled={true}
          />
        )}
        onIndexChange={setIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  item: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    marginTop: 10,
  },
  label: {
    color: "black", // Color of the inactive tab label
    fontSize: 16, // Font size of the tab labels
  },
  tab: {
    // Customize tab item styles (width, padding, etc.)
    width: 100, // Set width for each tab
    alignItems: "center", // Center the label
  },
  indicator: {
    backgroundColor: "blue", // Color of the active tab indicator
    height: 1, // Height of the indicator
    width: 100, // Set a fixed width for the indicator
    left: 0,
    right: 0,
    alignSelf: "center", // Center the indicator horizontally
  },
  coverPhoto: {
    height: 120,
    width: Dimensions.get("window").width,
    resizeMode: "cover",
  },
});

export default Communities;
