import { Label, Input } from './style';
interface InputTypes {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueRef: React.ForwardedRef<HTMLInputElement>;
}

const Inputs = ({ label, id, value, onChange, valueRef }: InputTypes) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        isEdit={false}
        className={id === 'contents' ? 'contents' : ''}
        type="text"
        placeholder={label}
        id={id}
        value={value}
        onChange={onChange}
        ref={valueRef}
      />
    </>
  );
};

export default Inputs;
