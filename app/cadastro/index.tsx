import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { styles } from "./styles/cadastro";

export default function Cadastro() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    console.log("Cadastrar:", { email, password, name });

  };

  return (
    <View style={styles.container}>

      <View style={styles.header1}>
        <Image
          source={require("../../assets/images/logo_abracospng.png")}
          style={styles.avatar}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.subtitle}>
          Crie sua conta e descubra como a leitura pode empoderar sua voz de cidadão
        </Text>

      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>

        <Text style={styles.noAccount}>Já tem uma conta ?</Text>

        <Link href="/login" style={styles.link}>
          Faça login
        </Link>
      </View>
    </View>
  );
}