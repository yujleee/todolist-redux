import { atom } from 'recoil';
import { TodoType } from '../components/todoForm/TodoForm';
import { v4 as uuid } from 'uuid';

export const todoState = atom<TodoType[]>({
  key: 'todos',
  default: [
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
});
