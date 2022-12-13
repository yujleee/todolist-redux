import { useSelector } from 'react-redux';
import Container from '../components/Container';
import Header from '../components/header/Header';
import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todoList/TodoList';

const Home = () => {
  // 투두리스트
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      <Header />
      <TodoForm />
      <TodoList isActive={true} todos={todos} />
      <TodoList isActive={false} todos={todos} />
    </Container>
  );
};

export default Home;
