import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCFDB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05, // 5% da largura
  },

  header: {
    alignItems: "center",
    marginBottom: width * 0.05,
  },

  avatar: {
    width: width * 0.25,   // 25% da tela
    height: width * 0.25,
    resizeMode: "contain",
    marginTop: 10,
  },

  title: {
    fontSize: width * 0.06,  // escalável
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    textAlign: "center",
    fontSize: width * 0.035,
    color: "#000",
    marginTop: 6,
    width: width * 0.7, // 70% da tela
  },

  form: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#FFABB8",
    padding: width * 0.04,
    borderRadius: 20,
    marginTop: 14,
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    fontSize: width * 0.04,
  },

  button: {
    backgroundColor: "#FEC992",
    borderRadius: 20,
    paddingVertical: 14,
    marginTop: 12,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: width * 0.045,
  },

  noAccount: {
    marginVertical: 6,
    color: "#FD5972",
    fontSize: width * 0.037,
    alignSelf: "flex-start",
    marginLeft: width * 0.03,
  },

  link: {
    color: "blue",
    fontSize: width * 0.04,
    alignSelf: "flex-end",
    marginRight: width * 0.03,
    marginTop: -30,
  },
});