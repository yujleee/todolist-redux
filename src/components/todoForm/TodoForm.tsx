import { useState, useRef, ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { v4 as uuid } from 'uuid';
import { HiddenTitle } from '../Container';
import Inputs from './Inputs';
import { addTodo } from '../../redux/modules/todoSlice';
import { FormWrap, Button } from './style';
import { useAppDispatch } from '../../hooks/useRedux';

export interface TodoType {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const TodoForm: FunctionComponent = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const titleInput = useRef<HTMLInputElement | null>(null);
  const contentInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  // 제목 입력값 상태 변화
  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // 내용 입력값 상태 변화
  const changeContentHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  // 투두 추가
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 제목이나 내용이 없는 경우 경고 띄워주고 focus
    if (!title || !content) {
      if (!title) {
        alert('제목을 입력해주세요.');
        titleInput?.current?.focus();
      } else {
        alert('내용을 입력해주세요.');
        contentInput?.current?.focus();
      }

      return false;
    }

    const newTodo: TodoType = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));

    setTitle('');
    setContent('');
    return true;
  };

  return (
    <FormWrap>
      <HiddenTitle>투두 입력</HiddenTitle>
      <form onSubmit={submitHandler}>
        <Inputs
          label={'제목'}
          id={'title'}
          value={title}
          onChange={changeTitleHandler}
          ref={titleInput}
        />
        <Inputs
          label={'내용'}
          id={'contents'}
          value={content}
          onChange={changeContentHandler}
          ref={contentInput}
        />
        <Button type="submit">추가</Button>
      </form>
    </FormWrap>
  );
};

export default TodoForm;
