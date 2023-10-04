import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clickCount: 0,
  ArrowVisible: false,
  favouriteFilms: [],
  ref: {}
};

const filmSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setClickCount(state, action) {
      state.clickCount = action.payload;
    },
    setArrowVisible(state, action) {
      state.ArrowVisible = action.payload;
    },
    setFavouriteFilms(state, action) {
      state.favouriteFilms = action.payload;
    }
  }
});
export const { setClickCount, setArrowVisible, setFavouriteFilms } = filmSlice.actions;

export default filmSlice.reducer;
