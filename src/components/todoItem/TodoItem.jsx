import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Buttons from './Buttons';
import { TodoItemWrap, Title, Text, More, ButtonWrap } from './style';
import { toggleDone, deleteTodo } from '../../redux/modules/todoSlice';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  // 투두 완료/취소 토글 핸들러
  const toggleDoneHandler = (id) => {
    dispatch(toggleDone({ id }));
  };

  // 투두 삭제 핸들러
  const deleteTodoHandler = (id) => {
    if (window.confirm('해당 투두를 정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo({ id }));
    }
  };

  return (
    <TodoItemWrap>
      <Title>📍 {item.title}</Title>
      <Text>{item.content}</Text>
      <ButtonWrap>
        <Link to={`/${item.id}`}>
          <More>상세보기</More>
        </Link>
        <Buttons onDelete={deleteTodoHandler} id={item.id} type={'delete'} name={'삭제'} />
        <Buttons
          onToggle={toggleDoneHandler}
          id={item.id}
          type={'done'}
          name={item.isDone ? '취소' : '완료'}
        />
      </ButtonWrap>
    </TodoItemWrap>
  );
};

export default TodoItem;
