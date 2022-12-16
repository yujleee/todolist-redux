import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { HiddenTitle } from '../Container';
import Inputs from './Inputs';
import { addTodo } from '../../redux/modules/todos';
import { FormWrap, Button } from './style';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleInput = useRef();
  const contentInput = useRef();
  const dispatch = useDispatch();

  // 제목 입력값 상태 변화
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 입력값 상태 변화
  const changeContentHandler = (event) => {
    setContent(event.target.value);
  };

  // 투두 추가
  const submitHandler = (event) => {
    event.preventDefault();

    // 제목이나 내용이 없는 경우 경고 띄워주고 focus
    if (!title || !content) {
      if (!title) {
        alert('제목을 입력해주세요.');
        titleInput.current.focus();
      } else {
        alert('내용을 입력해주세요.');
        contentInput.current.focus();
      }

      return false;
    }

    dispatch(
      addTodo({
        id: uuid(),
        title,
        content,
        isDone: false,
      })
    );

    setTitle('');
    setContent('');
    return true;
  };

  return (
    <FormWrap>
      <HiddenTitle>투두 입력</HiddenTitle>
      <form onSubmit={submitHandler}>
        <Inputs label={'제목'} id={'title'} value={title} onChange={changeTitleHandler} ref={titleInput} />
        <Inputs label={'내용'} id={'contents'} value={content} onChange={changeContentHandler} ref={contentInput} />
        <Button type="submit">추가</Button>
      </form>
    </FormWrap>
  );
};

export default TodoForm;
