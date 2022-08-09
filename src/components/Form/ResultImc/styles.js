import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contextImc: {
    flex: 1,
    marginTop: 5,
    paddingTop: 5,
    alignItems: "center",
    width: "100%",
  },
  titleResult: {
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },
  titleResultImc: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxSharebutton: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  shared: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 8,
    paddingTop: 8,
  },
  sharedText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingHorizontal: 30,
    fontSize: 16,
  },
  diagnostico: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#000000",
    padding: 10,
  },
  pesoIdeal: {
    fontSize: 16,
    marginTop: 10,
    color: "#000000",
    fontStyle: "italic",
  },
});

export default styles;
