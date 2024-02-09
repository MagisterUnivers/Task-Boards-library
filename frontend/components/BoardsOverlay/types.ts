export interface BoardData {
  _id: string;
  title: string;
  cards: string[];
  createdAt: string;
  updatedAt: string;
}

export interface BoardsOverlayProps {
  data: BoardData[] | null;
}
