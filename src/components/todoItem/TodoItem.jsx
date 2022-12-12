import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Buttons from './Buttons';
import { TodoItemWrap, Title, Text, More, ButtonWrap } from './style';
import { toggleDone, deleteTodo } from '../../redux/modules/todos';

const TodoItem = ({ id, title, content, isDone }) => {
  const dispatch = useDispatch();

  const toggleDoneHandler = (id) => {
    dispatch(toggleDone({ id }));
  };

  const deleteTodoHandler = (id) => {
    if (window.confirm('해당 투두를 정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo({ id }));
    }
  };

  return (
    <TodoItemWrap>
      <Title>📍 {title}</Title>
      <Text>
        {content}
        <Link to={`/todos/${id}`}>
          <More>더보기</More>
        </Link>
      </Text>
      <ButtonWrap>
        <Buttons id={id} type={'edit'} name={'수정'} />
        <Buttons onDelete={deleteTodoHandler} id={id} type={'delete'} name={'삭제'} />
        <Buttons onToggle={toggleDoneHandler} id={id} type={'done'} name={isDone ? '취소' : '완료'} />
      </ButtonWrap>
    </TodoItemWrap>
  );
};

export default TodoItem;
