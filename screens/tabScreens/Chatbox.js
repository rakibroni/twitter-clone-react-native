import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Chatbox = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Heights for header and footer
  const HEADER_HEIGHT = 60;
  const FOOTER_HEIGHT = 60;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0], // Transparent header
    extrapolate: 'clamp',
  });

  const footerOpacity = scrollY.interpolate({
    inputRange: [0, FOOTER_HEIGHT],
    outputRange: [1, 0], // Transparent footer
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <Animated.View
        style={[
          styles.header,
          { height: HEADER_HEIGHT, opacity: headerOpacity },
        ]}
      >
        <Text style={styles.headerText}>Top Menu</Text>
      </Animated.View>

      {/* Content */}
      <Animated.FlatList
        data={Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT,
          paddingBottom: FOOTER_HEIGHT,
        }}
        scrollEventThrottle={16}
      />

      {/* Bottom Footer */}
      <Animated.View
        style={[
          styles.footer,
          { height: FOOTER_HEIGHT, opacity: footerOpacity },
        ]}
      >
        <Text style={styles.footerText}>Bottom Menu</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Chatbox;
