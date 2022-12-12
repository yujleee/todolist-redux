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
  font-size: 1.2rem;
`;

export const Text = styled.p`
  height: 50px;
  position: relative;
  margin: 4px 0 1.4rem;
  padding: 0 2.5rem 0 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #232323;
  font-size: 0.94rem;
`;

export const More = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.94rem;
  color: #7d6bf2;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: ${(props) => {
    switch (props.type) {
      case 'edit':
        return 'transparent';
      case 'delete':
        return 'transparent';
      default:
        return '#7d6bf2';
    }
  }};
  border: ${(props) => (props.type !== 'done' ? '1px solid #4B1DF2' : 'none')};
  color: ${(props) => (props.type === 'done' ? '#fff' : '#4B1DF2')};
  border-radius: 4px;
  margin-right: ${(props) => (props.type === 'done' ? '0' : '8px')};
`;
