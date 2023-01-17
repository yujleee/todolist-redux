import { v4 as uuid } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  todos: [
    {
      id: uuid(),
      title: '리액트 공부',
      content: '리액트 숙련강의 처음부터 복습하기',
      isDone: false,
    },
    {
      id: uuid(),
      title: '장보기',
      content:
        '살 것: 계란, 우유, 대파, 양파, 파스타 면, 토마토 소스, 새송이버섯, 딸기잼, 식빵, 무염버터, 간식거리 ',
      isDone: true,
    },
    {
      id: uuid(),
      title: '리액트 숙련 과제',
      content: 'redux, react-router-dom, styled-components 이용해서 투두리스트 만들기',
      isDone: true,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.todos = action.payload;
    },

    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    toggleDone: (state, action) => {
      const newState = state.todos.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item;
      });
      state.todos = newState;
    },

    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.todos = newTodos;
    },

    updateTodo: (state, action) => {
      const newState = state.todos.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              content: action.payload.content,
            }
          : item;
      });

      state.todos = newState;
    },
  },
});

export const { getTodos, addTodo, deleteTodo, toggleDone, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
