import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  id: string;
  title: string;
  imageUrl: string;
  price: {
    local: number;
    amazon: number;
  };
  description: string;
}

interface GamesState {
  currentGames: Game[];
  likedGames: Game[];
  isLoading: boolean;
}

const initialState: GamesState = {
  currentGames: [],
  likedGames: [],
  isLoading: false,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCurrentGames: (state, action: PayloadAction<Game[]>) => {
      state.currentGames = action.payload;
    },
    addLikedGame: (state, action: PayloadAction<Game>) => {
      state.likedGames.push(action.payload);
    },
    removeLikedGame: (state, action: PayloadAction<string>) => {
      state.likedGames = state.likedGames.filter(
        (game) => game.id !== action.payload
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCurrentGames, addLikedGame, removeLikedGame, setLoading } =
  gamesSlice.actions;
export default gamesSlice.reducer;