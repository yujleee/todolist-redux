import { Button } from './style';

const Buttons = ({ id, name, type, onToggle, onDelete }) => {
  return (
    <Button onClick={() => (type === 'done' ? onToggle(id) : onDelete(id))} type={type}>
      {name}
    </Button>
  );
};

export default Buttons;
