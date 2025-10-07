import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6C2C2",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#333",
    marginTop: 6,
    width: 260,
  },
  form: {
    width: "85%",
    alignItems: "center",
    backgroundColor: "#F2A6A6",
    padding: 18,
    borderRadius: 20,
    marginTop: 14,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 12,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#D85A5A",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  link: {
    marginTop: 12,
    color: "#000",
    fontSize: 14,
  },
});
