import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: { name: 'Popular', sortProperty: 'vote_average' }
};

const Filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {}
});

export const { SetSort, SetShow } = Filter.actions;

export default Filter.reducer;
