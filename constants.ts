import { QuizCategory } from "./types";

// Imagens fixas e temáticas para as Sessões com curadoria cinematográfica e bíblica
// URLs verificadas e atualizadas para garantir estabilidade e qualidade

export const OLD_TESTAMENT_CATS: QuizCategory[] = [
  { 
    id: 'ot-1', 
    title: 'Gênesis', 
    queryTopic: 'Book of Genesis creation stories', 
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop' // Earth from space (Creation)
  },
  { 
    id: 'ot-2', 
    title: 'Êxodo', 
    queryTopic: 'Moses and the Exodus Red Sea', 
    imageUrl: 'https://images.unsplash.com/photo-1547953266-9b09be87a030?q=80&w=1080&auto=format&fit=crop' // Desert Dunes
  },
  { 
    id: 'ot-3', 
    title: 'Rei Davi', 
    queryTopic: 'Life of King David Israel', 
    imageUrl: 'https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=1080&auto=format&fit=crop' // Golden Crown
  },
  { 
    id: 'ot-4', 
    title: 'Profetas', 
    queryTopic: 'Major Prophets of the Old Testament Isaiah Jeremiah', 
    imageUrl: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1080&auto=format&fit=crop' // Ancient Scrolls/Books
  },
  { 
    id: 'ot-5', 
    title: 'Sabedoria', 
    queryTopic: 'Proverbs Ecclesiastes Wisdom', 
    imageUrl: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1080&auto=format&fit=crop' // Candle and Book
  },
  { 
    id: 'ot-6', 
    title: 'Josué', 
    queryTopic: 'Joshua Battle of Jericho', 
    imageUrl: 'https://images.unsplash.com/photo-1564596352696-6d60a12e5254?q=80&w=1080&auto=format&fit=crop' // Stone Walls
  },
  { 
    id: 'ot-7', 
    title: 'Jó', 
    queryTopic: 'Book of Job Suffering and Faith', 
    imageUrl: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1080&auto=format&fit=crop' // Dark Storm Clouds
  },
  { 
    id: 'ot-8', 
    title: 'Rute', 
    queryTopic: 'Book of Ruth and Boaz', 
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080&auto=format&fit=crop' // Wheat Field
  }
];

export const NEW_TESTAMENT_CATS: QuizCategory[] = [
  { 
    id: 'nt-1', 
    title: 'Evangelhos', 
    queryTopic: 'The Gospels Matthew Mark Luke John', 
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1080&auto=format&fit=crop' // Open Bible
  },
  { 
    id: 'nt-2', 
    title: 'Atos', 
    queryTopic: 'Acts of the Apostles Early Church', 
    imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1080&auto=format&fit=crop' // Ancient Map
  },
  { 
    id: 'nt-3', 
    title: 'Paulo', 
    queryTopic: 'Apostle Paul Missionary Journeys', 
    imageUrl: 'https://images.unsplash.com/photo-1500514969906-fe245adb9352?q=80&w=1080&auto=format&fit=crop' // Stormy Sea/Ship Journey
  },
  { 
    id: 'nt-4', 
    title: 'Apocalipse', 
    queryTopic: 'Book of Revelation End Times', 
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1080&auto=format&fit=crop' // Dramatic Sky/Mountains
  },
  { 
    id: 'nt-5', 
    title: 'Parábolas', 
    queryTopic: 'Parables of Jesus Sower Prodigal Son', 
    imageUrl: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1080&auto=format&fit=crop' // Nature/Field
  },
  { 
    id: 'nt-6', 
    title: 'Milagres', 
    queryTopic: 'Miracles of Jesus Christ Healing', 
    imageUrl: 'https://images.unsplash.com/photo-1516713788320-a681df70c0c6?q=80&w=1080&auto=format&fit=crop' // Water/Reflection
  },
  { 
    id: 'nt-7', 
    title: 'João Batista', 
    queryTopic: 'John the Baptist Jordan River', 
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1080&auto=format&fit=crop' // River/Water
  },
  { 
    id: 'nt-8', 
    title: 'Epístolas', 
    queryTopic: 'New Testament Letters Epistles', 
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1080&auto=format&fit=crop' // Writing/Paper
  }
];

