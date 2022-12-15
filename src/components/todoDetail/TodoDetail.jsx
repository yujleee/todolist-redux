import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { DetailWrap, IdWrap } from './style';
import { Text, Title } from '../todoItem/style';
import { ButtonWrap } from '../todoItem/style';
import { Input } from '../todoForm/style';
import Buttons from '../todoItem/Buttons';
import { updateTodo } from '../../redux/modules/todos';

const TodoDetail = ({ id, title, content, isDone }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const newTitleInput = useRef();
  const newContentInput = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 이전 페이지 이동 핸들러
  const previousPageHanlder = () => {
    navigate(-1, true);
  };

  // 투두 수정 핸들러
  const editTodoHandler = () => {
    if (isEdit) {
      if (!newTitle || !newContent) {
        if (!newTitle) {
          alert('제목을 입력해주세요.');
          newTitleInput.current.focus();
        } else {
          alert('내용을 입력해주세요.');
          newContent.current.focus();
        }
        return false;
      }

      dispatch(
        updateTodo({
          id: id,
          title: newTitle,
          content: newContent,
          isDone: isDone,
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
        <Buttons onEdit={editTodoHandler} id={id} type={'edit'} name={'수정'} />
        <Buttons onBack={previousPageHanlder} type={'backward'} name={'뒤로'} />
      </ButtonWrap>
    </DetailWrap>
  );
};

export default TodoDetail;
