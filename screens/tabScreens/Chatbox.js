import React from "react";
import { Image, Text } from "react-native";
import { View, StyleSheet, ListRenderItem } from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";

const HEADER_HEIGHT = 250;

const DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const identity = (v: unknown): string => v + "";

const Header = () => {
  return (
    <View
      style={{ padding: 16, alignItems: "center", backgroundColor: "white" }}
    >
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
};

const Example: React.FC = () => {
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
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
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
});

export default Example;
