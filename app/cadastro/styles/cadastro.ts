import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCFDB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },

  header: {
    alignItems: "center",
    marginBottom: width * 0.05,
    zIndex: 1,
    marginTop: -320,
  },

  header1: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    zIndex: 2,
  },

  avatar: {
    width: width * 0.85,  
    height: width * 0.85,
    resizeMode: "contain",
    marginTop: 10,
  },

  title: {
    fontSize: width * 0.06,
    fontWeight: "700",
    color: "#000",
    marginTop: -50,
  },

  subtitle: {
    textAlign: "center",
    fontSize: width * 0.035,
    color: "#000",
    marginTop: 6,
    width: width * 0.7,
  },

  form: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#FFABB8",
    padding: width * 0.04,
    borderRadius: 20,
    marginTop: 200,
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