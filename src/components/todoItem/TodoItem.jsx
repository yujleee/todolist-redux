import Buttons from './Buttons';
import { TodoItemWrap, Title, Text, More, ButtonWrap } from './style';

const TodoItem = () => {
  return (
    <TodoItemWrap>
      <Title>📍 제목이 들어가요</Title>
      <Text>
        내용이 들어가요 내용이 들어가요
        <More>더보기</More>
      </Text>
      <ButtonWrap>
        <Buttons type={'edit'} name={'수정'} />
        <Buttons type={'delete'} name={'삭제'} />
        <Buttons type={'done'} name={'완료'} />
      </ButtonWrap>
    </TodoItemWrap>
  );
};

export default TodoItem;
