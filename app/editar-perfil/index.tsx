import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        editar perfil <Ionicons name="reload-outline" size={18} />
      </Text>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWU2rz5ntKtK2A2Sv21EIopsyhlXMSA8YAg&s" }}
          style={styles.profileImage}
        />

        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>editar usuário</Text>
          </TouchableOpacity>

          <Text style={styles.username}>@mariajoaquina</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>editar meta</Text>
          </TouchableOpacity>

          <Text style={styles.meta}>0/10</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9c7d1",
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "flex-start",
    marginLeft: 20,
    flexDirection: "row",
  },

  profileContainer: {
    marginTop: 40,
    alignItems: "center",
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },

  cameraButton: {
    position: "absolute",
    top: 45,
    left: 45,
    right: 45,
    bottom: 45,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "#ffa9b8",
    marginTop: 40,
    borderRadius: 20,
    paddingVertical: 25,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  username: {
    fontSize: 16,
    fontWeight: "700",
  },

  meta: {
    fontSize: 16,
    fontWeight: "700",
  },
});
