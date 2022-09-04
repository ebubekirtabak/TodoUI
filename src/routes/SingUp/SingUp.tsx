import { useState } from 'react';
import './SignUp.scss';

export interface SignUpProps {

}

const SignUp: React.VoidFunctionComponent<SignUpProps> = ({
}) => {

  return (
    <div className="sign-up" data-testid="sign-up">
      <h2 className="sign-up__title">SignUp</h2>
      <div className="sign-up__content">

      </div>
    </div>
  );
};

export default SignUp;
