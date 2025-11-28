import React, { useReducer } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, FlatList, useWindowDimensions } from "react-native";
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
  const params = useLocalSearchParams();

  const { width } = useWindowDimensions();

  const title = params?.title ?? "Título não disponível";
  const image = params?.image ?? "https://via.placeholder.com/200x280.png?text=Sem+imagem";
  const description = params?.description ?? "Descrição não disponível.";
  const pdfUrl = params?.pdfUrl ?? "";

  const [state, dispatch] = useReducer(reducer, initialState);

  const isSmall = width < 360;
  const isLarge = width > 500;

  const dynamic = {
    bookImage: {
      width: width * 0.55,
      height: width * 0.75,
    },
    bookTitle: {
      fontSize: isLarge ? 26 : isSmall ? 16 : 20,
    },
    descriptionText: {
      fontSize: isLarge ? 18 : isSmall ? 13 : 15,
    },
    commentText: {
      fontSize: isLarge ? 17 : 14,
    },
  };

  const comments = [
    { id: "1", user: "@arigrande", text: "não esperava por esse final 😭😱", avatar: "https://i.pravatar.cc/150?img=47" },
    { id: "2", user: "@leitora_lu", text: "amei cada página ❤️", avatar: "https://i.pravatar.cc/150?img=34" },
    { id: "3", user: "@livrosdavida", text: "esse livro mudou minha forma de pensar!", avatar: "https://i.pravatar.cc/150?img=20" },
    { id: "4", user: "@Neto Santos", text: "combinação perfeita para quem amar historia.", avatar: "https://i.pravatar.cc/150?img=12" },
  ];

  const abrirPDF = () => {
    if (!pdfUrl) return alert("PDF não disponível para este livro.");
    Linking.openURL(pdfUrl);
  };

  const renderHeader = () => (
    <View>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="#38282A" />
      </TouchableOpacity>

      <View style={styles.bookCard}>
        <Image source={{ uri: image }} style={[styles.bookImage, dynamic.bookImage]} />

        <View style={styles.titleRow}>
          <Text style={[styles.bookTitle, dynamic.bookTitle]}>{title}</Text>

          <TouchableOpacity onPress={() => dispatch({ type: "TOGGLE_LIKE" })}>
            <Ionicons
              name={state.liked ? "heart" : "heart-outline"}
              size={isLarge ? 34 : 28}
              color={state.liked ? "#E76CA1" : "#38282A"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={[styles.descriptionText, dynamic.descriptionText]}>{description}</Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 18 }}>
        <TouchableOpacity onPress={abrirPDF} style={styles.pdfButton}>
          <Text style={styles.pdfButtonText}>Livro em PDF</Text>
          <Ionicons name="link-outline" size={20} color="#38282A" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.commentHeader}>
        <TouchableOpacity
          onPress={() => dispatch({ type: "TOGGLE_COMMENTS" })}
          style={styles.commentToggle}
        >
          <Text style={styles.commentTitle}>Comentários</Text>
          <Ionicons
            name={state.showComments ? "chevron-up" : "chevron-down"}
            size={20}
            color="#38282A"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={state.showComments ? comments : []}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.container}
      removeClippedSubviews={true}
      renderItem={({ item }) => (
        <View style={styles.commentCard}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />

          <View>
            <Text style={styles.commentUser}>{item.user}</Text>
            <Text style={[styles.commentText, dynamic.commentText]}>{item.text}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD8ED",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
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
    marginTop: 200,
  },
  bookImage: {
    borderRadius: 12,
    marginBottom: 12,
    marginTop: -200,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },

  bookTitle: {
    fontWeight: "bold",
    color: "#38282A",
    textAlign: "center",
    maxWidth: "80%",
  },

  descriptionBox: {
    backgroundColor: "#FFE3EE",
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
  },
  descriptionText: {
    lineHeight: 22,
    color: "#38282A",
    textAlign: "justify",
  },

  pdfButton: {
    flexDirection: "row",
    backgroundColor: "#FFD097",
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  pdfButtonText: {
    color: "#38282A",
    fontWeight: "600",
    fontSize: 15,
  },

  commentHeader: {
    marginTop: 18,
    marginBottom: 8,
  },
  commentToggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#38282A",
  },

  commentCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
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
