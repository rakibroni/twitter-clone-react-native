import React from "react";
import {
  View,
  StyleSheet,
  ListRenderItem,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import ImageGrid from "../profile/ImageGrid";

const HEADER_HEIGHT = 300;

const DATA = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + "";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <Image
            source={require("../../assets/profile-pic.png")}
            style={styles.profileImage}
          />
          <View style={styles.nameSection}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.username}>@johndoe</Text>
          </View>
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
      </View>
    </>
  );
};

const Communities: React.FC = () => {
  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="A">
        <Tabs.FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={identity}
        />
      </Tabs.Tab>
      <Tabs.Tab name="B">
        <Tabs.ScrollView>
          <ImageGrid />
          <ImageGrid />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: "100%",
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
  nameSection: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  username: {
    color: "#657786",
    fontSize: 16,
  },
  bio: {
    fontSize: 16,
    color: "#14171A",
    marginVertical: 10,
  },
  followerSection: {
    flexDirection: "row",
    marginVertical: 10,
  },
  followText: {
    marginRight: 20,
    fontSize: 16,
    color: "#657786",
  },
  followNumber: {
    fontWeight: "bold",
    color: "#14171A",
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#657786",
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  editButtonText: {
    color: "#657786",
    fontSize: 16,
  },
  profileInfo: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default Communities;
