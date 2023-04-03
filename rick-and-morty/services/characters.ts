import client from "./client";
import { Characters } from "../models/character";

export const getCharacters = async (limit?: number, paramPage?: number) => {
  var page = 1;
  if (paramPage) {
    page = paramPage;
  } else {
    if (limit) page = limit / 10;
  }

  const params = {
    page,
  };

  const charactersData = await client.get<Characters>("character", { params });
  var results = charactersData.data.results;
  return results;
};

export const getInfoCharacters = async () => {
  const charactersData = await client.get<Characters>("character");
  var results = charactersData.data.info;

  return results;
};
