import { useParams } from 'react-router-dom';
import TodoDetail from '../components/todoDetail/TodoDetail';
import { useAppSelector } from '../hooks/useRedux';

const Detail = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const param = useParams();

  // id와 일치하는 투두 찾기
  const todo = todos.find((item) => item?.id === param?.id);

  return (
    <TodoDetail
      id={todo?.id ?? ''}
      title={todo?.title ?? ''}
      content={todo?.content ?? ''}
      isDone={todo?.isDone ?? false}
    />
  );
};

export default Detail;
