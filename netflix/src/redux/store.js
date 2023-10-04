import { configureStore } from '@reduxjs/toolkit';

import slice from './slices/slice';
import Sort from './slices/Sort';

export const store = configureStore({
  reducer: { slice, Sort }
});
