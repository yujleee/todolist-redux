import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Buttons from './Buttons';
import { TodoItemWrap, Title, Text, More, ButtonWrap } from './style';
import { toggleDone, deleteTodo } from '../../redux/modules/todos';

const TodoItem = ({ id, title, content, isDone }) => {
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
      <Title>📍 {title}</Title>
      <Text>{content}</Text>
      <ButtonWrap>
        <Link to={`/todos/${id}`}>
          <More>상세보기</More>
        </Link>
        <Buttons onDelete={deleteTodoHandler} id={id} type={'delete'} name={'삭제'} />
        <Buttons onToggle={toggleDoneHandler} id={id} type={'done'} name={isDone ? '취소' : '완료'} />
      </ButtonWrap>
    </TodoItemWrap>
  );
};

export default TodoItem;
