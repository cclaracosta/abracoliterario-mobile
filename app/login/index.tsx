import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isSmallScreen = width < 360;
  const isLargeScreen = width > 500;

  const dynamicStyles = {
    title: {
      fontSize: isLargeScreen ? 32 : isSmallScreen ? 20 : 26,
    },
    subtitle: {
      fontSize: isLargeScreen ? 18 : isSmallScreen ? 12 : 14,
    },
    input: {
      height: isLargeScreen ? 60 : 50,
      fontSize: isSmallScreen ? 14 : 16,
    },
    buttonText: {
      fontSize: isLargeScreen ? 20 : 16,
    },
    avatar: {
      width: width * 0.25,
      height: width * 0.25,
    }
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo_abracospng.png')}
          style={[styles.avatar, dynamicStyles.avatar]}
        />

        <Text style={[styles.title, dynamicStyles.title]}>
          Seja bem-vindo!
        </Text>

        <Text style={[styles.subtitle, dynamicStyles.subtitle]}>
          Construindo cidadania ativa através da leitura
        </Text>
      </View>

      {/* FORM */}
      <View style={styles.form}>
        <TextInput
          style={[styles.input, dynamicStyles.input]}
          placeholder="E-mail"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, dynamicStyles.input]}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#555"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => console.log('Recuperar senha')}>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/tela principal')}
        >
          <Text style={[styles.loginText, dynamicStyles.buttonText]}>
            Login
          </Text>
        </TouchableOpacity>

        <Text style={styles.noAccount}>Não tem conta?</Text>

        <Link href="/cadastro" style={styles.link}>
          cadastre-se
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCFDB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },

  avatar: {
    resizeMode: 'contain',
    marginBottom: 10,
    height: 100,
    width: 100,
  },
  title: {
    fontFamily: 'Alexandria_700Bold',
    color: '#000',
    textAlign: 'center',
    fontFamily: "Alexandria",
  },
  subtitle: {
    fontFamily: 'Alexandria_400Regular',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000000ff',
    maxWidth: '80%',
    fontFamily: "Alexandria",
  },

  form: {
    width: '100%',
    backgroundColor: '#FFABB8',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontFamily: 'Alexandria_400Regular',
  },
  forgot: {
    fontFamily: 'Alexandria_400Regular',
    alignSelf: 'flex-end',
    color: '#FD5972',
    marginBottom: 20,
    fontFamily: "Alexandria",
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FEC992',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    fontFamily: 'Alexandria_700Bold',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: "Alexandria",
  },
  noAccount: {
    fontFamily: 'Alexandria_400Regular',
    marginVertical: 5,
    color: '#FD5972',
    alignSelf: 'flex-start',
    fontSize: 15,
    fontFamily: "Alexandria",
  },
  link: {
    fontFamily: 'Alexandria_400Regular',
    color: "wine",
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: -25,
    marginLeft: 250,
    fontFamily: "Alexandria",
  },
});
