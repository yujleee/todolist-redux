import { HiddenTitle } from '../Container';
import { FormWrap, Label, Input, Button } from './style';

const TodoForm = () => {
  return (
    <FormWrap>
      <HiddenTitle>투두 입력</HiddenTitle>
      <form action="/">
        <Label htmlFor="title">제목</Label>
        <Input type="text" id="title" />
        <Label htmlFor="contents">내용</Label>
        <Input className="contents" type="text" id="contents" />
        <Button>추가</Button>
      </form>
    </FormWrap>
  );
};

export default TodoForm;
