import { useRouter } from 'expo-router';
import React, { useReducer, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Estado inicial da meta
type State = {
    totalBooks: number;
    goal: number;
};

// Ações do reducer
type Action = { type: 'increment' } | { type: 'decrement' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                totalBooks: state.totalBooks + 1 <= state.goal ? state.totalBooks + 1 : state.totalBooks,
            };
        case 'decrement':
            return {
                ...state,
                totalBooks: state.totalBooks - 1 >= 0 ? state.totalBooks - 1 : 0,
            };
        default:
            return state;
    }
}

const UserGoalScreen = () => {
    const router = useRouter();

    const [state, dispatch] = useReducer(reducer, { totalBooks: 1, goal: 10 });

    // useMemo para calcular a porcentagem
    const percentage = useMemo(() => Math.round((state.totalBooks / state.goal) * 100), [state.totalBooks, state.goal]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBack}>
                <Text style={styles.arrow}>{'<<'}</Text>
            </TouchableOpacity>

            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWU2rz5ntKtK2A2Sv21EIopsyhlXMSA8YAg&s' }}
                style={styles.profilePic}
            />
            <Text style={styles.username}>@mariajoaquina</Text>
            <Text style={styles.editProfile}>editar perfil 😊</Text>

            <View style={styles.goalBox}>
                <Text style={styles.goalText}>Meta de leitura</Text>
                <Text style={styles.goal}>{state.totalBooks}/{state.goal} ✓ ({percentage}%)</Text>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.addButton} onPress={() => dispatch({ type: 'increment' })}>
                    <Text style={styles.addButtonText}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.addButton, styles.decreaseButton]} onPress={() => dispatch({ type: 'decrement' })}>
                    <Text style={styles.addButtonText}> - </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuButtonBig}
                    onPress={() => router.push('/historico')}
                >
                    <Text style={styles.menuLabel}>Histórico de livros</Text>
                </TouchableOpacity>

                <View style={styles.menuRow}>
                    <TouchableOpacity style={styles.menuButtonSmall}>
                        <Text style={styles.menuLabel}>Avaliação de livros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtonSmall}>
                        <Text style={styles.menuLabel}>Lista de desejos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#FFD8ED',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20
        },
        goBack: {
            position: 'absolute',
            top: 28,
            left: 16
        },
        arrow: {
            fontSize: 24,
            color: '#38282A'
        },
        profilePic: {
            width: 92,
            height: 92,
            borderRadius: 46,
            marginBottom: 8,
            marginTop: 14
        },
        username: {
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 2,
            color: '#38282A'
        },
        editProfile: {
            fontSize: 16,
            color: '#E76CA1',
            marginBottom: 18
        },
        goalBox: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 18,
            paddingHorizontal: 22,
            paddingVertical: 11,
            alignItems: 'center',
            marginBottom: 34,
            elevation: 1
        },
        goalText: {
            fontSize: 17,
            color: '#38282A',
            marginRight: 18
        },
        goal: {
            fontSize: 18,
            fontWeight: '600',
            color: '#38282A'
        },
        menuContainer: {
            width: '100%',
            alignItems: 'center'
        },
        menuButtonBig: {
            width: 260,
            height: 85,
            backgroundColor: '#FFD097',
            borderRadius: 18,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 18
        },
        menuRow: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        menuButtonSmall: {
            width: 130,
            height: 65,
            backgroundColor: '#FFD097',
            borderRadius: 18,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 8
        },
        menuLabel: {
            fontSize: 17,
            color: '#fff',
            textAlign: 'center',
            fontWeight: '600'
        },
        input: {
            width: '90%',
            backgroundColor: '#fff',
            padding: 10,
            marginBottom: 8,
            borderRadius: 12
        },
        addButton: {
            backgroundColor: '#FFD097',
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
            margin: 10,
            alignItems: 'center',
        },
        addButtonText: {
            color: '#fff',
            fontWeight: '600',
            fontSize: 16
        },
        buttonRow: {
            flexDirection: 'row',
        },
        decreaseButton: {
            backgroundColor: '#FF7F7F'
        },
    }
);

export default UserGoalScreen;

