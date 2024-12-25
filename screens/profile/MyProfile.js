import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import ImageGrid from "../profile/ImageGrid"; // Assuming this component exists

const MyProfile = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "tweets", title: "Tweets" },
    { key: "likes", title: "Likes" },
  ]);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [300, 0],
    extrapolate: "clamp",
  });

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
      case "tweets":
        return (
          <View style={styles.scene}>
            <ImageGrid scrollY={scrollY} />
          </View>
        );
      case "likes":
        return renderTabContent(
          [...Array(20)].map((_, index) => ({
            id: index,
            title: `Liked Tweet ${index + 1}`,
          }))
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Animated Header */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.profileInfo}>
          <Image
            source={require("../../assets/cover.jpeg")}
            style={styles.coverPhoto}
          />
          <Image
            source={require("../../assets/profile-pic.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.handle}>@johndoe</Text>
          <Text style={styles.bio}>
            Developer | Tech Enthusiast | Music Lover
          </Text>
          <View style={styles.followerSection}>
            <Text style={styles.followText}>
              <Text style={styles.followNumber}>120</Text> Following
            </Text>
            <Text style={styles.followText}>
              <Text style={styles.followNumber}>450</Text> Followers
            </Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* TabView for Tweets and Likes */}
      <TabView
        initialLayout={{ width: Dimensions.get("window").width }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            labelStyle={styles.label}
            tabStyle={styles.tab}
            style={styles.tabBar}
            scrollEnabled={true}
          />
        )}
        onIndexChange={setIndex}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    overflow: "hidden",
    position: "relative", // Allows positioning of child elements
  },
  coverPhoto: {
    position: "absolute",
    height: 90,
    width: "100%",
    resizeMode: "cover",
  },
  profileInfo: {
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
    marginTop: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  handle: {
    fontSize: 16,
  },
  bio: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 5,
  },
  followerSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  followText: {
    fontSize: 15,
  },
  followNumber: {
    fontWeight: "bold",
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
  },
  editButtonText: {
    fontSize: 15,
  },
  tabBar: {
    backgroundColor: "#ffffff",
  },
  label: {
    color: "#1DA1F2",
    fontSize: 16,
  },
  tab: {
    paddingVertical: 8,
    minWidth: 100,
    alignItems: "center",
  },
  indicator: {
    backgroundColor: "#1DA1F2",
    height: 2,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  scene: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default MyProfile;
