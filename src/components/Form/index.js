import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Vibration,
  Pressable,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./styles";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [diagnosticoImc, setDiagnosticoImc] = useState(null);

  function imcCalculator() {
    let heightFormat = altura.replace(",", ".");
    let totalImc = (peso / (heightFormat * heightFormat)).toFixed(2);

    if (totalImc < 16) {
      setDiagnosticoImc("Muito abaixo do peso");
    } else if (totalImc < 17) {
      setDiagnosticoImc("Moderadamente abaixo do peso");
    } else if (totalImc < 18.5) {
      setDiagnosticoImc("Abaixo do peso");
    } else if (totalImc < 25) {
      setDiagnosticoImc("Peso normal");
    } else if (totalImc < 30) {
      setDiagnosticoImc("Sobrepeso");
    } else if (totalImc < 35) {
      setDiagnosticoImc("Obesidade Grau I");
    } else if (totalImc < 40) {
      setDiagnosticoImc("Obesidade Grau II");
    } else {
      setDiagnosticoImc("Obesidade Grau III");
    }

    setImc(totalImc);
  }
  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  function validationImc() {
    if (peso != null && altura != null) {
      Keyboard.dismiss();
      imcCalculator();
      setAltura(null);
      setPeso(null);
      setMessageImc("Seu imc é igual a:");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e a altura");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="Ex. 75.365"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exibitionResultImc}>
          <ResultImc
            messageResultImc={messageImc}
            resultImc={imc}
            diagnosticoImc={diagnosticoImc}
          />

          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
