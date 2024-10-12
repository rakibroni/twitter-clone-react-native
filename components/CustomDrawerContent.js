// CustomDrawerContent.js
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/profile-pic.png")} // Replace with your user's profile image
          style={styles.profileImage}
        />
        <Text style={styles.username}>Rakib Roni</Text>
        <Text style={styles.bio}>@rakibroni</Text>
        <Text style={styles.bio}>499 Following 1,773 Follower</Text>
      </View>
      <View style={styles.divider} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#E1E1E1",
    marginVertical: 10,
  },
});

export default CustomDrawerContent;
