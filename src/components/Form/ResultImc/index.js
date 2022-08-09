import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message:
        "Seu IMC hoje é: " +
        props.resultImc +
        " - " +
        props.diagnosticoImc +
        " - " +
        "Seu peso ideal estaria entre " +
        props.pesoIdealInicial +
        "Kg" +
        " e " +
        props.pesoIdealFinal +
        "Kg",
    });
  };
  return (
    <View style={styles.contextImc}>
      {props.resultImc > 5 ? (
        <View style={styles.contextImc}>
          <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
          <Text style={styles.titleResult}>{props.resultImc}</Text>
          <Text style={styles.diagnostico}>{props.diagnosticoImc}</Text>
          <Text style={styles.pesoIdeal}>
            O peso ideal para sua altura está entre {props.pesoIdealInicial}Kg e{" "}
            {props.pesoIdealFinal}Kg
          </Text>
          <View style={styles.boxSharebutton}>
            <TouchableOpacity onPress={onShare} style={styles.shared}>
              <Text style={styles.sharedText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.contextImc}>
          <Text style={styles.diagnostico}>
            Favor refazer o teste utilizando a vírgula ou ponto (ex. 1.75)
          </Text>
        </View>
      )}
    </View>
  );
}
