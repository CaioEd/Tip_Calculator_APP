import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(5);
  const [custom, setCustom] = useState("");
  const [persons, setPersons] = useState("");
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const calc = () => {
    let percentageValue = percentage;
    if (custom) {
      percentageValue = parseFloat(custom);
    }
    const tipCalculated = (parseFloat(bill) * percentageValue) / 100;

    setTip(tipCalculated / persons);
    setTotal(tipCalculated);
  };

  const cleanScreen = () => {
    setBill("");
    setPercentage(5);
    setCustom("");
    setPersons(1);
    setTip(0);
    setTotal(0);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text>Conta</Text>
          <TextInput
            style={styles.input}
            placeholder="R$"
            value={bill}
            onChangeText={setBill}
            keyboardType="numeric"
          />

          <Text>Porcentagem</Text>
          <Picker
            selectedValue={percentage}
            style={styles.input}
            onValueChange={(itemValue) => setPercentage(itemValue)}
          >
            <Picker.Item label="5%" value={5} />
            <Picker.Item label="10%" value={10} />
            <Picker.Item label="15%" value={15} />
            <Picker.Item label="20%" value={20} />
            <Picker.Item label="25%" value={25} />
          </Picker>

          <Text>Porcentagem Customizada</Text>
          <TextInput
            style={styles.input}
            placeholder="% custom"
            value={custom}
            onChangeText={setCustom}
            keyboardType="numeric"
          />

          <Text>Número de Pessoas</Text>
          <TextInput
            style={styles.input}
            value={persons}
            onChangeText={setPersons}
            keyboardType="numeric"
            // style={styles.input}
            // value={String(persons)}
            // onChangeText={(text) => setPersons(parseInt(text, 10))}
            // keyboardType="numeric"
          />

          <Button title="Calcular" onPress={calc} />
        </View>

        <View style={styles.results}>
          <Text>Gorjeta: R${tip.toFixed(2)} / pessoa</Text>
          <Text>Total: R${total.toFixed(2)}</Text>
          <Button title="Limpar Tela" onPress={cleanScreen} />
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
  },
  results: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
});
