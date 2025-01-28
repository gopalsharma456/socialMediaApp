import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList, Text, StyleSheet, Image } from "react-native";
import { BackHandler, Alert } from "react-native";

const postData = [
  {
    id: 1,
    title: "Sunset Bliss",
    body: "Enjoying the mesmerizing hues of the sunset today. Nature is truly magical!",
    author: "Gopal Sharma",
    image:
      "https://via.placeholder.com/600x400/FF7F50/000000?text=Sunset+Bliss",
  },
  {
    id: 2,
    title: "Coffee Time",
    body: "Nothing beats the aroma of freshly brewed coffee in the morning.",
    author: "Priya Mehta",
    image: "https://via.placeholder.com/600x400/D2691E/FFFFFF?text=Coffee+Time",
  },
  {
    id: 3,
    title: "Adventure Awaits",
    body: "Hiking through the mountains was a thrilling experience. Can’t wait to do it again!",
    author: "Aman Verma",
    image:
      "https://via.placeholder.com/600x400/008080/FFFFFF?text=Adventure+Awaits",
  },
  {
    id: 4,
    title: "Pet Love",
    body: "Meet my adorable pup, Max! He’s the cutest, isn’t he?",
    author: "Simran Kaur",
    image: "https://via.placeholder.com/600x400/FFD700/000000?text=Pet+Love",
  },
  {
    id: 5,
    title: "Foodie Goals",
    body: "Feast your eyes on this delicious burger. Yummy!",
    author: "Ravi Gupta",
    image:
      "https://via.placeholder.com/600x400/DC143C/FFFFFF?text=Foodie+Goals",
  },
];

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setPosts(response.data.products);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  post: { marginBottom: 20, borderRadius: 10, overflow: "hidden", backgroundColor: "#fff", elevation: 3, },
  image: { width: "100%", height: 200 },
  title: { fontSize: 18, fontWeight: "bold", padding: 10, color: "#333" },
  body: { fontSize: 14, padding: 10, color: "#555" },
  author: { fontSize: 12, padding: 10, color: "#888", fontStyle: "italic" }
});

export default PostsScreen;
