import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const handleRegister = () => {
    console.log('Cadastrar');
  };

  return (
    <View style={styles.container}>
      { }
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/simboloabraco.png')}
          style={styles.avatar}
        />
        <Text style={styles.title}>Seja bem-vindo!</Text>
        <Text style={styles.subtitle}>
          Construindo cidadania ativa através da leitura
        </Text>
      </View>

      { }
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => console.log('Recuperar senha')}>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/tela principal')}>
          <Text style={styles.loginText}>Login</Text>
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
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#000000ff',
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
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#FD5972',
    marginBottom: 20,
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
    color: '#fff',
    fontWeight: 'bold',
  },
  noAccount: {
    marginVertical: 5,
    color: '#FD5972',
    marginRight: 100,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#FEC992',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    marginTop: -25,
    color: "blue",
    fontSize: 14,
    marginLeft: 100,
  },
});