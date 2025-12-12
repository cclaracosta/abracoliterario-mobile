import { useRouter } from 'expo-router';
import React, { useReducer, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

type State = { totalBooks: number; goal: number };
type Action = { type: 'increment' } | { type: 'decrement' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, totalBooks: Math.min(state.totalBooks + 1, state.goal) };
    case 'decrement':
      return { ...state, totalBooks: Math.max(state.totalBooks - 1, 0) };
    default:
      return state;
  }
}

const UserGoalScreen = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, { totalBooks: 0, goal: 10 });

  const percentage = useMemo(
    () => Math.round((state.totalBooks / state.goal) * 100),
    [state.totalBooks, state.goal]
  );

  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWU2rz5ntKtK2A2Sv21EIopsyhlXMSA8YAg&s' }}
        style={styles.profilePic}
      />

      {/* Nome do usuário */}
      <Text style={styles.username}>@mariajoaquina</Text>

      {/* Botão para editar perfil */}
      <TouchableOpacity onPress={() => router.push('/editar-perfil')}>
        <Text style={styles.editProfile}>editar perfil</Text>
      </TouchableOpacity>

      {/* Meta de leitura */}
      <View style={styles.goalBox}>
        <Text style={styles.goalText}>Meta de leitura</Text>
        <Text style={styles.goal}>{state.totalBooks}/{state.goal} ✓ ({percentage}%)</Text>
      </View>

      {/* Botões de incrementar/decrementar */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addButton} onPress={() => dispatch({ type: 'increment' })}>
          <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.addButton, styles.decreaseButton]} onPress={() => dispatch({ type: 'decrement' })}>
          <Text style={styles.addButtonText}> - </Text>
        </TouchableOpacity>
      </View>

      {/* Menu inferior */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButtonBig} onPress={() => router.push('/historico')}>
          <Text style={styles.menuLabel}>Histórico de livros</Text>
        </TouchableOpacity>

        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuButtonSmall} onPress={() => router.push('/avaliar')}>
            <Text style={styles.menuLabel}>Avaliação de livros</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButtonSmall} onPress={() => router.push('/lista')}>
            <Text style={styles.menuLabel}>Lista de desejos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD8ED',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('15%'),
  },
  profilePic: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('12.5%'),
    marginBottom: hp('1%'),
    marginTop: hp('2%'),
    resizeMode: 'cover'
  },
  username: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#38282A',
    marginBottom: hp('0.3%'),
  },
  editProfile: {
    fontSize: RFValue(15),
    color: '#E76CA1',
    marginBottom: hp('2%'),
  },
  goalBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp('4%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1.4%'),
    alignItems: 'center',
    marginBottom: hp('4%'),
    elevation: 1,
  },
  goalText: {
    fontSize: RFValue(15),
    color: '#38282A',
    marginRight: wp('4%'),
  },
  goal: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: '#38282A',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: hp('2%'),
  },
  addButton: {
    backgroundColor: '#FFD097',
    borderRadius: wp('3%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    marginHorizontal: wp('2%'),
    alignItems: 'center',
  },
  decreaseButton: {
    backgroundColor: '#FF7F7F',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: RFValue(18),
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  menuButtonBig: {
    width: wp('80%'),
    height: hp('12%'),
    backgroundColor: '#FFD097',
    borderRadius: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2.5%'),
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuButtonSmall: {
    width: wp('38%'),
    height: hp('9%'),
    backgroundColor: '#FFD097',
    borderRadius: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
  },
  menuLabel: {
    fontSize: RFValue(15),
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: wp('2%'),
  },
});

export default UserGoalScreen;