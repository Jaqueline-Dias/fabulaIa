import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

// Cliente do Google Gemini, autenticado com a chave guardada no .env
const google = createGoogleGenerativeAI({
  apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY,
});

// Formato dos dados que a tela envia para a IA
export type PedidoHistoria = {
  tema: string;
  valor: string;
  tempoLeitura: string;
};

/**
 * Monta o pedido do usuário e chama a API do Gemini,
 * devolvendo a história já pronta em texto.
 */
export const gerarHistoria = async ({
  tema,
  valor,
  tempoLeitura,
}: PedidoHistoria) => {
  try {
    const { text } = await generateText({
      model: google("gemini-3.6-flash"),
      // Instrução fixa: define o papel da IA e o formato da resposta
      system:
        "Você é um contador de histórias infantis criativo e educativo. " +
        "Sua tarefa é criar histórias curtas, envolventes e com uma moral clara. " +
        "Use uma linguagem simples e adequada para crianças. " +
        "Responda SEMPRE no formato:\n" +
        "TITULO: [Nome da história]\n\n" +
        "HISTÓRIA: [O texto da história]\n\n" +
        "APRENDIZADO: [Uma frase resumindo o valor ensinado]",
      // Entrada do usuário: os três campos preenchidos na tela
      prompt: `Tema: ${tema}\nValor/Aprendizado: ${valor}\nTempo estimado de leitura: ${tempoLeitura}`,
    });
    return text;
  } catch (e) {
    return "Não consegui gerar a história agora. Verifique sua conexão e tente novamente.";
  }
};
