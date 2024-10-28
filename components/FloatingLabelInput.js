import React, { useState, useRef } from "react";
import { TextInput, View, Animated, Text } from "react-native";
import { useTailwind } from "nativewind";

const FloatingLabelInput = ({ label, value, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(labelAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(labelAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const labelStyle = {
    transform: [
      {
        translateY: labelAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [20, -8],
        }),
      },
    ],

    color: isFocused ? "#3b82f6" : "#6b7280",
  };

  return (
    <View className="relative z-0 pt-4 mx-4 mt-10">
      <Animated.Text
        style={labelStyle}
        className="absolute left-1 text-sm text-gray-500"
      >
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
        className={`block w-full py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 appearance-none ${
          isFocused ? "border-blue-600" : "border-gray-300"
        } focus:outline-none`}
      />
    </View>
  );
};

export default FloatingLabelInput;
