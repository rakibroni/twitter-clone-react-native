import {
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import ProfileTabNavigation from "./ProfileTabNavigation";

const headerSectionHeight = 370;

const headerTabs = [
  {
    text: "Tab 1",
  },
  {
    text: "Tab 2",
  },
  {
    text: "Tab 3",
  },
];

const renderHeaderTabs = () => (
  <View style={styles.headerTabView}>
    <ScrollView
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <Text>tab menu</Text>
    </ScrollView>
  </View>
);

const BodySection = () => {
  const data = new Array(100).fill(0);
  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default function Search() {
  const scrollY = new Animated.Value(0);
  const stickyTop = scrollY.interpolate({
    outputRange: [-150, -70],
    inputRange: [headerSectionHeight, headerSectionHeight + 150],
    extrapolate: "clamp",
  });
  const stickyOpacity = scrollY.interpolate({
    outputRange: [0, 1],
    inputRange: [headerSectionHeight, headerSectionHeight + 10],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        <View style={styles.headerSection}>
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
          {renderHeaderTabs()}
        </View>

        <BodySection />
      </ScrollView>
      <Animated.View
        style={[
          styles.animatedView,
          {
            top: stickyTop,
            opacity: stickyOpacity,
          },
        ]}
      >
        {renderHeaderTabs()}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedView: {
    height: 150,
    // paddingBottom: 16,
    backgroundColor: "#F4EEE0",
    justifyContent: "flex-end",
    position: "absolute",
    top: -150, // -150 -> 0
    left: 0,
    right: 0,
    opacity: 1,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 16,
        shadowOffset: {
          width: 4,
          height: 3,
        },
      },
    }),
  },
  headerSection: {
    height: headerSectionHeight,
    justifyContent: "flex-end",
    backgroundColor: "#F4EEE0",
  },
  headerTabView: {
    paddingVertical: 24,
    backgroundColor: "#F4EEE0",
  },
  tab: {
    backgroundColor: "#6D5D6E",
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    paddingVertical: 5,
  },
  tabText: { color: "#fff" },
  item: {
    backgroundColor: "#4F4557",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  itemText: { textAlign: "center" },
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
});
