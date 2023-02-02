import { useRecoilValue } from 'recoil';
import { todoState } from '../../recoil/todo';

import TodoItem from '../todoItem/TodoItem';
import { TodoListWrap, TodoTitle, List } from './style';

interface PropsType {
  isActive: boolean;
}

const TodoList = ({ isActive }: PropsType) => {
  const todos = useRecoilValue(todoState);

  // isActive에 따라 진행중, 완료중 나누어 렌더링
  return (
    <TodoListWrap>
      <TodoTitle>{isActive ? '🔥 진행 중 🔥' : '🎉 완료 🎉'}</TodoTitle>
      <List>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
      </List>
    </TodoListWrap>
  );
};

export default TodoList;
