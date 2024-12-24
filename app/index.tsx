import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";

function App() {
  const [img, setImg] = useState(require("../assets/images/biscoito.png"));
  const [phrase, setPhrase] = useState("");

  let phrases = [
    "A felicidade está no caminho, não no destino.",
    "Boas notícias estão a caminho.",
    "Acredite nos seus sonhos e eles se realizarão.",
    "Você é mais forte do que imagina.",
    "Novas oportunidades surgirão em breve.",
    "Siga seu coração e encontrará o caminho certo.",
    "A sorte favorece os corajosos.",
    "Seja gentil e a bondade retornará para você.",
    "Grandes coisas estão por vir.",
    "O sucesso é uma jornada, não um destino.",
    "Confie no processo, tudo acontece por uma razão.",
    "Cada desafio traz uma nova oportunidade.",
    "O que é seu encontrará um caminho até você.",
    "Faça hoje o que seu futuro agradecerá.",
    "A vida recompensa quem persiste.",
    "A paz interior é o maior dos tesouros.",
    "Você está prestes a descobrir algo maravilhoso.",
    "O esforço de hoje é a vitória de amanhã.",
    "Valorize os pequenos momentos, eles são os mais preciosos.",
    "Sua luz iluminará o caminho de outros.",
  ];

  function crackFortuneCookie() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(`"${phrases[randomIndex]}"`);
    setImg(require("../assets/images/biscoitoAberto.png"));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={crackFortuneCookie}>
        <Image style={styles.imgCookie} source={img} />
      </TouchableOpacity>
      <Text style={styles.phrase}> {phrase} </Text>

      <TouchableOpacity style={styles.btn} onPress={crackFortuneCookie}>
        <View>
          <Text style={styles.btnLabel}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: "#dd7b22" }]}
        onPress={() => setImg(require("../assets/images/biscoito.png"))}
      >
        <View>
          <Text style={[styles.btnLabel, { color: "#fff" }]}>
            Novo Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgCookie: {
    width: 240,
    height: 240,
  },
  phrase: {
    fontSize: 24,
    color: "#dd7b22",
    margin: 32,
    fontStyle: "italic",
  },
  btn: {
    width: 240,
    height: 60,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  btnLabel: {
    fontSize: 18,
    color: "#dd7b22",
    fontWeight: "bold",
  },
});
