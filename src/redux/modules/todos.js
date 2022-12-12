import { v4 as uuid } from 'uuid';

// action value
const ADD_TODO = 'ADD_TODO';
const TOGGLE_DONE = 'TOGGLE_DONE';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

// action creators
// 투두 추가
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// 투두 완료 토글
export const toggleDone = (payload) => {
  return {
    type: TOGGLE_DONE,
    payload,
  };
};

// 투두 삭제
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// 투두 수정
export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

// 초기 상태
const initialState = [
  {
    id: uuid(),
    title: '리액트 공부',
    content: '리액트 숙련강의 처음부터 복습하기',
    isDone: false,
  },
  {
    id: uuid(),
    title: '장보기',
    content: '살 것: 계란, 우유, 대파, 양파, 파스타 면, 토마토 소스, 새송이버섯, 딸기잼, 식빵 ',
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    // 추가할 때
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
          isDone: action.payload.isDone,
        },
      ];

    // 완료/취소 토글
    case TOGGLE_DONE: {
      const newState = state.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item;
      });
      return newState;
    }

    // 삭제
    case DELETE_TODO: {
      return state.filter((item) => item.id !== action.payload.id);
    }

    // 수정
    case UPDATE_TODO: {
      const newState = state.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              content: action.payload.content,
            }
          : item;
      });
      return newState;
    }

    default:
      return state;
  }
};

export default todos;
