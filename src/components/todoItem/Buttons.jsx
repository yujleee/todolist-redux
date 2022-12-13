import { Button } from './style';

const Buttons = ({ id, name, type, onToggle, onDelete, onBack, onEdit }) => {
  // 클릭 시 타입에 따라 다른 함수가 실행되도록 하는 핸들러
  const onClickHandler = (type) => {
    switch (type) {
      case 'done':
        return onToggle(id);
      case 'delete':
        return onDelete(id);
      case 'backward':
        return onBack();
      case 'edit':
        return onEdit();
      default:
        return null;
    }
  };

  return (
    <Button onClick={() => onClickHandler(type)} type={type}>
      {name}
    </Button>
  );
};

export default Buttons;
