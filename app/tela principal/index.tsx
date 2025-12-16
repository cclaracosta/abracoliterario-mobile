import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const API_URL = "https://abraco-literario.vercel.app/api";

export default function UserProfile() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(`${API_URL}/livros`);
        setBooks(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("Erro ao buscar livros:", error);
        setErro(true);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.titulo?.toLowerCase().includes(search.toLowerCase())
    );
  }, [books, search]);

  const handleBookPress = (book) => {
    router.push({
      pathname: "/livros",
      params: {
        id: book.id,
        title: book.titulo,
        image: book.capa_url,
        description: book.sinopse,
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => router.push("/perfil")}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWU2rz5ntKtK2A2Sv21EIopsyhlXMSA8YAg&s",
          }}
          style={styles.profilePic}
        />
        <Text style={styles.greeting}>Oi, Clara!</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar livros"
        placeholderTextColor="#C194B7"
        value={search}
        onChangeText={setSearch}
      />

      {loading && (
        <ActivityIndicator size="large" color="#C194B7" style={{ marginTop: 20 }} />
      )}

      {!loading && erro && (
        <Text style={styles.errorText}>
          Erro ao conectar à API
        </Text>
      )}

      {!loading && !erro && (
        <FlatList
          data={filteredBooks}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.booksList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.bookItem}
              onPress={() => handleBookPress(item)}
            >
              <Image
                source={{ uri: item.capa_url }}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>{item.titulo}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD8ED",
    paddingHorizontal: wp("4%"),
    paddingTop: hp("4%"),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("2%"),
  },

  profilePic: {
    width: wp("14%"),
    height: wp("14%"),
    borderRadius: wp("7%"),
    marginRight: wp("3%"),
  },

  greeting: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#38282A",
  },

  searchInput: {
    height: hp("6%"),
    borderRadius: wp("2%"),
    borderWidth: 2,
    borderColor: "#FFBEE3",
    backgroundColor: "#fff",
    paddingHorizontal: wp("3%"),
    fontSize: RFValue(14),
    marginBottom: hp("2.5%"),
  },

  booksList: {
    paddingBottom: hp("3%"),
  },

  bookItem: {
    width: wp("42%"),
    alignItems: "center",
    marginBottom: hp("3%"),
    marginHorizontal: wp("2%"),
  },

  bookCover: {
    width: wp("33%"),
    height: hp("20%"),
    borderRadius: wp("2%"),
    marginBottom: hp("1%"),
  },

  bookTitle: {
    fontSize: RFValue(14),
    color: "#38282A",
    textAlign: "center",
  },

  errorText: {
    textAlign: "center",
    color: "red",
    marginTop: 20,
    fontSize: RFValue(14),
  },
});
