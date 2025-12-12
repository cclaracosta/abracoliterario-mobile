import { useRouter } from 'expo-router';
import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import axios from 'axios';

const UserProfile = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  // ⬇️ BUSCA REAL NA API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://http://192.168.0.50:3000/livros"); 
        setBooks(response.data);
      } catch (error) {
        console.log(error);
        setErro(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // ⬇️ FILTRO DE BUSCA
  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.titulo?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, books]);

  const handleBookPress = (book) => {
    router.push({
      pathname: '/livros',
      params: {
        id: book.id,
        title: book.titulo,
        image: book.capa,
        description: book.descricao,
        pdfUrl: book.pdf,
      },
    });
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => router.push('/perfil')}
        testID="botao-perfil"
      >
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWU2rz5ntKtK2A2Sv21EIopsyhlXMSA8YAg&s',
          }}
          style={styles.profilePic}
        />
        <Text style={styles.greeting}>Oi, Clara!</Text>
      </TouchableOpacity>

      {/* Search */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar livros"
        placeholderTextColor="#C194B7"
        value={search}
        onChangeText={setSearch}
        testID="campo-busca"
      />

      {/* LOADING */}
      {loading && (
        <ActivityIndicator size="large" color="#C194B7" style={{ marginTop: 20 }} />
      )}

      {/* ERRO */}
      {erro && (
        <Text style={{ textAlign: 'center', color: 'red', marginTop: 20 }}>
          Erro ao conectar à API
        </Text>
      )}

      {/* LISTA */}
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
              testID={`book-${item.id}`}
            >
              <Image
                source={{ uri: item.capa }}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>{item.titulo}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFD8ED',
    paddingHorizontal: wp('4%'),
    paddingTop: hp('4%'),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  profilePic: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    marginRight: wp('3%'),
  },

  greeting: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#38282A',
  },

  searchInput: {
    height: hp('6%'),
    borderRadius: wp('2%'),
    borderWidth: 2,
    borderColor: '#FFBEE3',
    backgroundColor: '#fff',
    paddingHorizontal: wp('3%'),
    fontSize: RFValue(14),
    marginBottom: hp('2.5%'),
  },

  booksList: {
    paddingBottom: hp('2%'),
  },

  bookItem: {
    width: wp('42%'),
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: hp('3%'),
    marginHorizontal: wp('2%'),
  },

  bookCover: {
    width: wp('33%'),
    height: hp('20%'),
    borderRadius: wp('2%'),
    marginBottom: hp('1%'),
  },

  bookTitle: {
    fontSize: RFValue(14),
    color: '#38282A',
    textAlign: 'center',
  },
});

export default UserProfile;