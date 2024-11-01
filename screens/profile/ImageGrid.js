import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";

// Dummy data with real image URLs
const dummyImages = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1507143550189-fed454f93097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDR8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDZ8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDV8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDJ8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDR8fG5hdHVyZXxlbnwwfHx8fDE2MzAwMDEyNTk&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDl8fG5hdHVyZXxlbnwwfHx8fDE2MzAwMDEyNTk&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1507143550189-fed454f93097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDR8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDZ8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "13",
    url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDV8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "14",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "15",
    url: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDJ8fHdpbGR8ZW58MHx8fHwxNjE3MDAxNjEy&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "16",
    url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDR8fG5hdHVyZXxlbnwwfHx8fDE2MzAwMDEyNTk&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "17",
    url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDl8fG5hdHVyZXxlbnwwfHx8fDE2MzAwMDEyNTk&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "18",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "19",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "21",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "21",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "22",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "23",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "24",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "25",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNDAzMnwwfDF8c2VhcmNofDF8fGZsb3dlcnxlbnwwfHx8fDE2MzAwMDEzMzE&ixlib=rb-1.2.1&q=80&w=400",
  },
];

// Get screen width to calculate image size
const screenWidth = Dimensions.get("window").width;

const ImageGrid = ({ scrollY }) => {
  // Render each image thumbnail
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.url }} style={styles.imageThumbnail} />
      </View>
    );
  };

  return (
    <Animated.FlatList
      data={dummyImages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3} // Display 3 images per row
      scrollEventThrottle={6}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 5,
  },
  imageThumbnail: {
    width: screenWidth / 3 - 10, // Subtract margin to fit 3 images
    height: screenWidth / 3 - 10,
    resizeMode: "cover",
  },
});

export default ImageGrid;
