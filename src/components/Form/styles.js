import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30,
  },
  form: {
    width: "100%",
    height: "auto",
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  errorMessage: {
    fontSize: 12,
    color: "#FF0043",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  listImc: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 24,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  textResultItemList: {
    fontSize: 16,
    color: "red",
  },
});

export default styles;
