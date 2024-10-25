import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const HEADER_MAX_HEIGHT = 300; // Initial height of header
const HEADER_MIN_HEIGHT = 60; // Height after scroll
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;
const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
      HEADER_MIN_HEIGHT + 5,
    ],
    extrapolate: "clamp",
  });

  const headerZIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Animated Header */}
      <Animated.View
        style={[styles.header, { height: headerHeight, zIndex: headerZIndex }]}
      >
        <Animated.Image
          source={{ uri: "https://your-image-url.com" }}
          style={[styles.headerBackground, { height: HEADER_MAX_HEIGHT }]}
          resizeMode="cover"
        />
      </Animated.View>

      {/* Profile Image */}
      <Animated.View
        style={[
          styles.profileImageContainer,
          {
            height: profileImageHeight,
            width: profileImageHeight,
            marginTop: profileImageMarginTop,
          },
        ]}
      >
        <Image
          source={{ uri: "https://your-profile-image-url.com" }}
          style={styles.profileImage}
        />
      </Animated.View>

      {/* Sticky Header */}
      <View style={styles.stickyHeaderContainer}>
        <Text style={styles.username}>Username</Text>
      </View>

      {/* Content */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {/* Content Tabs */}
        <View style={styles.tabContainer}>
          <Text style={styles.tabText}>Posts</Text>
          <Text style={styles.tabText}>About</Text>
          <Text style={styles.tabText}>Friends</Text>
        </View>

        {/* Feed */}
        <FlatList
          data={Array.from({ length: 20 }, (_, i) => `Post ${i + 1}`)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text style={styles.postText}>{item}</Text>
            </View>
          )}
        />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    backgroundColor: "#FFF",
  },
  headerBackground: {
    width: "100%",
  },
  profileImageContainer: {
    position: "absolute",
    left: 20,
    borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
    overflow: "hidden",
  },
  profileImage: {
    flex: 1,
    width: null,
    height: null,
  },
  stickyHeaderContainer: {
    position: "absolute",
    top: HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
    left: 0,
    right: 0,
    height: HEADER_MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFF",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  postContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  postText: {
    fontSize: 16,
  },
});
