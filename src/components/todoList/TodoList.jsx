import TodoItem from '../todoItem/TodoItem';
import { TodoListWrap, TodoTitle, List } from './style';

const TodoList = ({ isActive }) => {
  return (
    <TodoListWrap>
      <TodoTitle>{isActive ? '🔥 진행 중 🔥' : '🎉 완료 🎉'}</TodoTitle>
      <List>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </List>
    </TodoListWrap>
  );
};

export default TodoList;
