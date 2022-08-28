import React, { useState } from 'react';
import SimpleInput, { SimpleInputProps } from '../SimpleInput/SimpleInput';
import './SignUpForm.scss';

export interface SignUpFormProps {
  onSubmit: (payload: any) => void;
}

const SignUpForm: React.VoidFunctionComponent<SignUpFormProps> = ({
  onSubmit
}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userInputProps: SimpleInputProps =  {
    iconName: 'user',
    type: 'text',
    minLength: 12,
    placeHolder: 'Email or User name',
    onChange: (value: string) => { setUserName(value); },
    name: "user_name",
    value: ''
  };
  const passwordInputProps: SimpleInputProps =  {
    iconName: 'password',
    type: 'password',
    minLength: 12,
    placeHolder: 'Password',
    onChange: (value: string) => { setPassword(value); },
    name: "user_password",
    value: ''
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ userName, password});
  }

  return (
    <div className="sign-up-form" data-testid="sign-up-form">
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <SimpleInput {...userInputProps} />
        <SimpleInput {...passwordInputProps} />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
