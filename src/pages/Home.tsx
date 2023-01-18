import Container from '../components/Container';
import Header from '../components/header/Header';
import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todoList/TodoList';

const Home = () => {
  return (
    <Container>
      <Header />
      <TodoForm />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </Container>
  );
};

export default Home;
