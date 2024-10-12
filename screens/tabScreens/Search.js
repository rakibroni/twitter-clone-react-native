import { SafeAreaView, Text, Button } from "react-native";

function Search({ navigation }) {
  return (
    <SafeAreaView>
      <Text>This is Search page</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Feed")} />
    </SafeAreaView>
  );
}

export default Search;
