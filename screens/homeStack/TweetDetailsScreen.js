import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";
export default function TweetDetailsScreen() {
  const router = useRoute();
  const { params } = router;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Tweet Details Screen</Text>
      <TweetContent tweet={params.tweet} />
    </SafeAreaView>
  );
}
