import PostListItem from "@/src/components/PostListItem";
import { FlatList } from "react-native";

import posts from "../../../assets/data/posts.json";
export default function TabOneScreen() {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
