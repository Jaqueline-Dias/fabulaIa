import { StyleSheet } from "react-native";

// Paleta "Nuvem Mágica": Tons pastéis suaves e relaxantes
const FUNDO = "#F0F4F8"; // Azul acinzentado bem clarinho
const BRANCO = "#FFFFFF"; // Fundo dos cards
const BORDA = "#D1D9E6"; // Cinza azulado suave
const LILAS_PASTEL = "#A29BFE"; // Destaque principal (Lilás)
const PESSEGO_PASTEL = "#FFB7B2"; // Botão e detalhes (Pêssego)
const TEXTO_FOCO = "#2D3436"; // Grafite suave para leitura
const TEXTO_SUAVE = "#636E72"; // Cinza para labels

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FUNDO,
  },
  conteudo: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 60,
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: LILAS_PASTEL,
    marginTop: 20,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 15,
    color: TEXTO_SUAVE,
    marginTop: 6,
    marginBottom: 28,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    color: TEXTO_SUAVE,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  input: {
    backgroundColor: BRANCO,
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    color: TEXTO_FOCO,
    borderWidth: 1,
    borderColor: BORDA,
    marginBottom: 24,
    minHeight: 60,
  },
  chipsLinha: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 24,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    backgroundColor: BRANCO,
    borderWidth: 1,
    borderColor: BORDA,
  },
  chipAtivo: {
    backgroundColor: LILAS_PASTEL,
    borderColor: LILAS_PASTEL,
  },
  chipTexto: {
    color: TEXTO_SUAVE,
    fontWeight: "600",
    fontSize: 14,
  },
  chipTextoAtivo: {
    color: BRANCO,
  },
  botao: {
    backgroundColor: PESSEGO_PASTEL,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 4,
  },
  botaoDesativado: {
    opacity: 0.5,
  },
  botaoTexto: {
    color: BRANCO,
    fontWeight: "bold",
    fontSize: 16,
  },
  card: {
    backgroundColor: BRANCO,
    borderRadius: 18,
    padding: 22,
    marginTop: 28,
    borderWidth: 1,
    borderColor: BORDA,
    borderLeftWidth: 4,
    borderLeftColor: LILAS_PASTEL,
  },
  cardTitulo: {
    fontSize: 13,
    fontWeight: "bold",
    color: LILAS_PASTEL,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 14,
  },
  cardTexto: {
    fontSize: 15,
    lineHeight: 24,
    color: TEXTO_FOCO,
  },
  acoes: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  botaoSecundario: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDA,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  botaoSecundarioTexto: {
    color: LILAS_PASTEL,
    fontWeight: "600",
    fontSize: 14,
  },
});

export default styles;