export const HEROES_CATS: QuizCategory[] = [
  { 
    id: 'h-1', 
    title: 'Daniel', 
    queryTopic: 'Daniel in the Lions Den', 
    imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1080&auto=format&fit=crop' // Lion
  },
  { 
    id: 'h-2', 
    title: 'Ester', 
    queryTopic: 'Queen Esther Persia', 
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1080&auto=format&fit=crop' // Jewelry/Gold
  },
  { 
    id: 'h-3', 
    title: 'Elias', 
    queryTopic: 'Elijah the Prophet Fire', 
    imageUrl: 'https://images.unsplash.com/photo-1496338435123-690553757a3e?q=80&w=1080&auto=format&fit=crop' // Fire
  },
  { 
    id: 'h-4', 
    title: 'Pedro', 
    queryTopic: 'Peter the Apostle Fisherman', 
    imageUrl: 'https://images.unsplash.com/photo-1528659560411-eb653b6a090e?q=80&w=1080&auto=format&fit=crop' // Fishing Net/Boat
  },
  { 
    id: 'h-5', 
    title: 'Maria', 
    queryTopic: 'Mary Mother of Jesus', 
    imageUrl: 'https://images.unsplash.com/photo-1532439775369-0e866a2c262a?q=80&w=1080&auto=format&fit=crop' // Fabric/Starry
  },
  { 
    id: 'h-6', 
    title: 'Abraão', 
    queryTopic: 'Abraham Father of Nations Stars', 
    imageUrl: 'https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=1080&auto=format&fit=crop' // Starry Night
  },
  { 
    id: 'h-7', 
    title: 'José', 
    queryTopic: 'Joseph in Egypt Pharaoh', 
    imageUrl: 'https://images.unsplash.com/photo-1533036665787-8868d42d627c?q=80&w=1080&auto=format&fit=crop' // Pyramids/Desert
  },
  { 
    id: 'h-8', 
    title: 'Gideão', 
    queryTopic: 'Gideon and the 300', 
    imageUrl: 'https://images.unsplash.com/photo-1510590337019-5ef2d3977e2e?q=80&w=1080&auto=format&fit=crop' // Torch/Fire
  }
];

export const DIFFICULT_CATS: QuizCategory[] = [
  { 
    id: 'd-1', 
    title: 'Teologia', 
    queryTopic: 'Systematic Theology Doctrine', 
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1080&auto=format&fit=crop' // Library
  },
  { 
    id: 'd-2', 
    title: 'Geografia', 
    queryTopic: 'Biblical Geography Maps', 
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1080&auto=format&fit=crop' // Map
  },
  { 
    id: 'd-3', 
    title: 'Genealogia', 
    queryTopic: 'Biblical Genealogies Lineage', 
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1080&auto=format&fit=crop' // Trees/Forest
  },
  { 
    id: 'd-4', 
    title: 'Tabernáculo', 
    queryTopic: 'Tabernacle of Moses Holy of Holies', 
    imageUrl: 'https://images.unsplash.com/photo-1572916172670-381c81523447?q=80&w=1080&auto=format&fit=crop' // Fabric/Curtain
  },
  { 
    id: 'd-5', 
    title: 'Leis', 
    queryTopic: 'Leviticus Laws Levitical Priesthood', 
    imageUrl: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=1080&auto=format&fit=crop' // Justice/Law
  },
  { 
    id: 'd-6', 
    title: 'Profecias', 
    queryTopic: 'Messianic Prophecies Fulfilled', 
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1080&auto=format&fit=crop' // Books/Light
  },
  { 
    id: 'd-7', 
    title: 'Simbolismo', 
    queryTopic: 'Biblical Symbolism Typology', 
    imageUrl: 'https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?q=80&w=1080&auto=format&fit=crop' // Abstract Light
  },
  { 
    id: 'd-8', 
    title: 'Arqueologia', 
    queryTopic: 'Biblical Archaeology findings', 
    imageUrl: 'https://images.unsplash.com/photo-1629161048422-947b96096232?q=80&w=1080&auto=format&fit=crop' // Ruins
  },
  { 
    id: 'd-9', 
    title: 'Manuscritos', 
    queryTopic: 'Dead Sea Scrolls Manuscripts', 
    imageUrl: 'https://images.unsplash.com/photo-1575416568323-5e3626cbf433?q=80&w=1080&auto=format&fit=crop' // Parchment
  }
];