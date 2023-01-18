import { useState, useRef, FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailWrap, IdWrap } from './style';
import { Text, Title } from '../todoItem/style';
import { ButtonWrap } from '../todoItem/style';
import { Input } from '../todoForm/style';
import Buttons from '../todoItem/Buttons';
import { updateTodo } from '../../redux/modules/todoSlice';
import { useAppDispatch } from '../../hooks/useRedux';
import { TodoType } from '../todoForm/TodoForm';

const TodoDetail: FunctionComponent<TodoType> = ({ id, title, content, isDone }: TodoType) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newContent, setNewContent] = useState<string>(content);
  const newTitleInput = useRef<HTMLInputElement>(null);
  const newContentInput = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // 이전 페이지 이동 핸들러
  const previousPageHanlder = () => {
    navigate(-1);
  };

  // 투두 수정 핸들러
  const editTodoHandler = () => {
    if (isEdit) {
      if (!newTitle || !newContent) {
        if (!newTitle) {
          alert('제목을 입력해주세요.');
          newTitleInput?.current?.focus();
        } else {
          alert('내용을 입력해주세요.');
          newContentInput?.current?.focus();
        }
        return;
      }

      dispatch(
        updateTodo({
          id,
          title: newTitle,
          content: newContent,
          isDone,
        })
      );
    }

    setIsEdit(!isEdit);
  };

  return (
    <DetailWrap>
      <IdWrap>
        <strong>ID</strong> <span>{id}</span>
      </IdWrap>
      <Title>
        📍 {!isEdit && title}
        {isEdit && (
          <Input
            isEdit={isEdit}
            type="text"
            placeholder={newTitle}
            id="title"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            ref={newTitleInput}
          />
        )}
      </Title>
      <Text isEdit={isEdit}>
        {!isEdit && content}
        {isEdit && (
          <textarea
            placeholder={newContent}
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
            ref={newContentInput}
            rows={5}
            cols={28}
          />
        )}
      </Text>
      <ButtonWrap>
        <Buttons onEdit={editTodoHandler} id={id} types={'edit'} name={'수정'} />
        <Buttons onBack={previousPageHanlder} types={'backward'} name={'뒤로'} />
      </ButtonWrap>
    </DetailWrap>
  );
};

export default TodoDetail;
