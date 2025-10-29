import { useRouter } from 'expo-router';
import React, { useReducer, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, TextInput } from 'react-native';

// Tipo do livro
type Book = {
  id: string;
  title: string;
  image: string;
};

// Tipo das ações do reducer
type Action = { type: 'add'; title: string; image: string };

// Reducer
function booksReducer(state: Book[], action: Action): Book[] {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now().toString(), title: action.title, image: action.image }];
    default:
      return state;
  }
}

// Lista inicial
const initialBooks: Book[] = [
  { id: '1', title: 'Não é como nos filmes', image: 'https://images-na.ssl-images-amazon.com/images/I/51RmC3gErTL._SX346_BO1,204,203,200_.jpg' },
  { id: '2', title: 'Olhos D\'Água', image: 'https://images-na.ssl-images-amazon.com/images/I/41M+zlQwsgL._SX331_BO1,204,203,200_.jpg' },
  { id: '3', title: 'Tudo é Rio', image: 'https://images-na.ssl-images-amazon.com/images/I/41D5Ngkbp9L._SX331_BO1,204,203,200_.jpg' },
];

const BookHistoryScreen = () => {
  const router = useRouter();
  const [books, dispatch] = useReducer(booksReducer, initialBooks);

  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookImage, setNewBookImage] = useState('');

  const totalBooks = useMemo(() => books.length, [books]);

  const handleAddBook = () => {
    if (newBookTitle.trim() && newBookImage.trim()) {
      dispatch({ type: 'add', title: newBookTitle, image: newBookImage });
      setNewBookTitle('');
      setNewBookImage('');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={() => router.back()}>
        <Text style={styles.arrow}>{'<'}</Text>
      </TouchableOpacity>

      <View style={styles.pageCountContainer}>
        <Text style={styles.pageCountText}>Total de livros lidos</Text>
        <Text style={styles.pageCountNumber}>{totalBooks}</Text>
      </View>

      <View style={styles.addBookContainer}>
        <TextInput
          style={styles.input}
          placeholder="Título do livro"
          value={newBookTitle}
          onChangeText={setNewBookTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da imagem"
          value={newBookImage}
          onChangeText={setNewBookImage}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
          <Text style={styles.addButtonText}>Adicionar livro</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={books}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.booksList}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image source={{ uri: item.image }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFD8ED', paddingHorizontal: 20, paddingTop: 50 },
  goBack: { position: 'absolute', top: 28, left: 16, zIndex: 10 },
  arrow: { fontSize: 26, color: '#38282A' },
  pageCountContainer: { flexDirection: 'row', backgroundColor: '#FFB6C1', borderRadius: 18, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12, marginBottom: 16 },
  pageCountText: { fontSize: 17, color: '#38282A' },
  pageCountNumber: { fontSize: 17, fontWeight: 'bold', color: '#38282A' },
  addBookContainer: { marginBottom: 20 },
  input: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, marginBottom: 8 },
  addButton: { backgroundColor: '#FFD097', borderRadius: 18, paddingVertical: 12, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  booksList: { alignItems: 'flex-start' },
  bookItem: { flex: 1, margin: 6, maxWidth: '48%', borderRadius: 12, overflow: 'hidden' },
  bookImage: { width: '100%', height: 180, borderRadius: 12 },
  bookTitle: { textAlign: 'center', marginTop: 4, fontWeight: '600', color: '#38282A' },
});

export default BookHistoryScreen;
