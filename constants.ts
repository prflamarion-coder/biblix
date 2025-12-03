
import { QuizCategory } from "./types";
import { IMAGES_DB } from "./data/imagesDb";

// Imagens fixas e temáticas para as Sessões puxadas do Banco de Dados Local

export const OLD_TESTAMENT_CATS: QuizCategory[] = [
  { id: 'ot-1', title: 'Gênesis', queryTopic: 'Book of Genesis', imageUrl: IMAGES_DB['ot-1'] },
  { id: 'ot-2', title: 'Êxodo', queryTopic: 'Exodus', imageUrl: IMAGES_DB['ot-2'] },
  { id: 'ot-3', title: 'Rei Davi', queryTopic: 'King David', imageUrl: IMAGES_DB['ot-3'] },
  { id: 'ot-4', title: 'Profetas', queryTopic: 'Prophets', imageUrl: IMAGES_DB['ot-4'] },
  { id: 'ot-5', title: 'Sabedoria', queryTopic: 'Proverbs', imageUrl: IMAGES_DB['ot-5'] },
  { id: 'ot-6', title: 'Josué', queryTopic: 'Joshua', imageUrl: IMAGES_DB['ot-6'] },
  { id: 'ot-7', title: 'Jó', queryTopic: 'Book of Job', imageUrl: IMAGES_DB['ot-7'] },
  { id: 'ot-8', title: 'Rute', queryTopic: 'Ruth', imageUrl: IMAGES_DB['ot-8'] }
];

export const NEW_TESTAMENT_CATS: QuizCategory[] = [
  { id: 'nt-1', title: 'Evangelhos', queryTopic: 'Gospels', imageUrl: IMAGES_DB['nt-1'] },
  { id: 'nt-2', title: 'Atos', queryTopic: 'Acts', imageUrl: IMAGES_DB['nt-2'] },
  { id: 'nt-3', title: 'Paulo', queryTopic: 'Paul', imageUrl: IMAGES_DB['nt-3'] },
  { id: 'nt-4', title: 'Apocalipse', queryTopic: 'Revelation', imageUrl: IMAGES_DB['nt-4'] },
  { id: 'nt-5', title: 'Parábolas', queryTopic: 'Parables', imageUrl: IMAGES_DB['nt-5'] },
  { id: 'nt-6', title: 'Milagres', queryTopic: 'Miracles', imageUrl: IMAGES_DB['nt-6'] },
  { id: 'nt-7', title: 'João Batista', queryTopic: 'John Baptist', imageUrl: IMAGES_DB['nt-7'] },
  { id: 'nt-8', title: 'Epístolas', queryTopic: 'Epistles', imageUrl: IMAGES_DB['nt-8'] }
];

export const HEROES_CATS: QuizCategory[] = [
  { id: 'h-1', title: 'Daniel', queryTopic: 'Daniel', imageUrl: IMAGES_DB['h-1'] },
  { id: 'h-2', title: 'Ester', queryTopic: 'Esther', imageUrl: IMAGES_DB['h-2'] },
  { id: 'h-3', title: 'Elias', queryTopic: 'Elijah', imageUrl: IMAGES_DB['h-3'] },
  { id: 'h-4', title: 'Pedro', queryTopic: 'Peter', imageUrl: IMAGES_DB['h-4'] },
  { id: 'h-5', title: 'Maria', queryTopic: 'Mary', imageUrl: IMAGES_DB['h-5'] },
  { id: 'h-6', title: 'Abraão', queryTopic: 'Abraham', imageUrl: IMAGES_DB['h-6'] },
  { id: 'h-7', title: 'José', queryTopic: 'Joseph', imageUrl: IMAGES_DB['h-7'] },
  { id: 'h-8', title: 'Gideão', queryTopic: 'Gideon', imageUrl: IMAGES_DB['h-8'] }
];

export const DIFFICULT_CATS: QuizCategory[] = [
  { id: 'd-1', title: 'Teologia', queryTopic: 'Theology', imageUrl: IMAGES_DB['d-1'] },
  { id: 'd-2', title: 'Geografia', queryTopic: 'Geography', imageUrl: IMAGES_DB['d-2'] },
  { id: 'd-3', title: 'Genealogia', queryTopic: 'Genealogy', imageUrl: IMAGES_DB['d-3'] },
  { id: 'd-4', title: 'Tabernáculo', queryTopic: 'Tabernacle', imageUrl: IMAGES_DB['d-4'] },
  { id: 'd-5', title: 'Leis', queryTopic: 'Leviticus', imageUrl: IMAGES_DB['d-5'] },
  { id: 'd-6', title: 'Profecias', queryTopic: 'Prophecies', imageUrl: IMAGES_DB['d-6'] },
  { id: 'd-7', title: 'Simbolismo', queryTopic: 'Symbolism', imageUrl: IMAGES_DB['d-7'] },
  { id: 'd-8', title: 'Arqueologia', queryTopic: 'Archaeology', imageUrl: IMAGES_DB['d-8'] },
  { id: 'd-9', title: 'Manuscritos', queryTopic: 'Manuscripts', imageUrl: IMAGES_DB['d-9'] }
];
