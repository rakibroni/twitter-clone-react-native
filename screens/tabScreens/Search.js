import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text, SectionList, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const { width } = Dimensions.get("window");

// Dummy data for each tab
const posts = Array.from({ length: 20 }, (_, i) => `Post ${i + 1}`);
const tagged = Array.from({ length: 20 }, (_, i) => `Tagged ${i + 1}`);

const ProfileHeader = () => (
  <View style={{ padding: 16, alignItems: "center", backgroundColor: "white" }}>
    <Image
      source={{ uri: "https://dummyimage.com/16:9x1080" }} // Dummy image URL (use your image URL here)
      style={{
        width: 300, // Width of the image
        height: 70, // Height of the image

        marginBottom: 10, // Space between image and text
      }}
    />
    <Image
      source={{ uri: "https://dummyimage.com/16:9x1080" }} // Dummy image URL (use your image URL here)
      style={{
        width: 300, // Width of the image
        height: 70, // Height of the image

        marginBottom: 10, // Space between image and text
      }}
    />
    <Text style={{ fontSize: 24, fontWeight: "bold" }}>User Name</Text>
    <Text>Bio and other profile details</Text>
    <Text style={{ fontSize: 24, fontWeight: "bold" }}>User Name</Text>
    <Text>Bio and other profile details</Text>
    <Text style={{ fontSize: 24, fontWeight: "bold" }}>User Name</Text>
    <Text>Bio and other profile details</Text>
    <Text style={{ fontSize: 24, fontWeight: "bold" }}>User Name</Text>
    <Text>Bio and other profile details</Text>
  </View>
);

const PostList = ({ data }) => (
  <View>
    {data.map((item, index) => (
      <View
        key={index}
        style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ddd" }}
      >
        <Text>{item}</Text>
      </View>
    ))}
  </View>
);

const UserProfile = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "posts", title: "Posts" },
    { key: "tagged", title: "Tagged" },
  ]);

  const renderScene = SceneMap({
    posts: () => <PostList data={posts} />,
    tagged: () => <PostList data={tagged} />,
  });

  return (
    <SectionList
      sections={[
        { title: "ProfileHeader", data: [{}] }, // Profile header section
        { title: "Content", data: index === 0 ? posts : tagged }, // Content section based on selected tab
      ]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, section }) => {
        // Render posts or tagged items under "Content" section
        if (section.title === "Content") {
          return (
            <View
              style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ddd" }}
            >
              <Text>{item}</Text>
            </View>
          );
        }
        return null;
      }}
      renderSectionHeader={({ section }) => {
        if (section.title === "ProfileHeader") {
          // Render Profile header at the top
          return <ProfileHeader />;
        } else if (section.title === "Content") {
          // Render TabView as sticky header in the "Content" section
          return (
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width }}
              renderTabBar={(props) => (
                <TabBar
                  {...props}
                  indicatorStyle={{ backgroundColor: "blue" }}
                  style={{ backgroundColor: "white" }}
                  labelStyle={{ color: "black" }}
                />
              )}
            />
          );
        }
      }}
      stickySectionHeadersEnabled={true} // Enable sticky headers for sections
    />
  );
};

export default UserProfile;
