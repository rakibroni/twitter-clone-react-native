import { SafeAreaView, Text, Button, StatusBar } from "react-native";

function Chatbox({ navigation }) {
  return (
    <SafeAreaView>
      <Text>This is Chatbox page</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}

export default Chatbox;
