export interface Card {
  _id: string;
  title: string;
  cards: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CardProps {
  data: CardData | null,
  isDeleted: Function
}
