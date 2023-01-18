import { FunctionComponent } from 'react';
import { Button } from './style';

interface ButtonType {
  id?: string;
  name: string;
  types: string;
  onToggle?: (id: string) => void | null;
  onDelete?: (id: string) => void | null;
  onBack?: () => void | null;
  onEdit?: () => void | null;
}

const Buttons: FunctionComponent<ButtonType> = ({
  id,
  name,
  types,
  onToggle,
  onDelete,
  onBack,
  onEdit,
}: ButtonType) => {
  // 클릭 시 타입에 따라 다른 함수가 실행되도록 하는 핸들러
  const onClickHandler = (types: string | null) => {
    const currentId: string = id !== undefined ? id : '';

    switch (types) {
      case 'done':
        return onToggle?.(currentId);
      case 'delete':
        return onDelete?.(currentId);
      case 'backward':
        return onBack?.();
      case 'edit':
        return onEdit?.();
      default:
        return null;
    }
  };

  return (
    <Button onClick={() => onClickHandler(types)} types={types}>
      {name}
    </Button>
  );
};

export default Buttons;
