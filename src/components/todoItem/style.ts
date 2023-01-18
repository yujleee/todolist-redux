import styled from 'styled-components';

export const TodoItemWrap = styled.li`
  width: 300px;
  height: 180px;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 0 1rem 1rem 0;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p<{ isEdit: boolean | null }>`
  // isEdit은 수정중일 때
  height: ${(props) => (props.isEdit ? 'auto' : '50px')};
  margin: 4px 0 1.4rem;
  padding: 0 0.4rem;
  overflow: ${(props) => (props.isEdit ? 'hidden' : '')};
  text-overflow: ${(props) => (props.isEdit ? 'ellipsis' : '')};
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isEdit ? '2' : '')};
  -webkit-box-orient: vertical;
  color: #232323;
  font-size: 0.94rem;

  textarea {
    padding-right: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.94rem;
    padding: 10px;
  }
`;

export const More = styled.span`
  position: absolute;
  left: 0;
  bottom: 2px;
  font-size: 0.94rem;
  color: #7d6bf2;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    color: #4b1df2;
  }
`;

export const ButtonWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button<{ types: string }>`
  // 버튼 타입이 done(완료), backward(뒤로가기)일때만 다르게 스타일 적용
  width: 50px;
  height: 30px;
  font-weight: 600;
  background-color: ${(props) => {
    switch (props.types) {
      case 'done':
      case 'backward':
        return '#7d6bf2';
      default:
        return 'transparent';
    }
  }};
  border: ${(props) =>
    props.types === 'done' || props.types === 'backward' ? 'none' : '1px solid #4B1DF2'};
  color: ${(props) => {
    switch (props.types) {
      case 'done':
      case 'backward':
        return '#fff';
      default:
        return '#4B1DF2';
    }
  }};
  border-radius: 4px;
  margin-right: ${(props) => (props.types === 'done' ? '0' : '8px')};

  &:hover {
    color: ${(props) => {
      switch (props.types) {
        case 'done':
        case 'backward':
          return '#fff';
        default:
          return '#4218d9';
      }
    }};

    background-color: ${(props) => {
      switch (props.types) {
        case 'done':
        case 'backward':
          return '#4218d9';
        default:
          return 'transparent';
      }
    }};

    border: ${(props) =>
      props.types === 'done' || props.types === 'backward' ? 'none' : '1px solid #4218d9'};
  }
`;
