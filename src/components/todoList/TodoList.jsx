import { useSelector } from 'react-redux';

import TodoItem from '../todoItem/TodoItem';
import { TodoListWrap, TodoTitle, List } from './style';

const TodoList = ({ isActive }) => {
  const { todos } = useSelector((state) => state.todos);

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
