
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleInput, { SimpleInputProps } from './SimpleInput';

const inputConfigs: SimpleInputProps = {
  iconName: 'password',
  type: 'password',
  minLength: 12,
  placeHolder: 'Password',
  onChange: jest.fn(() => {}),
  name: "user_password",
  value: 'testPassword'
};


describe('SimpleInput Component', () => {
  it('should be visible', () => {
    render(<SimpleInput {...inputConfigs} />);  
    expect(screen.getByTestId('simple-input-box')).toBeVisible()
  });
  
  it('should be visible have same value', () => {
    render(<SimpleInput {...inputConfigs} />);  
    expect(screen.getByTestId('simple-input')).toHaveValue(inputConfigs.value);
  });

  it('should be called on change', () => {
    render(<SimpleInput {...inputConfigs} />);  
    const input = screen.getByTestId('simple-input');
    fireEvent.change(input, {target: {value: 'newPassword'}})
    expect(inputConfigs.onChange).toHaveBeenCalled();
  });
  
  it('should be change password visibility', () => {
    render(<SimpleInput {...inputConfigs} />);  
    const input = screen.getByTestId('simple-input');
    const visibilityButton = screen.getByTestId('simple-input-visibility-button');
    fireEvent.click(visibilityButton);
    expect(input).toHaveAttribute("type", 'text');
  });
});
