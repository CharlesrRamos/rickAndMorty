import client from "./client";
import { Characters } from "../models/character";

export const getCharacters = async (limit?: number) => {
  var page = 1;
  if (limit) page = limit / 10;
  const params = {
    page,
  };
  const charactersData = await client.get<Characters>("character", { params });
  var results = charactersData.data.results;
  // if (limit) {
  //   results = results.filter((x) => x.id <= limit);
  // }
  return results;
};
