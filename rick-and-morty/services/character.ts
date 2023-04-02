import client from "./client";
import { Character } from "../models/character";

export const getCharacter = async (id) => {
  var page = 1;
  if (id) page = Math.floor(id / 20) + 1;
  const params = {
    page,
  };
  const characterData = await client.get<Character>(`character/${id}`, {
    params,
  });

  return characterData.data;
};
