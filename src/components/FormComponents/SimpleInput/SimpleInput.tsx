import { useState } from 'react';
import './SimpleInput.scss';

export interface SimpleInputProps {
  iconName: string;
  type: string;
  minLength: number;
  placeHolder: string;
  onChange: () => void;
  name: string;
  value: string
}

const SimpleInput: React.VoidFunctionComponent<SimpleInputProps> = ({
  iconName,
  type,
  onChange,
  placeHolder,
  minLength,
  name,
  value,
}) => {

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <div className="simple-input__box" data-testid="simple-input-box">
      { iconName ?
        <i className="material-icons"> {iconName} </i>:''
      }
      <input 
        className="simple-input" 
        value={value}
        name={name}
        minLength={minLength}
        placeholder={placeHolder}
        type={ passwordVisibility ? 'text' : type } required
        data-testid="simple-input"
        onChange={onChange} />
      {
        type === 'password' ?
        <div 
          className="simple-input__visibility-button"
          data-testid="simple-input-visibility-button"
          onClick={() => setPasswordVisibility(!passwordVisibility)}>
          <i className="material-icons"> { passwordVisibility ? 'visibility_off' : 'visibility' } </i>
        </div>:''
      }
    </div>
  );
};

export default SimpleInput;
