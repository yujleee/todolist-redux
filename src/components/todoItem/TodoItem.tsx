import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import { TodoItemWrap, Title, Text, More, ButtonWrap } from './style';
import { toggleDone, deleteTodo } from '../../redux/modules/todoSlice';
import { useAppDispatch } from '../../hooks/useRedux';
import { TodoType } from '../todoForm/TodoForm';
import { FunctionComponent } from 'react';

interface ItemProps {
  item: TodoType;
}

const TodoItem: FunctionComponent<ItemProps> = ({ item }: ItemProps) => {
  const dispatch = useAppDispatch();

  // 투두 완료/취소 토글 핸들러
  const toggleDoneHandler = (id: string) => {
    dispatch(toggleDone({ id }));
  };

  // 투두 삭제 핸들러
  const deleteTodoHandler = (id: string) => {
    if (window.confirm('해당 투두를 정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo({ id }));
    }
  };

  return (
    <TodoItemWrap>
      <Title>📍 {item.title}</Title>
      <Text isEdit={null}>{item.content}</Text>
      <ButtonWrap>
        <Link to={`/${item.id}`}>
          <More>상세보기</More>
        </Link>
        <Buttons onDelete={deleteTodoHandler} id={item.id} types={'delete'} name={'삭제'} />
        <Buttons
          onToggle={toggleDoneHandler}
          id={item.id}
          types={'done'}
          name={item.isDone ? '취소' : '완료'}
        />
      </ButtonWrap>
    </TodoItemWrap>
  );
};

export default TodoItem;
