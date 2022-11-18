import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contact'

export const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});
