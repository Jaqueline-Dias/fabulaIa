import { gerarHistoria } from "../../Service/ai/generator";
import styles from "../../styles/index";
import * as Clipboard from "expo-clipboard";
import { MotiView } from "moti";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Opções para tempo de leitura e valores/aprendizados
const TEMPOS_LEITURA = ["2 min", "5 min", "10 min"];
const VALORES = ["Compartilhar", "Coragem", "Amizade", "Honestidade"];

export default function Index() {
  // Entradas do usuário
  const [tema, setTema] = useState("");
  const [tempoLeitura, setTempoLeitura] = useState(TEMPOS_LEITURA[0]);
  const [valor, setValor] = useState(VALORES[0]);

  // Estado da resposta da IA
  const [historia, setHistoria] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [copiado, setCopiado] = useState(false);

  // Chama a IA com os campos e mostra o resultado
  const gerar = async () => {
    if (!tema.trim()) return;

    setCarregando(true);
    setHistoria("");
    setCopiado(false);

    try {
      const resultado = await gerarHistoria({
        tema,
        valor,
        tempoLeitura,
      });
      setHistoria(resultado);
    } catch (error) {
      console.error("Erro ao gerar história:", error);
    } finally {
      setCarregando(false);
    }
  };

  // Copia a história para a área de transferência
  const copiar = async () => {
    try {
      await Clipboard.setStringAsync(historia);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar:", error);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.titulo}>FabulaIA</Text>
      <Text style={styles.subtitulo}>
        Crie histórias infantis personalizadas com valores positivos
      </Text>

      <Text style={styles.label}>Tema da história</Text>
      <TextInput
        value={tema}
        onChangeText={setTema}
        placeholder="Ex.: Um astronauta no espaço, Uma floresta mágica"
        placeholderTextColor="#5A5872"
        style={styles.input}
        multiline
      />

      <Text style={styles.label}>Tempo de leitura</Text>
      <View style={styles.chipsLinha}>
        {TEMPOS_LEITURA.map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={[styles.chip, tempoLeitura === opcao && styles.chipAtivo]}
            onPress={() => setTempoLeitura(opcao)}
          >
            <Text
              style={[
                styles.chipTexto,
                tempoLeitura === opcao && styles.chipTextoAtivo,
              ]}
            >
              {opcao}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Valor / Aprendizado</Text>
      <View style={styles.chipsLinha}>
        {VALORES.map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={[styles.chip, valor === opcao && styles.chipAtivo]}
            onPress={() => setValor(opcao)}
          >
            <Text
              style={[
                styles.chipTexto,
                valor === opcao && styles.chipTextoAtivo,
              ]}
            >
              {opcao}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.botao, carregando && styles.botaoDesativado]}
        onPress={gerar}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.botaoTexto}>Gerar história</Text>
        )}
      </TouchableOpacity>

      {/* Exibição da história gerada */}
      {historia !== "" && (
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 400 }}
          style={styles.card}
        >
          <Text style={styles.cardTitulo}>Era uma vez...</Text>
          <Text style={styles.cardTexto}>{historia}</Text>

          <View style={styles.acoes}>
            <TouchableOpacity style={styles.botaoSecundario} onPress={copiar}>
              <Text style={styles.botaoSecundarioTexto}>
                {copiado ? "Copiado!" : "Copiar história"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoSecundario} onPress={gerar}>
              <Text style={styles.botaoSecundarioTexto}>Criar outra</Text>
            </TouchableOpacity>
          </View>
        </MotiView>
      )}
    </ScrollView>
  );
}
