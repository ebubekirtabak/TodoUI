
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpForm, { SignUpFormProps } from './SignUpForm';

const signUpProps: SignUpFormProps = {
  onSubmit: jest.fn((object: any) => { console.log(object); }),
};


describe('SignUpForm Component', () => {
  it('should be visible', () => {
    render(<SignUpForm {...signUpProps} />);  
    expect(screen.getByTestId('sign-up-form')).toBeVisible()
  });
  
  it('should be called with correct payload', () => {
    render(<SignUpForm {...signUpProps} />);  
    const userNameInput = screen.getByPlaceholderText('Email or User name');
    const userPasswordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button');
    fireEvent.change(userNameInput, {target: {value: 'userName'}});
    fireEvent.change(userPasswordInput, {target: {value: 'userPassword'}});
    fireEvent.click(submitButton);
    expect(signUpProps.onSubmit).toHaveBeenCalled();
    expect(signUpProps.onSubmit).toHaveBeenCalledWith( { userName: 'userName', password: 'userPassword' });
  });
});
