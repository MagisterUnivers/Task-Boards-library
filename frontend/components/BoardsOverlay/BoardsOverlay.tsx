'use client'

import { BoardData, BoardsOverlayProps } from "./types";
import { BoardCard } from "@/components";

export function BoardsOverlay({ data }: BoardsOverlayProps) {
   if (!data || data.length === 0) {
    return null;
  }

  return (
    <ul>
      {data.map((item: BoardData) => (
          <BoardCard key={data._id} data={item} />
      ))}
    </ul>
  )
}
