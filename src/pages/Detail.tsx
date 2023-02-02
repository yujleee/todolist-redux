import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TodoDetail from '../components/todoDetail/TodoDetail';
import { TodoType } from '../components/todoForm/TodoForm';

import { todoState } from '../recoil/todo';

const Detail = () => {
  const todos = useRecoilValue<TodoType[]>(todoState);
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
