import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Tweets from "./Tweets";
import Medias from "./Medias";
import Likes from "./Likes";

const initialLayout = { width: Dimensions.get("window").width };

const TwitterProfile = () => {
  const scrollY = new Animated.Value(0);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "tweets", title: "Tweets" },
    { key: "medias", title: "Media" },
    { key: "likes", title: "Likes" },
  ]);

  // Render the static header
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        source={require("../../assets/profile-pic.png")}
        style={styles.coverPhoto}
      />
      <Text style={styles.username}>Username</Text>
      <Text style={styles.handle}>@handle</Text>
      <Text style={styles.bio}>User bio goes here.</Text>
      <View style={styles.followInfo}>
        <Text>Following: 200</Text>
        <Text>Followers: 500</Text>
      </View>
    </View>
  );

  // Define the content for each tab
  const renderScene = SceneMap({
    tweets: () => <Tweets type="tweets" />,
    medias: () => <Medias type="medias" />,
    likes: () => <Likes type="likes" />,
  });

  return (
    <View style={styles.container}>
      {renderHeader()}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => <TabBar {...props} style={styles.tabBar} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  coverPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  handle: {
    color: "gray",
  },
  bio: {
    marginVertical: 10,
  },
  followInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabBar: {
    backgroundColor: "black",
  },
});

export default TwitterProfile;
