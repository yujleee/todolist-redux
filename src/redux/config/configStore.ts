import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todoSlice';

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;

// State의 타입 얻기
export type RootState = ReturnType<typeof store.getState>;

// Dispatch 타입 얻기
export type AppDispatch = typeof store.dispatch;
