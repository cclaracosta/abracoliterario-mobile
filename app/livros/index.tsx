import React, { useReducer } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialState = { liked: false, showComments: true };

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return { ...state, liked: !state.liked };
    case "TOGGLE_COMMENTS":
      return { ...state, showComments: !state.showComments };
    default:
      return state;
  }
}

export default function LivroDetalhes() {
  const router = useRouter();
  const { title, image, description, pdfUrl } = useLocalSearchParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  const abrirPDF = () => {
    if (pdfUrl) {
      Linking.openURL(pdfUrl);
    } else {
      alert("PDF não disponível para este livro.");
    }
  };

  const comments = [
    { 
        id: "1", 
        user: "@arigrande", 
        text: "não esperava por esse final 😭😱", 
        avatar: "https://i.pravatar.cc/150?img=47" 
    },
    { 
        id: "2", 
        user: "@leitora_lu", 
        text: "amei cada página ❤️", 
        avatar: "https://i.pravatar.cc/150?img=34" 
    },
    { 
        id: "3", 
        user: "@livrosdavida", 
        text: "esse livro mudou minha forma de pensar!", 
        avatar: "https://i.pravatar.cc/150?img=20" 
    },
    { 
        id: "4", 
        user: "@Neto Santos", 
        text: "combinação perfeita para quem amar historia.", 
        avatar: "https://i.pravatar.cc/150?img=12" 
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={26} color="#38282A" />
      </TouchableOpacity>

      <View style={styles.bookCard}>
        <Image source={{ uri: image }} style={styles.bookImage} />
        <View style={styles.titleRow}>
          <Text style={styles.bookTitle}>{title}</Text>
          <TouchableOpacity onPress={() => dispatch({ type: "TOGGLE_LIKE" })}>
            <Ionicons
              name={state.liked ? "heart" : "heart-outline"}
              size={28}
              color={state.liked ? "#E76CA1" : "#38282A"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={abrirPDF} style={styles.pdfButton}>
        <Text style={styles.pdfButtonText}>Livro em PDF</Text>
        <Ionicons name="link-outline" size={18} color="#38282A" style={{ marginLeft: 4 }} />
      </TouchableOpacity>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>

      <View style={styles.commentHeader}>
        <TouchableOpacity
          onPress={() => dispatch({ type: "TOGGLE_COMMENTS" })}
          style={styles.commentToggle}
        >
          <Text style={styles.commentTitle}>Comentários</Text>
          <Ionicons
            name={state.showComments ? "chevron-up" : "chevron-down"}
            size={18}
            color="#38282A"
            style={{ marginLeft: 4 }}
          />
        </TouchableOpacity>
      </View>

      {state.showComments && (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.commentCard}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.commentUser}>{item.user}</Text>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            </View>
          )}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD8ED",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  backButton: {
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  bookCard: {
    backgroundColor: "#FFAECF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  bookImage: {
    width: 180,
    height: 250,
    borderRadius: 12,
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38282A",
    textAlign: "center",
  },
  pdfButton: {
    flexDirection: "row",
    backgroundColor: "#FFD097",
    alignSelf: "center",
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  pdfButtonText: {
    color: "#38282A",
    fontWeight: "600",
  },
  descriptionBox: {
    backgroundColor: "#FFE3EE",
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#38282A",
    textAlign: "justify",
  },
  commentHeader: {
    marginBottom: 10,
  },
  commentToggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#38282A",
  },
  commentCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentUser: {
    fontWeight: "600",
    color: "#38282A",
  },
  commentText: {
    color: "#38282A",
  },
});