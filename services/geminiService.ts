
import { Question, QuizConfig } from "../types";
import { getOfflineQuestions } from "../data/questionsDb";

// SERVIÇO 100% OFFLINE
// Não requer API Keys, nem conexão com internet.

export const generateQuizQuestions = async (categoryId: string, config: QuizConfig): Promise<Question[]> => {
  // Simula um pequeno delay de carregamento para dar sensação de processamento "Premium"
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Busca 56 perguntas misturadas do banco de dados local
  const allQuestions = getOfflineQuestions(categoryId, config.difficulty);
  
  // Corta o array para o tamanho que o usuário escolheu no slider (ex: 7, 10, 21)
  return allQuestions.slice(0, config.numberOfQuestions);
};
