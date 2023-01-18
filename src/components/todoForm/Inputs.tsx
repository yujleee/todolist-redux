import { ChangeEvent, ForwardedRef } from 'react';
import { Label, Input } from './style';

interface InputTypes {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ref: ForwardedRef<HTMLInputElement>;
}

const Inputs = ({ label, id, value, onChange, ref }: InputTypes) => {
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
        ref={ref}
      />
    </>
  );
};

export default Inputs;
