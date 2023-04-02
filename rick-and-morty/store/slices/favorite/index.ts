import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../../models/character";

export interface FavoriteState {
  data?: Character[];
  idsFavorites: number[];
  countItems: number;
  favoriteIsOpen: boolean;
}

const initialState: FavoriteState = {
  data: undefined,
  idsFavorites: [],
  countItems: 0,
  favoriteIsOpen: false,
};

export const favoriteSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      const countItems = state.countItems + 1;

      state.data = state.data
        ? [...state.data, action.payload]
        : [action.payload];
      state.countItems = countItems;
      state.idsFavorites.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<Character>) => {
      const currentData = state;
      let removeCountItems = 0;
      const filteredData = currentData.data.filter((favoriteState) => {
        if (favoriteState.id !== action.payload.id) {
          return favoriteState;
        }
        removeCountItems += 1;
      });
      const courrentCountItems = state.countItems - removeCountItems;
      const filteredIds = currentData.idsFavorites.filter((favoriteIdState) => {
        if (favoriteIdState !== action.payload.id) return favoriteIdState;
      });

      state.data = filteredData;
      state.idsFavorites = filteredIds;
      state.countItems = courrentCountItems;
    },
    clearFavorite: (state) => {
      state = initialState;
    },
    toggleFavorite: (state) => {
      state = { ...state, favoriteIsOpen: !state.favoriteIsOpen };
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorite, toggleFavorite } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
