import TodoItem from '../todoItem/TodoItem';
import { TodoListWrap, TodoTitle, List } from './style';

const TodoList = ({ isActive, todos }) => {
  return (
    <TodoListWrap>
      <TodoTitle>{isActive ? '🔥 진행 중 🔥' : '🎉 완료 🎉'}</TodoTitle>
      <List>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => (
            <TodoItem key={item.id} id={item.id} title={item.title} content={item.content} isDone={item.isDone} />
          ))}
      </List>
    </TodoListWrap>
  );
};

export default TodoList;
