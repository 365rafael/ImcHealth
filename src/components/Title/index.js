import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <View style={styles.boxLogo}>
        <Image
          source={require("../../../assets/icone.png")}
          style={styles.logo}
        />
        <Text style={styles.textTitle}>@ACR-NUTRI</Text>
      </View>
      <Text style={styles.textSubtitle}>Calcule seu IMC</Text>
    </View>
  );
}
