import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCFDB",
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
    color: "#000000ff",
    marginTop: 6,
    width: 260,
  },
  form: {
    width: "85%",
    alignItems: "center",
    backgroundColor: "#FFABB8",
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
    backgroundColor: "#FEC992",
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
    marginTop: -25,
    color: "blue",
    fontSize: 14,
    marginLeft: 100,
  },
  noAccount: {
    marginVertical: 5,
    color: '#FD5972',
    marginRight: 100,
  },
});
