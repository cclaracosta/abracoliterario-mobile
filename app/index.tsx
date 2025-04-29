import { Text, View, StyleSheet } from "react-native";
const usuario = [
  {
    id: 1,
    nome: "Clara",
    cargo: "Aluno"
  }
  {
    id: 2,
    nome: "Cicinho",
    cargo: "Professor"
  }
]
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        usuario.map(item => (
          <Text style={{fontSize: 20}}>{item.nome}</Text>

        ))
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
